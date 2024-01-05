import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Cart() {

  const navigate = useNavigate();
  function click() {
    navigate("/")
  }

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div className="Cart">
      <section class="section-pagetop bg m-5">
        <div class="container">
          <h2 class="title-page">Shopping cart</h2>
        </div>
      </section>

      <section class="section-content padding-y">
        <div class="container">
          <div class="row">
            <main class="col-md-12">
              <div class="card">
                <table class="table table-borderless table-shopping-cart">
                  <thead class="text-muted">
                    <tr class="small text-uppercase">
                      <th scope="col" width="10"></th>
                      <th scope="col" width="100">
                        Product
                      </th>
                      <th scope="col" width="120"></th>
                      <th scope="col" width="120">
                        Quantity
                      </th>
                      <th scope="col" width="100">
                        Price
                      </th>
                      <th scope="col" width="10"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <figure class="itemside">
                          <div class="aside">
                            <img
                              src={require("../Asset/Flower/f1.png")}
                              className="rounded"
                              height={"100px"}
                            />
                          </div>
                        </figure>
                      </td>
                      <td>
                        <h6 class="title text-dark card-text">Rose</h6>
                      </td>
                      <td>
                        <h6 class="title text-dark">2</h6>
                      </td>
                      <td>
                        <div class="price-wrap">
                          <small class="text-muted">Rp. 500.000</small>
                        </div>
                      </td>
                      <td class="text-right">
                        <button class="btn btn-danger">Remove</button>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <figure class="itemside">
                          <div class="aside">
                            <img
                              src={require("../Asset/Flower/f2.png")}
                              className="rounded"
                              height={"100px"}
                            />
                          </div>
                        </figure>
                      </td>
                      <td>
                        <h6 class="title text-dark">Tulip</h6>
                      </td>
                      <td>
                        <h6 class="title text-dark">1</h6>
                      </td>
                      <td>
                        <div class="price-wrap">
                          <small class="text-muted">Rp. 500.000</small>
                        </div>
                      </td>
                      <td class="text-right">
                        <button class="btn btn-danger">Remove</button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="card-body border-top mx-3">
                  <dl class="dlist-align">
                    <dt>Total Quantity:</dt>
                    <dd class="text-right">3</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Total price:</dt>
                    <dd class="text-right">Rp. 1.000.000</dd>
                  </dl>
                </div>
                <div class="card-body border-top ">
                  <Button
                    className="mx-3"
                    variant="success"
                    disabled={isLoading}
                    onClick={!isLoading ? handleClick : null}
                  >
                    {isLoading ? "Loading…" : "Checkout"}
                  </Button>
                  <button onClick={(e) => click()} class="btn btn-light">
                    Continue shopping
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
