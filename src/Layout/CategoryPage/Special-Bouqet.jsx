import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SpecialBouqet({ image, name, price }) {
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

function dataSpecial() {
  return (
    <div className="row mx-5">
      <SpecialBouqet
        image={require("./../../Asset/Special/s1.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <SpecialBouqet
        image={require("./../../Asset/Special/s2.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <SpecialBouqet
        image={require("./../../Asset/Special/s3.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <SpecialBouqet
        image={require("./../../Asset/Special/s4.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <SpecialBouqet
        image={require("./../../Asset/Special/s5.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <SpecialBouqet
        image={require("./../../Asset/Special/s6.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <SpecialBouqet
        image={require("./../../Asset/Special/s7.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <SpecialBouqet
        image={require("./../../Asset/Special/s8.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <SpecialBouqet
        image={require("./../../Asset/Special/s9.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
    </div>
  );
}
export default dataSpecial;
