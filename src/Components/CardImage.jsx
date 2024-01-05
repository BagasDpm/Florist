import { Card, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function CardImage({image, name, price}) {
    return (
      <Col md={3} xs={6} className="mb-3">    
          <Card>
            <Card.Img src={image} style={{width: '100%', height: '300px'}}/>
            <Card.Body className="text-center">
              <Card.Title>{name}</Card.Title>
            <Card.Text>Rp. {price}</Card.Text>
            <Link to="/detail" class="btn btn-outline-danger">
              Cek Detail
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
}

function dataProduct() {
  return (
    <div className="row mx-0">
      <CardImage image={require('../Asset/Flower/f1.png')} name={'Rose'} price={"2.800.000"}/>
      <CardImage image={require('../Asset/Flower/f2.png')} name={'Rose'} price={"2.800.000"}/>
      <CardImage image={require('../Asset/Flower/f3.png')} name={'Rose'} price={"2.800.000"}/>
      <CardImage image={require('../Asset/Flower/f4.png')} name={'Rose'} price={"2.800.000"}/>
      <CardImage image={require('../Asset/Flower/f5.png')} name={'Rose'} price={"2.800.000"}/>
      <CardImage image={require('../Asset/Flower/f6.png')} name={'Rose'} price={"2.800.000"}/>
      <CardImage image={require('../Asset/Flower/f7.png')} name={'Rose'} price={"2.800.000"}/>
      <CardImage image={require('../Asset/Flower/f8.png')} name={'Rose'} price={"2.800.000"}/>
      <CardImage image={require('../Asset/Flower/f9.png')} name={'Rose'} price={"2.800.000"}/>
      <CardImage image={require('../Asset/Flower/f10.png')} name={'Rose'} price={"2.800.000"}/>
    </div>
  )
}
export default dataProduct;

