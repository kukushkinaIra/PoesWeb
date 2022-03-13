import { request } from "../api/request.api";

class RegionsService {
  getAllRegions = () => {
    return request({
      url: "/regions",
      method: "GET",
    });
  };

  getSensorsByRegion = (regionTitle: string) => {
    const params = `?region_title=${regionTitle}`;
    return request({
      url: "/measurement/by-region" + params,
      method: "GET",
    });
  };
}

export const regionsService = new RegionsService();
