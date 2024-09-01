import { TreflePlantDetails } from "../../models/treflePlant/treflePlantDetails";

interface ImageMyPlantsDetailsProps {
  treflePlant: TreflePlantDetails;
}

const ImageMyPlantsDetails = ({ treflePlant }: ImageMyPlantsDetailsProps) => {
  const dummyImage = "https://i.ibb.co/sq4Lb8f/dummy-plant.png";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    return (e.currentTarget.src = dummyImage);
  };

  return (
    <div className="w-full max-h-[350px]">
      <img
        src={treflePlant.data.image_url}
        alt={treflePlant.data.common_name}
        onError={(e) => {
          handleImageError(e);
        }}
        style={{
          maxHeight: "350px",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        id="treflePlant-image"
      />
    </div>
  );
};

export default ImageMyPlantsDetails;
