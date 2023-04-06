import { Button, Input, TextField } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../../context/context";
import { Title } from "../title/title";
import { useMatches } from "../../hooks/use-matches";

export const ContactSection = () => {
  const theme = useGlobalContext();
  const matches = useMatches()

  return (
    <React.Fragment>
      <Title h5 className="my-5" title="Contact" />

      <div className="w-100">
        <div className="d-flex flex-column w-100 mt-5 justify-content-center">
          <div className={`d-flex ${matches && 'flex-column'} w-100`}>
            <Input className="p-2 my-3 me-5 w-100" placeholder="Nom" />
            <Input className="p-2 my-3 w-100" placeholder="Prénom" />
          </div>
          <div className={`d-flex ${matches && 'flex-column'} w-100`}>
            <Input className="p-2 my-3 me-5 w-100" placeholder="Email" />
            <Input className="p-2 my-3 w-100" placeholder="Entreprise" />
          </div>
          <div className={`d-flex ${matches && 'flex-column'} w-100`}>
            <Input className="p-2 my-3 me-5 w-100" placeholder="Pays" />
            <Input className="p-2 my-3 w-100" placeholder="Sujet" />
          </div>
        </div>
        <div className="d-flex flex-column">
          <TextField
            className="my-4 w-100"
            id="filled-basic"
            label="Votre message"
            variant="filled"
          />
          <Button
            className="w-25"
            style={{ backgroundColor: theme.primary, color: "white" }}
          >
            Envoyer
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
