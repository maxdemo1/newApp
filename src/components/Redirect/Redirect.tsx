import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const navigateTimer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => {
      clearTimeout(navigateTimer);
    };
  }, [navigate]);
  return (
    <h2>Unfortunately page not found. You will be redirected to home page😉</h2>
  );
};

export default Redirect;
