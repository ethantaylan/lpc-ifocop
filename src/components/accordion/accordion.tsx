import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

interface BSAccordionProps {
  children: any;
  title: any;
}

export const BSAccordion: React.FC<BSAccordionProps> = ({ children, title }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<span>ICON</span>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
