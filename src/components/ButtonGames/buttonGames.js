import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../ButtonGames/buttonGames.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import cityban from '../imgmainPage/city@2x.png';
import tackle from '../imgmainPage/tackle@2x.png'


// const ButtonGames =(props)=>{
//     return (
//         <div>
//         <button>
// <Link to='cityplay'> Jugar
// </Link></button>
//       <button>
// <Link to='tacleclick'> Jugar
// </Link></button>
// </div>
//     )
// }

const ButtonGames = (props)=>{
    return(
        <div>
        <Fragment>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cityban}
      alt="First slide"
    />
    <Carousel.Caption>
      <button className='myButton'>
        <Link to='cityplay' className='jugartext'> Jugar
        </Link></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsUqRYnCvLDweQUDT96a2AkKgTccxvS12zPLupryRPMhiZ1S1N"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Geo Challange</h3>
      <p>Cuánto sabes de banderas!</p>
      <button className='myButton'>
        <Link to='geochallange' className='jugartext'> Jugar
        </Link></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tackle}
      alt="Third slide"
    />

    <Carousel.Caption>
      <button className='myButton'>
        <Link to='tacleclick' className='jugartext'> Jugar
        </Link></button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Fragment>
<Fragment>
<CardDeck className='cardcarousel'>
  <Card>
    <Card.Img variant="top" src={cityban}
/>
    <Card.Body> 
      <Card.Title>City Play</Card.Title>
      <Card.Text>
      Descubre las capitales del mundo!
      </Card.Text>
      <button className='myButton'>
        <Link to='cityplay' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsUqRYnCvLDweQUDT96a2AkKgTccxvS12zPLupryRPMhiZ1S1N"
 />
    <Card.Body>
      <Card.Title>Geo Challange</Card.Title>
      <Card.Text>
      Cuánto sabes de banderas!
      </Card.Text>
      <button className='myButton'>
        <Link to='geochallange' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={tackle}
 />
    <Card.Body>
      <Card.Title>Tacle Click</Card.Title>
      <Card.Text>
      Tacle tacle click
      </Card.Text>
      <button className='myButton'>
        <Link to='tacleclick' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  
</CardDeck>
</Fragment>
<Fragment>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://eurocold.co.uk/wp-content/uploads/2015/08/dark-blue-box.png"
/>
    <Card.Body>
      <Card.Title>Juego</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content.
      </Card.Text>
      <button className='myButton'>
        <Link to='/' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://eurocold.co.uk/wp-content/uploads/2015/08/dark-blue-box.png"
 />
    <Card.Body>
      <Card.Title>Juego</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </Card.Text>
      <button className='myButton'>
        <Link to='/' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://eurocold.co.uk/wp-content/uploads/2015/08/dark-blue-box.png"
 />
    <Card.Body>
      <Card.Title>Juego</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content.
      </Card.Text>
      <button className='myButton'>
        <Link to='/' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  
</CardDeck>
</Fragment>
</div>
    )
}
export default ButtonGames