import { request } from "../api/request.api";

class DeviationService {
  getDeviation = () => {
    return request({
      url: "/measurement/deviation",
      method: "GET",
    });
  };
}

export const deviationService = new DeviationService();
