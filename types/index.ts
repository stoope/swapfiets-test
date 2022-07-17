export enum RequestStatus {
  Idle,
  Fetching,
  Resolved,
  Rejected,
}

export type Bike = {
  id: number;
  thumb: string;
  title: string;
};

export type BikeDetails = {
  description: string;
  frame_model: string;
  id: number;
  large_img: string;
  manufacturer_name: string;
  title: string;
  year: number;
  name: string;
  frame_size: string;
  frame_material_slug: string;
};

export type Stolenness = "non" | "all" | "stolen" | "proximity";
