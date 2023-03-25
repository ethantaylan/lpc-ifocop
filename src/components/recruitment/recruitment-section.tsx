import { Button, Input, TextField } from "@mui/material";
import { useGlobalContext } from "../../context/context";
import { Title } from "../title/title";

type Props = {};

export const RecruitmentSection = (props: Props) => {
  const theme = useGlobalContext();

  return (
    <div>
      <hr />
      <Title h5 className="my-5" title="Recrutement" />

      <p>
        <span className="bold">
          {" "}
          Nous recherchons actuellement des personnes talentueuses pour
          rejoindre notre équipe
        </span>
        . <br /> <br /> Si vous êtes motivé, créatif et passionné par la mode,
        nous aimerions vous parler. Nous sommes à la recherche de personnes pour
        occuper les postes suivants: <br />
        <br />- Responsable marketing <br />- Spécialiste des réseaux sociaux{" "}
        <br />- Gestionnaire de la chaîne logistique <br />- Responsable des
        relations avec les fournisseurs <br />- Assistant(e) de vente <br />{" "}
        <br /> Si vous êtes intéressé(e) par l'un de ces postes et que vous êtes
        prêt(e) à rejoindre une entreprise en pleine croissance, nous voulons
        vous entendre! Complétez le formulaire de recrutement ci-dessous en
        joignant votre CV et votre lettre de motivation. <br /> Nous avons hâte
        de travailler avec des personnes talentueuses qui partagent notre
        passion pour la mode et notre engagement envers nos clients. <br />{" "}
        <br /> Rejoignez-nous dès maintenant et faites partie d'une équipe qui
        construit quelque chose de grand!
      </p>
      <div className="w-75">
        <div className="d-flex flex-column w-100 mt-5 justify-content-center">
          <div className="d-flex mb-4 w-100">
            <Input className="p-2 my-3 me-5 w-100" placeholder="Nom" />
            <Input className="p-2 my-3 w-100" placeholder="Prénom" />
          </div>
          <div className="d-flex mb-4 w-100">
            <Input className="p-2 my-3 me-5 w-100" placeholder="Email" />
            <Input className="p-2 my-3 w-100" placeholder="Entreprise" />
          </div>
          <div className="d-flex w-100">
            <div className="d-flex w-100 flex-column">
              <span style={{ color: "grey" }} className="p-2">
                CV
              </span>
              <Input
                style={{ color: "grey" }}
                type="file"
                className="w-100 mb-4 p-2"
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex w-100 flex-column">
            <span style={{ color: "grey" }} className="p-2">
              Lettre de motivation
            </span>
            <Input
              style={{ color: "grey" }}
              type="file"
              className="w-100 mb-4 p-2"
            />
          </div>
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
    </div>
  );
};
