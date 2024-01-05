import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function MoneyBouqet({ image, name, price }) {
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

function dataMoney() {
  return (
    <div className="row mx-5">
      <MoneyBouqet
        image={require("./../../Asset/Money/m1.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m2.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m3.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m4.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m5.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m6.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m7.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m8.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m9.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m10.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m11.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m12.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m13.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
      <MoneyBouqet
        image={require("./../../Asset/Money/m14.png")}
        name={"Rose"}
        price={"2.800.000"}
      />
    </div>
  );
}
export default dataMoney;
