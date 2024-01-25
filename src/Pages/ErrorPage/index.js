import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Atom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center row">
          <div class=" col-12">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              class="img-fluid"
            />
            <div class="mt-5 mb-5">
              <p class="fs-3">
                <span class="text-danger">Opps!</span> Page not found.
              </p>
              <p class="lead">The page you’re looking for doesn’t exist.</p>
              <div className="d-flex justify-content-center">
                <Button
                  varient="primary"
                  content="Home"
                  onClick={() => navigate("/products")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
