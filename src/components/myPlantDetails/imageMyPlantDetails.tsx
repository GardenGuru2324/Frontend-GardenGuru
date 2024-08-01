import { Plant } from "../../models/plant/plant";

interface ImageMyPlantsDetailsProps {
  myPlant: Plant;
}

const ImageMyPlantsDetails = ({ myPlant }: ImageMyPlantsDetailsProps) => {
  return (
    <div className="w-full max-h-[350px]">
      {myPlant.plantImage ? (
        <img
          src={myPlant?.plantImage}
          alt={myPlant?.plantName}
          style={{ maxHeight: "350px", height: "100%", width: "100%", objectFit: "cover", objectPosition: "center" }}
        />
      ) : (
        <img
          src="/sad-plant.gif"
          alt={myPlant?.plantName}
          style={{ maxHeight: "350px", height: "100%", width: "100%", objectFit: "cover", objectPosition: "center" }}
        />
      )}
    </div>
  );
};

export default ImageMyPlantsDetails;
