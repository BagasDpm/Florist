import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SnackBouqet({ image, name, price }) {
  return (
    <Col md={3} xs={6} className="mb-3">
      <Card>
        <Card.Img src={image} style={{ width: "100%", height: "300px" }} />
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

function dataSnack() {
  return (
    <div className="row mx-5">
      <SnackBouqet
        image={require("./../../Asset/Snack/sn1.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <SnackBouqet
        image={require("./../../Asset/Snack/sn2.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
    </div>
  );
}
export default dataSnack;
