import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGlobalContext } from "../../../context/context";

export interface EvenementCardsProps {
  onClick?: () => void;
  label: string;
  description: string;
  img: any;
  title: string;
  className: string;
  moreInfos: string;
  showMoreInfos: boolean;
  objectPosition?: string;
}

export const EvenementCards: React.FC<EvenementCardsProps> = ({
  onClick,
  label,
  description,
  img,
  title,
  className,
  moreInfos,
  showMoreInfos,
  objectPosition,
}) => {
  const theme = useGlobalContext();

  return (
    <Card className={className} style={{ width: "75%", height: "100%" }}>
      <img
        src={img}
        alt="Images des évenements"
        width={"100%"}
        height={400}
        style={{ objectFit: "cover", objectPosition: objectPosition }}
      />

      <Card.Body>
        <Card.Title className="bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {showMoreInfos && <p>{moreInfos}</p>}

        <Button
          onClick={onClick}
          className="text-white"
          style={{ backgroundColor: theme.primary }}
          color="primary"
          variant="contained"
        >
          {label}
        </Button>
      </Card.Body>
    </Card>
  );
};
