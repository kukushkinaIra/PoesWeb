import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../constants/app-routes.constants";
import { Button } from "../button";
import { Link } from "../link";
import styled from "./navigation.module.scss";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(AppRoutes.Auth);
  };

  return (
    <div className={styled.navigation}>
      <nav className={styled.routes}>
        <Link to={AppRoutes.MeasurementsByDate}>Measurements by date</Link>
        <Link to={AppRoutes.MeasurementsByTime}>Measurements by time</Link>
        <Link to={AppRoutes.MeasurementsByDeviation}>
          Measurements deviation
        </Link>
        <Link to={AppRoutes.SensorsByRegion}>Available sensors</Link>
      </nav>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
