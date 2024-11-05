interface ImagePlantDetailsProps {
  plantImage: string;
}

const ImageMyPlantsDetails = ({ plantImage }: ImagePlantDetailsProps) => {
  const dummyImage = "https://i.ibb.co/sq4Lb8f/dummy-plant.png";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    return (e.currentTarget.src = dummyImage);
  };

  return (
    <div className="w-full max-h-[350px]">
      <img
        src={plantImage}
        alt={plantImage}
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
        id="myPlant-image"
      />
    </div>
  );
};

export default ImageMyPlantsDetails;
