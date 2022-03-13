import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppRoutes } from "../../constants/app-routes.constants";
import { Auth } from "../../pages/auth";
import { MeasurementsByDate } from "../../pages/measurements-by-date";
import { MeasurementsByTime } from "../../pages/measurements-by-time";
import { MeasurementsByDeviation } from "../../pages/measurements-by-deviation";
import { SensorsByRegion } from "../../pages/sensors-by-region";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Auth} element={<Auth />} />
        <Route
          path={AppRoutes.MeasurementsByDate}
          element={<MeasurementsByDate />}
        />
        <Route
          path={AppRoutes.MeasurementsByTime}
          element={<MeasurementsByTime />}
        />
        <Route
          path={AppRoutes.MeasurementsByDeviation}
          element={<MeasurementsByDeviation />}
        />
        <Route path={AppRoutes.SensorsByRegion} element={<SensorsByRegion />} />
        <Route path="*" element={<Navigate to={AppRoutes.Auth} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
