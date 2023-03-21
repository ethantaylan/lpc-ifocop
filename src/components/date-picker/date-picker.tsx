import { DatePicker, LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function StaticDatePickerLandscape() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker className="w-100" />
    </LocalizationProvider>
  );
}
