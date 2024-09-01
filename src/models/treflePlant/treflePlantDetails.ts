export interface TreflePlantDetails {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  common_name: string;
  slug: string;
  scientific_name: string;
  main_species_id: number;
  image_url: string;
  year: number;
  bibliography: string;
  author: string;
  family_common_name: null;
  genus_id: number;
  observations: string;
  vegetable: boolean;
  links: DataLinks;
  main_species: MainSpecies;
  genus: Genus;
  family: Family;
  species: Species[];
  subspecies: any[];
  varieties: any[];
  hybrids: any[];
  forms: any[];
  subvarieties: any[];
  sources: Source[];
}

export interface Family {
  id: number;
  name: string;
  common_name: null;
  slug: string;
  links: FamilyLinks;
}

export interface FamilyLinks {
  self: string;
  division_order: null;
  genus: string;
}

export interface Genus {
  id: number;
  name: string;
  slug: string;
  links: GenusLinks;
}

export interface GenusLinks {
  self: string;
  plants: string;
  species: string;
  family?: string;
}

export interface DataLinks {
  self: string;
  species: string;
  genus: string;
}

export interface MainSpecies {
  id: number;
  common_name: string;
  slug: string;
  scientific_name: string;
  year: number;
  bibliography: string;
  author: string;
  status: string;
  rank: string;
  family_common_name: null;
  genus_id: number;
  observations: string;
  vegetable: boolean;
  image_url: string;
  genus: string;
  family: string;
  duration: null;
  edible_part: null;
  edible: boolean;
  images: Images;
  common_names: { [key: string]: string[] };
  distribution: Distribution;
  distributions: Distributions;
  flower: Flower;
  foliage: Foliage;
  fruit_or_seed: FruitOrSeed;
  sources: Source[];
  specifications: Specifications;
  synonyms: Synonym[];
  growth: Growth;
  links: MainSpeciesLinks;
}

export interface Distribution {
  native: string[];
  introduced: string[];
}

export interface Distributions {
  native: Introduced[];
  introduced: Introduced[];
}

export interface Introduced {
  id: number;
  name: string;
  slug: string;
  tdwg_code: string;
  tdwg_level: number;
  species_count: number;
  links: GenusLinks;
}

export interface Flower {
  color: null;
  conspicuous: null;
}

export interface Foliage {
  texture: null;
  color: null;
  leaf_retention: null;
}

export interface FruitOrSeed {
  conspicuous: null;
  color: null;
  shape: null;
  seed_persistence: null;
}

export interface Growth {
  description: null;
  sowing: null;
  days_to_harvest: null;
  row_spacing: MinimumRootDepth;
  spread: MinimumRootDepth;
  ph_maximum: null;
  ph_minimum: null;
  light: null;
  atmospheric_humidity: null;
  growth_months: null;
  bloom_months: null;
  fruit_months: null;
  minimum_precipitation: ImumPrecipitation;
  maximum_precipitation: ImumPrecipitation;
  minimum_root_depth: MinimumRootDepth;
  minimum_temperature: ImumTemperature;
  maximum_temperature: ImumTemperature;
  soil_nutriments: null;
  soil_salinity: null;
  soil_texture: null;
  soil_humidity: null;
}

export interface ImumPrecipitation {
  mm: null;
}

export interface ImumTemperature {
  deg_f: null;
  deg_c: null;
}

export interface MinimumRootDepth {
  cm: null;
}

export interface Images {
  leaf: Empty[];
  flower: Empty[];
  habit: Empty[];
  other: Empty[];
  bark: Empty[];
  fruit: Empty[];
  "": Empty[];
}

export interface Empty {
  id: number;
  image_url: string;
  copyright: string;
}

export interface MainSpeciesLinks {
  self: string;
  plant: string;
  genus: string;
}

export interface Source {
  last_update: Date;
  id: string;
  name: Name;
  url: null | string;
  citation: null | string;
}

export enum Name {
  Gbif = "GBIF",
  Ipni = "IPNI",
  PlantNet = "PlantNet",
  Powo = "POWO",
  Wfo = "WFO",
}

export interface Specifications {
  ligneous_type: null;
  growth_form: null;
  growth_habit: null;
  growth_rate: null;
  average_height: MinimumRootDepth;
  maximum_height: MinimumRootDepth;
  nitrogen_fixation: null;
  shape_and_orientation: null;
  toxicity: null;
}

export interface Synonym {
  id: number;
  name: string;
  author: string;
  sources: Source[];
}

export interface Species {
  id: number;
  common_name: string;
  slug: string;
  scientific_name: string;
  year: number;
  bibliography: string;
  author: string;
  status: string;
  rank: string;
  family_common_name: null;
  genus_id: number;
  image_url: string;
  synonyms: string[];
  genus: string;
  family: string;
  links: MainSpeciesLinks;
}

export interface Meta {
  last_modified: Date;
}
