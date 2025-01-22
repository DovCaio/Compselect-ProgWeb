import { LocationDTO } from "./LocationDTO";

export interface EventDTO {
    title: string;
    date: string;
    time: string;
    description: string;
    target: string | string[];
    activities: string | string[];
    image: string;
    location: LocationDTO;
  }