import { Bike, BikeDetails, Stolenness } from "../types";
import { httpClient } from "./client";

interface IGetBikes {
  page: number;
  perPage: number;
  location: string;
  stolenness: Stolenness;
}

interface IGetBikesCount {
  location: string;
  stolenness: Stolenness;
}

function getBikes(
  { page, perPage, location, stolenness }: IGetBikes,
  options?: RequestInit
) {
  return httpClient.get<{
    bikes: Bike[];
  }>(
    `v3/search?page=${page}&per_page=${perPage}&location=${encodeURIComponent(
      location
    )}&stolenness=${stolenness}`,
    options
  );
}

function getBikesCount(
  { location, stolenness }: IGetBikesCount,
  options?: RequestInit
) {
  return httpClient.get<{
    non: number;
    stolen: number;
    proximity: number;
  }>(
    `v3/search/count?location=${encodeURIComponent(
      location
    )}&stolenness=${stolenness}`,
    options
  );
}

function getBikeDetails(id: number) {
  return httpClient.get<{
    bike: BikeDetails;
  }>(`v3/bikes/${id}`);
}

export { getBikes, getBikeDetails, getBikesCount };
