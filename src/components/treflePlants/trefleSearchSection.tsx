import TrefleFilterInputField from "./trefleFilterInputField";
import TrefleFilterResetButton from "./trefleFilterResetButton";

const TrefleSearchSection = () => {
  return (
    <div className="flex gap-2 mt-4 md:max-w-[1400px] max-w-[300px] w-full md:px-4" id="plant-search-section">
      <TrefleFilterInputField />
      <TrefleFilterResetButton />
    </div>
  );
};

export default TrefleSearchSection;
