import { Form, InputGroup } from "react-bootstrap";
import Button from "../Button/button";
import "./header.css";

const WebHeader = () => {
  return (
    <div className="main">
      <div>
        <img src="/logo.avif" className="logo-height" alt="" />
      </div>

      <div className="activity-btn hide-btn">
        <p className="f-s-20" style={{ margin: "0" }}>
          Ship To: <img src="/pk.png" height={20} alt="" />
        </p>

        <Button
          content="Sign In"
          onClick={() => console.log("test")}
          varient="primary"
        />

        <Button
          content="Sign Up"
          onClick={() => console.log("test")}
          varient="secondary"
        />
      </div>
    </div>
  );
};
export default WebHeader;

export const AppHeader = ({
  setFillter,
  search,
  setSearch,
  handleSearch,
  setHandleSearch,
}) => {
  return (
    <>
      <div className="appMain">
        <div>
          <img src="/productLogo.avif" className="appLogo" alt="" />
        </div>
        <div className="">
          <form onSubmit={(e) => e.preventDefault()}>
            <InputGroup>
              <Form.Control
                value={handleSearch}
                placeholder="Search by Title"
                onChange={(e) => setHandleSearch(e.target.value)}
              />
              {search ? (
                <Button
                  icon={<img alt="" src="/cancle.png" height={20} />}
                  varient="normal"
                  content="Cancle"
                  onClick={() => {
                    setFillter({ categories: "" });
                    setSearch();
                    setHandleSearch("");
                  }}
                />
              ) : (
                <Button
                  icon={<img alt="" src="/search.png" height={20} />}
                  varient="normal"
                  content="Search"
                  onClick={() => {
                    handleSearch.length > 0 && setSearch(handleSearch);
                    setFillter({ categories: "" });
                  }}
                />
              )}
            </InputGroup>
          </form>
        </div>
      </div>
    </>
  );
};
