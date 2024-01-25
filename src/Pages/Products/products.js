import { useCallback, useEffect, useState } from "react";
import { AppHeader } from "../../Components/Atom/Hearder/webHearder";
import Fillter from "../../Components/Molicules/Filter/filtter";
import "./products.css";
import axios from "axios";
import { useWidth } from "../../Components/Atom/HelperFunc/useWidth";
import { Loader } from "../../Components/Atom";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [handleSearch, setHandleSearch] = useState();
  const [search, setSearch] = useState();
  const [products, setProducts] = useState();
  const [isFilter, setIsFilter] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [fillter, setFillter] = useState({ categories: "" });
  const [error, setError] = useState();
  const limit = 20;

  const navigate = useNavigate();

  const { isMobile } = useWidth(992);

  const getProducts = useCallback(async () => {
    setProducts();
    setError();
    if (search) {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${
            (currentPage - 1) * limit
          }`
        );
        console.log(response);
        setTotalProducts(response.data.total);
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
        setError("Some thing went wrong our team is fixing this (Thank You)");
      }
    } else if (fillter.categories.length > 0) {
      setCurrentPage(1);
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${
            fillter.categories
          }?limit=${limit}&skip=${(currentPage - 1) * limit}`
        );
        console.log(response);
        setTotalProducts(response.data.total);
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
        setError("Some thing went wrong our team is fixing this (Thank You)");
      }
    } else {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${limit}&skip=${
            (currentPage - 1) * limit
          }`
        );
        console.log(response);
        setTotalProducts(response.data.total);
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
        setError("Some thing went wrong our team is fixing this (Thank You)");
      }
    }
  }, [search, fillter, currentPage]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const createPageBtn = () => {
    const totalPages = Math.ceil(totalProducts / limit);
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <p
            className="page-link"
            style={{ cursor: "pointer" }}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </p>
        </li>
      );
    }

    return buttons;
  };

  return (
    <>
      <AppHeader
        handleSearch={handleSearch}
        setHandleSearch={setHandleSearch}
        setFillter={setFillter}
        search={search}
        setSearch={setSearch}
      />
      <div className="trade">
        <p>
          Alibaba.com protects you from payment to delivery with Trade
          Assurance.
        </p>
      </div>

      <div className="product-layout">
        <div className="row">
          <div
            className={`col-lg-3 col-xl-2  fillter-bar ${
              isFilter ? "sidebar-open" : ""
            }`}
            style={{ paddingRight: "0" }}
          >
            <Fillter
              fillter={fillter}
              setFillter={setFillter}
              isFilter={isFilter}
              setIsFilter={setIsFilter}
              search={search}
              setSearch={setSearch}
              setHandleSearch={setHandleSearch}
            />
          </div>

          {isMobile && (
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginBottom: "15px",
              }}
            >
              <button
                onClick={() => setIsFilter(!isFilter)}
                className="fillter-btn"
              >
                <img
                  alt=""
                  src={`${
                    fillter.categories.length > 0
                      ? "/cancle.png"
                      : "/fillter.svg"
                  }`}
                  height={30}
                />
              </button>
            </div>
          )}

          <div className="col-lg-9 col-sm-12 col-xl-10">
            {!error ? (
              products ? (
                products.length === 0 ? (
                  <div className="emptyState">
                    <img alt="" src="/empty.svg" />
                    <p>No Data</p>
                  </div>
                ) : (
                  <div>
                    <div className="product-list">
                      {products &&
                        products.map((product) => (
                          <div className="product" key={product.id}>
                            <p className="product-image">
                              <img
                                alt=""
                                className="product-img"
                                src={product.thumbnail}
                              />{" "}
                            </p>
                            <p className="product-title-text">
                              {product.description.slice(0, 40)}
                            </p>
                            <div className="product-key-info">
                              <div className="product-price">
                                <span className="price-number">
                                  ${product.price}{" "}
                                </span>
                                <span> / Price</span>
                              </div>
                              <div className="product-moq">
                                <span className="price-number">
                                  {product.rating}
                                </span>
                                <span> / Rating</span>
                              </div>
                            </div>
                            <div className="product-action-wrap">
                              <div>
                                <button
                                  className="product-action"
                                  onClick={() =>
                                    navigate(`/products/detail/${product.id}`)
                                  }
                                >
                                  Detail
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                    <ul className="pagination" style={{ float: "right" }}>
                      {createPageBtn()}
                    </ul>
                  </div>
                )
              ) : (
                <Loader />
              )
            ) : (
              <h3 style={{ textAlign: "center", marginTop: "4rem" }}>
                {error}
              </h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
