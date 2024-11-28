export interface NewPlant {
  plantName: string;
  locationId: string;
  plantImage: string;
  isVegetable: boolean;
  plantGrowthHabit: string | null;
  plantAvgHeight: number | null;
  plantMaxHeight: number | null;
  plantGrowthRate: string | null;
  plantDaysToHarvest: number | null;
  plantRowSpacing: number | null;
  plantMinTemp: number | null;
  plantMaxTemp: number | null;
  userId: string;
}
