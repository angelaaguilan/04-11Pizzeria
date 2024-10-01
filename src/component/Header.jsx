import Card from 'react-bootstrap/Card';
import pizzeriaHeader from '../assets/imgs/pizzeriaHeader.png';


const Header = () => {
  
  const styleLine = {width: '70%', margin: '2% 15% 0 15%', borderTop: '3px solid'}
  const altImage="Pizzería Mamma Mia"
  const title="¡Pizzería Mamma Mia!"
  const description="Tenemos las mejores pizzas que podrás encontrar!"
   
  return (
    <>
      <Card className='bg-dark text-white text-center'>
        <Card.Img
          src={pizzeriaHeader}
          alt= {altImage}
        />
        <Card.ImgOverlay>
          <Card.Title style={{fontSize: '60px'}}>{title}</Card.Title>
          <Card.Text className='mt-4 pb-3 h5'>{description}</Card.Text>
          <hr style={styleLine} />
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default Header;
