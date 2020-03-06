import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../ButtonGames/buttonGames.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'

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
      src="https://compass-ssl.xbox.com/assets/7a/0f/7a0fb21a-df9e-490a-894e-3d44a87d59fd.jpg?n=Fortnite_gallery-0_1350x759_01.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>CITY PLAY</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum inst.</p>
      <button className='myButton'>
        <Link to='cityplay' className='jugartext'> Jugar
        </Link></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://compass-ssl.xbox.com/assets/7a/0f/7a0fb21a-df9e-490a-894e-3d44a87d59fd.jpg?n=Fortnite_gallery-0_1350x759_01.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className='myButton'>
        <Link to='tacleclick' className='jugartext'> Jugar
        </Link></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://compass-ssl.xbox.com/assets/7a/0f/7a0fb21a-df9e-490a-894e-3d44a87d59fd.jpg?n=Fortnite_gallery-0_1350x759_01.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <button className='myButton'>
        <Link to='' className='jugartext'> Jugar
        </Link></button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Fragment>
<Fragment>
<CardDeck className='cardcarousel'>
  <Card>
    <Card.Img variant="top" src="https://compass-ssl.xbox.com/assets/7a/0f/7a0fb21a-df9e-490a-894e-3d44a87d59fd.jpg?n=Fortnite_gallery-0_1350x759_01.jpg"
/>
    <Card.Body> 
      <Card.Title>City Play</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <button className='myButton'>
        <Link to='cityplay' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://compass-ssl.xbox.com/assets/7a/0f/7a0fb21a-df9e-490a-894e-3d44a87d59fd.jpg?n=Fortnite_gallery-0_1350x759_01.jpg"
 />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </Card.Text>
      <button className='myButton'>
        <Link to='cityplay' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://compass-ssl.xbox.com/assets/7a/0f/7a0fb21a-df9e-490a-894e-3d44a87d59fd.jpg?n=Fortnite_gallery-0_1350x759_01.jpg"
 />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content.
      </Card.Text>
      <button className='myButton'>
        <Link to='' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  
</CardDeck>
</Fragment>
<Fragment>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://compass-ssl.xbox.com/assets/7a/0f/7a0fb21a-df9e-490a-894e-3d44a87d59fd.jpg?n=Fortnite_gallery-0_1350x759_01.jpg"
/>
    <Card.Body>
      <Card.Title>City Play</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <button className='myButton'>
        <Link to='' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://compass-ssl.xbox.com/assets/7a/0f/7a0fb21a-df9e-490a-894e-3d44a87d59fd.jpg?n=Fortnite_gallery-0_1350x759_01.jpg"
 />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </Card.Text>
      <button className='myButton'>
        <Link to='' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://compass-ssl.xbox.com/assets/7a/0f/7a0fb21a-df9e-490a-894e-3d44a87d59fd.jpg?n=Fortnite_gallery-0_1350x759_01.jpg"
 />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content.
      </Card.Text>
      <button className='myButton'>
        <Link to='' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  
</CardDeck>
</Fragment>
</div>
    )
}
export default ButtonGames