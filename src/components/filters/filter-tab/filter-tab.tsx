import { Chip } from "@mui/material";
import { useGlobalContext } from "../../../context/context";
import "./filter-tab.scss";

interface FilterTabProps {
  filter: string;
}


export const FilterTab: React.FC<FilterTabProps> = ({ filter }) => {
  const theme = useGlobalContext();

  return (
    <div className="d-flex">
      <Chip
        label={filter}
        onDelete={() => console.log("test")}
        style={{ backgroundColor: theme.secondary, color: theme.primary }}
        className="mx-2 semi-bold"
      />
    </div>
  );
};
