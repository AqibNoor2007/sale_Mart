import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Loader } from "../../../Components/Atom";
import "./index.css";
import { Carousel, Col, Row } from "react-bootstrap";
import "react-slideshow-image/dist/styles.css";
import ReactStars from "react-rating-stars-component";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) getProduct(id);
  }, [id]);

  const getProduct = async (id) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(response);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="productMain">
        <div className="btn-logo">
          <img
            onClick={() => navigate(-1)}
            src="/back.svg"
            alt=""
            className="detail-logo"
            style={{ cursor: "pointer" }}
          />
          <img src="/productLogo.avif" alt="" className="detail-logo" />
        </div>
        {product ? (
          <Row>
            <Col md={7} sm={12} className="image-parent-height">
              <Carousel>
                {product.images.map((url, index) => (
                  <Carousel.Item key={index}>
                    <div
                      key={index}
                      className="images"
                      style={{
                        backgroundImage: `url(${url})`,
                      }}
                    ></div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col md={5} sm={12} className="detail-card">
              <div className="detail-container">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 className="captilize">{product.title.slice(0, 10)} </h4>{" "}
                  <div style={{ marginTop: "-4px" }}>
                    <ReactStars
                      edit={false}
                      size={24}
                      value={product.rating}
                      isHalf={true}
                    />
                  </div>
                </div>
                <div className="divider"></div>
                <h5 className="captilize">Description</h5>
                <p style={{ marginBottom: "20px" }}>{product.description}</p>
                <div>
                  <h5 className="captilize m-10">Membership benefits</h5>
                  <p>
                    Quick refunds on orders under
                    <span style={{ fontWeight: "500" }}>
                      {" "}
                      US $1,000Claim
                    </span>{" "}
                    now
                  </p>
                </div>
                <div>
                  <h5 className="captilize m-10">Purchase details</h5>
                  <div style={{ marginLeft: "10px" }}>
                    <h6>Shipping</h6>
                    <ul>
                      <li>
                        <p style={{ marginBottom: "2px" }}>
                          Shipping fee:{" "}
                          <span style={{ fontWeight: "500" }}>
                            {" "}
                            $58.72(From CN to PK)
                          </span>{" "}
                          now
                        </p>
                      </li>
                      <li>
                        <p style={{ marginBottom: "2px" }}>
                          Enjoy{" "}
                          <span style={{ fontWeight: "500" }}>
                            {" "}
                            On-time Delivery Guarantee:
                          </span>{" "}
                          Receive by Feb 20
                        </p>
                      </li>
                      <li>
                        {" "}
                        <p>
                          Powered by{" "}
                          <span style={{ fontWeight: "500", color: "#f60" }}>
                            {" "}
                            Alibaba.com
                          </span>{" "}
                          Logistics
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <h5 className="captilize m-10">Variations</h5>
                <div className="varition">
                  <div>
                    <p style={{ marginBottom: "2px", fontSize: "17px" }}>
                      Total options:{" "}
                      <span style={{ fontWeight: "500" }}>
                        {product.stock} Stock
                      </span>{" "}
                      ;{" "}
                      <span style={{ fontWeight: "500" }}>
                        {product.price} Price{" "}
                      </span>{" "}
                    </p>
                    <p style={{ marginBottom: "10px", fontSize: "17px" }}>
                      Brand:{" "}
                      <span style={{ fontWeight: "500" }}>{product.brand}</span>
                    </p>
                  </div>
                </div>

                <div className="divider"></div>
                <div className="btn-group">
                  <Button content="Start Order" varient="primary" />
                  <Button content="Add to Cart" varient="secondary" />
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
export default ProductDetail;
