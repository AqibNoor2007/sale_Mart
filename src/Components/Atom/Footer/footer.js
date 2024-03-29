import Button from "../Button/button";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div style={{ marginBottom: "15px" }}>
          <img src="/facebook.png" height={40} className="m-r-20" alt="" />
          <img src="/linkedin.png" height={40} className="m-r-20" alt="" />
          <img src="/twitter.png" height={40} className="m-r-20" alt="" />
        </div>
        <div className="footer-btn">
          <p style={{ fontSize: "20px" }}>
            Trade on the go with the{" "}
            <span style={{ textDecoration: "underLine", fontWeight: "500" }}>
              Alibaba.com
            </span>{" "}
            app
          </p>
          <div>
            <Button
              defaultClass="icon"
              icon={<img src="/playStore.avif" height={40} alt="" />}
            />
            <Button
              defaultClass="icon"
              icon={<img src="/appStore.avif" height={40} alt="" />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
