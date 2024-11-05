export interface Plant {
  _id: string;
  plantId: string;
  plantName: string;
  locationId: string;
  plantImage: string;
  plantedDate: number;
  isVegetable: boolean;
  plantGrowthHabit: string;
  plantAvgHeight: number;
  plantMaxHeight: number;
  plantGrowthRate: string;
  plantDaysToHarvest: number;
  plantRowSpacing: number;
  plantMinTemp: number;
  plantMaxTemp: number;
  userId: string;
}
