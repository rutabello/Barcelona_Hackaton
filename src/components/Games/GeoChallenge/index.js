import React, { Component } from 'react';
import countriesDB from 'country-data'; // This library is cool but doesn't have coordinates
import coordinates from './coordinates'; // array of coordintaes by country
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './geoChallenge.css'
import {Link} from 'react-router-dom';
const Leaflet = window.L;


// This fn removes the countries on countriesDB.countries.all that are not
// found on the coordinates array so the map doesn't crash trying to render them.
// It also removes the countries without a flag
const sanitizeCountries = () => {
  return countriesDB.countries.all.filter(country =>
    coordinates.filter(item => item.country === country.alpha2).length > 0 && country.emoji !== undefined);
}
const countries = sanitizeCountries();

class GeoChallenge extends Component {

  state = {
    options: [],
    bounds: [[90, -180], [-90, 180]],
    center: [0, 0],
    correctAnswers: 0,
    totalAnswers: 0
  }
 // method to randomly shuffle
  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  // Will return the coordinates of a given (isoCode) country
  // Response format: [lat, long]
  getCoordinates(isoCode) {
    const countryCoordinates = coordinates.filter(item => item.country === isoCode)[0];
    // When using filter we get an array, use [0] to grab the first (and only, hopefully) result

    // We still have 249 countries in this list but 289 on the full countriesDB :(
    if (countryCoordinates === undefined) {
      // Not the best fallback ever
      // A better option could be to sanitize the array of countries before
      // using it.
      // After the sanitize function there are 5 ghosts countries :S
      return [0, 0];
    }

    return [countryCoordinates.latitude, countryCoordinates.longitude];
  }

  // Set the four options randomly.
  // Take the first one as the one to guess.
  getFourRandomCountries() {
    this.shuffle(countries);
    const options = countries.slice(0, 4).map(country => {
      return this.getCountryWithCoordinates(country)
    });

    this.setState({
      options 
    }, this.defineMapBounds);
  }

  // Will return randomly a country object
  getCountryWithCoordinates(country) {
    const countryCoordinates = this.getCoordinates(country.alpha2)

    // Add the key 'coordinates' to the object country
    return {...country, coordinates: countryCoordinates}
  }

  // Will return randomly a country object
  getRandomCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length),
      randomCountry = countries[randomIndex],
      randomCountryCoordinates = this.getCoordinates(randomCountry.alpha2)

    // Add the key 'coordinates' to the object country
    return {...randomCountry, coordinates: randomCountryCoordinates}
  }

  // Will set the center and the bounds of the map so we can use
  // auto zoom and always show a good portion of the map with the
  // four pins visible.
  // The coordinates have this format: [lat, long]
  // where lat is y-axis (from -90 to 90) and long is x-axis (from -180 to 180)
  defineMapBounds() {
    
    const coordinates = this.state.options.map(i => i.coordinates);

    let maxX = 0,
      minX = 0,
      maxY = 0,
      minY = 0;

    coordinates.forEach(coord => {
      if (coord[0] > maxY) {
        maxY = coord[0];
      }
      
      if (coord[0] < minY) {
        minY = coord[0];
      }

      if (coord[1] > maxX) {
        maxX = coord[1];
      }
      
      if (coord[1] < minX) {
        minX = coord[1];
      }
    })

    // Bounds are defined by two coordinates:
    // position1: the most W and N
    // position2: the most E and S
    this.setState({
      bounds: [[maxY, minX], [minY, maxX]],
      center: [(maxY - minY) / 2, (maxX - minX) / 2]
    })
  }

  // Checks if the answer is correct and fire a new round of 4 random
  // countries after 1,5s
  onPinClicked = (name) => {

    this.setState({
      totalAnswers: this.state.totalAnswers + 1
    })

    if (name === this.state.options[0].name) {
      this.setState({
        correctAnswers: this.state.correctAnswers + 1
      }, () => setTimeout(() => this.getFourRandomCountries(), 1500));
    
    } else {
      setTimeout(() => this.getFourRandomCountries(), 1500)
    }
  }


  componentDidMount() {
    this.getFourRandomCountries();
  }

  render() {
    
    const bounds = Leaflet.latLngBounds(this.state.bounds);

    return (
      <div className="mapContent">
        <button className="exitButton"><Link to="/">&lt;&lt; Exit Game</Link></button>
        {
          this.state.options.length > 0
            ? (
              <div className="flagDisplay">
                <p>Guess this flag:</p>
                <span className="flag">{this.state.options[0].emoji}</span>
              </div>
            )
            : null
        }
        <p className="counterText">Correct answers: {this.state.correctAnswers} out of {this.state.totalAnswers}</p>
        <div className="leaflet-container">
          <LeafletMap
          bounds={bounds}
          center={this.state.center}
          attributionControl={false}
          zoomControl={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          dragging={false}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
          
          { this.state.options.map(country => (
              <Marker key={country.alpha2} onClick={() => this.onPinClicked(country.name)} position={country.coordinates}>
                <Popup>
                  <p>
                    <span className="flag">{country.emoji}</span>
                    This is {country.name}
                  </p> 
                </Popup>
              </Marker>
            ))
          }
        </LeafletMap>
        </div>
      </div>
    )
  }
}

export default GeoChallenge;