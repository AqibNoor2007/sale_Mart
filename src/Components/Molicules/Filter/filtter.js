import { useState } from "react";
import "./filter.css";
import { useWidth } from "../../Atom/HelperFunc/useWidth";
const Fillter = ({
  fillter,
  setFillter,
  setIsFilter,
  isFilter,
  setSearch,
  setHandleSearch,
}) => {
  const [isviewMore, setIsViewMore] = useState(false);
  const handleOptionChange = (event) => {
    isMobile && setIsFilter(!isFilter);
    setSearch();
    setHandleSearch("");
    setFillter({ ...fillter, categories: event.target.value });
  };
  const { isMobile } = useWidth(992);
  return (
    <>
      <div className={`filter-body ${isMobile ? " w-300" : "w-100"}`}>
        <div className="filter">
          <div className="cancle-reset">
            <p
              onClick={() =>
                fillter.categories.length > 0 && setFillter({ categories: "" })
              }
              style={{
                cursor: "pointer",
                color: "gray",
                fontSize: "18px",
                marginRight: "15px",
                marginBottom: "0",
              }}
            >
              Reset
            </p>
            {isMobile && (
              <img
                onClick={() => setIsFilter(!isFilter)}
                src="/closeFillter.png"
                alt=""
                height={20}
              />
            )}
          </div>
          <div className="border-bottom">
            <h4>Categories</h4>
            <div style={{ marginLeft: "13px" }}>
              <div>
                <label className="label">
                  <input
                    type="radio"
                    value="smartphones"
                    checked={fillter.categories === "smartphones"}
                    onChange={handleOptionChange}
                  />
                  Smart Phones
                </label>
              </div>
              <div>
                <label className="label">
                  <input
                    type="radio"
                    value="laptops"
                    checked={fillter.categories === "laptops"}
                    onChange={handleOptionChange}
                  />
                  Laptops
                </label>
              </div>
              <div>
                <label className="label">
                  <input
                    type="radio"
                    value="fragrances"
                    checked={fillter.categories === "fragrances"}
                    onChange={handleOptionChange}
                  />
                  Fragrances
                </label>
              </div>
              <div>
                <label className="label">
                  <input
                    type="radio"
                    value="skincare"
                    checked={fillter.categories === "skincare"}
                    onChange={handleOptionChange}
                  />
                  Skin Care
                </label>
              </div>
              <div>
                <label className="label">
                  <input
                    type="radio"
                    value="groceries"
                    checked={fillter.categories === "groceries"}
                    onChange={handleOptionChange}
                  />
                  Groceries
                </label>
              </div>
              <div>
                <label className="label">
                  <input
                    type="radio"
                    value="home-decoration"
                    checked={fillter.categories === "home-decoration"}
                    onChange={handleOptionChange}
                  />
                  Home Decoration
                </label>
              </div>
              <div>
                <label className="label">
                  <input
                    type="radio"
                    value="furniture"
                    checked={fillter.categories === "furniture"}
                    onChange={handleOptionChange}
                  />
                  Furniture
                </label>
              </div>
              <div>
                <label className="label">
                  <input
                    type="radio"
                    value="womens-jewellery"
                    checked={fillter.categories === "womens-jewellery"}
                    onChange={handleOptionChange}
                  />
                  Womens Jewellery
                </label>
              </div>
              {isviewMore && (
                <>
                  <div>
                    <label className="label">
                      <input
                        type="radio"
                        value="lighting"
                        checked={fillter.categories === "lighting"}
                        onChange={handleOptionChange}
                      />
                      Lighting
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="radio"
                        value="tops"
                        checked={fillter.categories === "tops"}
                        onChange={handleOptionChange}
                      />
                      Tops
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="radio"
                        value="automotive"
                        checked={fillter.categories === "automotive"}
                        onChange={handleOptionChange}
                      />
                      Auto Motive
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="radio"
                        value="mens-watches"
                        checked={fillter.categories === "mens-watches"}
                        onChange={handleOptionChange}
                      />
                      Mens Watches
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="radio"
                        value="sunglasses"
                        checked={fillter.categories === "sunglasses"}
                        onChange={handleOptionChange}
                      />
                      Sunglasses
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="radio"
                        value="mens-shirts"
                        checked={fillter.categories === "mens-shirts"}
                        onChange={handleOptionChange}
                      />
                      Mens Shirts
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="radio"
                        value="mens-shoes"
                        checked={fillter.categories === "mens-shoes"}
                        onChange={handleOptionChange}
                      />
                      Mens Shoes
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="radio"
                        value="womens-dresses"
                        checked={fillter.categories === "womens-dresses"}
                        onChange={handleOptionChange}
                      />
                      Womens Dresses
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="radio"
                        value="womens-bags"
                        checked={fillter.categories === "womens-bags"}
                        onChange={handleOptionChange}
                      />
                      Womens Bags
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="radio"
                        value="womens-watches"
                        checked={fillter.categories === "womens-watches"}
                        onChange={handleOptionChange}
                      />
                      Womens Watches
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="radio"
                        value="womens-shoes"
                        checked={fillter.categories === "womens-shoes"}
                        onChange={handleOptionChange}
                      />
                      Womens Shoes
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="radio"
                        value="motorcycle"
                        checked={fillter.categories === "motorcycle"}
                        onChange={handleOptionChange}
                      />
                      Motorcycle
                    </label>
                  </div>
                </>
              )}
              <p
                onClick={() => setIsViewMore(!isviewMore)}
                style={{
                  cursor: "pointer",
                  marginRight: "15px",
                  fontWeight: "500",
                  textAlign: "end",
                  color: "#f60",
                  textDecoration: "underline",
                }}
              >
                {isviewMore ? "View Less" : "View More"}
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};
export default Fillter;
