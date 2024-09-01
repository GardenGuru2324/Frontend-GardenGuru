import { LucideIcon } from "lucide-react";

interface DetailsquareProps {
  data: string | number | null;
  text: string;
  icon: LucideIcon;
}

const Detailsquare = ({ data, icon: Icon, text }: DetailsquareProps) => {
  return (
    <>
      <div
        className="bg-white rounded-xl shadow-lg flex items-center justify-center flex-col gap-4"
        style={{ width: "calc(50% - 8px)", aspectRatio: "1 / 1" }}
      >
        <Icon size={70} color="#1A4D2E" strokeWidth={1.25} />
        <p>
          {data} {text}
        </p>
      </div>
    </>
  );
};

export default Detailsquare;
