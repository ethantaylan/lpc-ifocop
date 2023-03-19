import { Chip } from "@mui/material";
import { useGlobalContext } from "../../../context/context";
import "./filter-tab.scss";

interface FilterTabProps {
  filter: string;
  onDelete: () => void;
  ref: any;
}

export const FilterTab: React.FC<FilterTabProps> = ({
  ref,
  filter,
  onDelete,
}) => {
  const theme = useGlobalContext();

  return (
    <div className="d-flex">
      <Chip
        ref={ref}
        onDelete={onDelete}
        id="filter"
        label={filter}
        style={{ backgroundColor: theme.secondary, color: theme.primary }}
        className="mx-2 semi-bold"
      />
    </div>
  );
};
