import { request } from "../api/request.api";

class MeasurementsService {
  getMeasurementsBetweenDates = (minDate: string, maxDate: string) => {
    const params = `?min_date=${minDate}&max_date=${maxDate}`;
    return request({
      url: "/measurement/range" + params,
      method: "GET",
    });
  };

  getMinMaxMeasurements = (minTime: string, maxTime: string) => {
    const params = `?min_time=${minTime}&max_time=${maxTime}`;
    return request({
      url: "/measurement/min-max" + params,
      method: "GET",
    });
  };

  // getDeviation = () => {
  //   return request({
  //     url: "/measurement/deviation",
  //     method: "GET",
  //   });
  // };
}

export const measurementsService = new MeasurementsService();
