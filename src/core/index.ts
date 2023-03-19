import { AxiosRequestConfig } from "axios";

export const getClothesPhotoFromPexels = (query: string) => ({
  url: `https://api.pexels.com/v1/search?query=${query}`,
  method: "GET",
  headers: {
    Authorization: "pwaz2r2geNBaUWDJCifZkb8hzfiLkC48taJmu0g3SivUFrHvHrcYwwku",
  },
});
