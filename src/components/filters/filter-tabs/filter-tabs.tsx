import { Chip } from "@mui/material";
import { useGlobalContext } from "../../../context/context";
import "./filter-tabs.scss";

export const FilterTabs: React.FC = () => {
  const theme = useGlobalContext();

  return (
    <div className="d-flex">
      <Chip
        label="Deletable"
        onDelete={() => console.log("test")}
        style={{ backgroundColor: theme.secondary, color: theme.primary }}
        className="mx-2  semi-bold"
      />
      <Chip
        label="Deletable"
        onDelete={() => console.log("test")}
        style={{ backgroundColor: theme.secondary, color: theme.primary }}
        className="mx-2 semi-bold"
      />
      <Chip
        label="Deletable"
        onDelete={() => console.log("test")}
        style={{ backgroundColor: theme.secondary, color: theme.primary }}
        className="mx-2  semi-bold"
      />
    </div>
  );
};
