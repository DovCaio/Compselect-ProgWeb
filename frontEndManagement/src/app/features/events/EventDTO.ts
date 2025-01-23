import { LocationDTO } from "./LocationDTO";

export interface EventDTO {
    title: string;
    dateEvent: string;
    time: string;
    description: string;
    target: string | string[];
    activities: string | string[];
    image: File;
    location: LocationDTO;
  }