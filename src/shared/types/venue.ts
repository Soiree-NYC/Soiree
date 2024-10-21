import { FeatureKeys } from '../../shared/enums/featureDetails.ts';
import NYCNeighborhoods from './NYC_Neighborhoods.ts';

type Venue = {
  address: string;
  basePrice: number;
  description: string;
  features: FeatureKeys[];
  host: string;
  hallmarks: string[],
  id: number;
  name: string;
  neighborhood: NYCNeighborhoods;
  photos: string[],
  rating: number;
  reviews: number;
  writeUps: string[];
};

export type { Venue };
