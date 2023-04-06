import { Button, Input, Rating, TextField } from "@mui/material";
import { Feedbacks } from "../components/feedbacks/feedbacks";
import { useGlobalContext } from "../context/context";

export const Avis = () => {
  const theme = useGlobalContext();

  return (
    <div className="d-flex w-100 flex-column align-items-center justify-content-center">
      <Feedbacks forHomePage={false} />
      <div className="w-100">
      <span className="bold h5">Laissez le votre !</span>
      <div className="d-flex w-100 mt-5 justify-content-center">
        {" "}
        <Input className="me-3 w-50" placeholder="Prénom Nom" />
        <Input className="ms-3 w-50" placeholder="Email" />
      </div>
      <div className="d-flex flex-column">
      <Rating size="small" name="" className="mt-4" value={4} />

      <TextField
        className="my-4 w-50"
        id="filled-basic"
        label="Votre message"
        variant="filled"
      />
      <Button style={{ backgroundColor: theme.primary, color: 'white' }}>
        Envoyer
      </Button>
      </div>
      </div>
    </div>
  );
};
