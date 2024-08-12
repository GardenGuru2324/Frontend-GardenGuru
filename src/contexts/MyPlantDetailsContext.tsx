import React, { useState } from "react";

import { Plant } from "../models/plant/plant";
import { AxiosError } from "axios";

interface IMyPlantDetailsContext {
  plantId: string;
  myPlant: Plant;
  isError: boolean;
  isLoading: boolean;
  error: AxiosError<unknown, any>;
  message: string;
  setPlantId: (plantId: string) => void;
  setMyPlant: (myPlant: Plant) => void;
  setIsError: (isError: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: AxiosError<unknown, any>) => void;
  setMessage: (message: string) => void;
}

export const MyPlantDetailsContext =
  React.createContext<IMyPlantDetailsContext>({
    plantId: "",
    myPlant: {
      _id: "",
      plantId: "",
      plantName: "",
      locationId: "",
      plantImage: "",
      plantedDate: 0,
      isVegetable: false,
      plantGrowthHabit: "",
      plantAvgHeight: 0,
      plantMaxHeight: 0,
      plantGrowthRate: "",
      plantDaysToHarvest: 0,
      plantRowSpacing: 0,
      plantMinTemp: 0,
      plantMaxTemp: 0,
      userId: "",
    },
    isError: false,
    isLoading: false,
    error: new AxiosError<unknown, any>(),
    message: "",
    setPlantId: () => {},
    setMyPlant: () => {},
    setIsError: () => {},
    setIsLoading: () => {},
    setError: () => {},
    setMessage: () => {},
  });

export const MyPlantDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plantId, setPlantId] = useState<string>("");
  const [myPlant, setMyPlant] = useState<Plant>({
    _id: "",
    plantId: "",
    plantName: "",
    locationId: "",
    plantImage: "",
    plantedDate: 0,
    isVegetable: false,
    plantGrowthHabit: "",
    plantAvgHeight: 0,
    plantMaxHeight: 0,
    plantGrowthRate: "",
    plantDaysToHarvest: 0,
    plantRowSpacing: 0,
    plantMinTemp: 0,
    plantMaxTemp: 0,
    userId: "",
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError<unknown, any>>(
    new AxiosError<unknown, any>()
  );
  const [message, setMessage] = useState<string>("");
  return (
    <MyPlantDetailsContext.Provider
      value={{
        plantId,
        setPlantId,
        myPlant,
        setMyPlant,
        isError,
        setIsError,
        isLoading,
        setIsLoading,
        error,
        setError,
        message,
        setMessage,
      }}
    >
      {children}
    </MyPlantDetailsContext.Provider>
  );
};
