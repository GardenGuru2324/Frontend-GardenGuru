import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MyPlantsPaginationProps {
  page: number;
  setPage: (page: number) => void;
  nextPage: boolean;
}

const MyPlantsPagination = ({ page, setPage, nextPage }: MyPlantsPaginationProps) => {
  return (
    <div className="flex items-center justify-center">
      {page !== 1 ? (
        <Button
          onClick={() => setPage(page - 1)}
          sx={{
            margin: "1rem",
            backgroundColor: "#1A4D2E",
            "&:hover": {
              backgroundColor: "#1A4D2E",
            },
          }}
          variant="contained"
        >
          <ChevronLeft />
        </Button>
      ) : (
        ""
      )}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#1A4D2E",
          "&:hover": {
            backgroundColor: "#1A4D2E",
          },
        }}
      >
        {page}
      </Button>
      {nextPage && (
        <Button
          onClick={() => setPage(page + 1)}
          sx={{
            margin: "1rem",
            backgroundColor: "#1A4D2E",
            "&:hover": {
              backgroundColor: "#1A4D2E",
            },
          }}
          variant="contained"
        >
          <ChevronRight />
        </Button>
      )}
    </div>
  );
};

export default MyPlantsPagination;
