import { PaymentSection } from "../components/payment-section/payment-section";
import Fashion1 from "../assets/fashion1.jpg";
import { useMatches } from "../hooks/use-matches";
import Defile1 from "../assets/defile1.jpg";

export const Actualites = () => {
  const matches = useMatches();

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="d-flex w-100 text-left">Avril 2023</h1>
        <div
          className={`w-100 mt-5 mb-5 d-flex flex-${
            matches ? "column" : "row"
          }`}
        >
          <div className="w-100 position-relative">
            <img
              width="100%"
              style={{ objectPosition: "center", objectFit: "cover" }}
              src={Fashion1}
              alt="Fashion week"
            />{" "}
          </div>
          <div className=" d-flex w-100 flex-column">
            <h1
              className={`primary ${matches && "mt-4"} w-100 p-4 bold`}
              style={{
                bottom: "0px",
                borderRadius: "0px",
              }}
            >
              Fashion Week
            </h1>
            <div className={matches ? "p-2" : "p-4"}>
              <p>
                La Fashion Week, l'un des événements les plus prestigieux de
                l'industrie de la mode, a récemment pris fin dans les
                principales capitales de la mode, dont Paris, Milan, New York et
                Londres. Cet événement biannuel a attiré des milliers de
                professionnels de la mode, des célébrités, des acheteurs et des
                journalistes du monde entier pour découvrir les dernières
                tendances de la saison à venir.
              </p>
              <p>
                Au cours de cette Fashion Week, les{" "}
                <strong>
                  designers ont présenté des collections qui ont mis en avant
                  des couleurs vives, des imprimés audacieux et des silhouettes
                  fluides
                </strong>
                . Certaines marques ont opté pour des designs éthiques et
                durables, tandis que d'autres ont mis en avant l'artisanat local
                et les matériaux innovants.
              </p>
              <p>
                Malgré la pandémie de COVID-19 qui a affecté l'industrie de la
                mode ces derniers temps, les organisateurs de la Fashion Week
                ont mis en place des mesures strictes pour assurer la sécurité
                de tous les participants. Les défilés ont été organisés avec des
                capacités réduites, des tests réguliers pour les participants et
                des mesures de distanciation sociale.
              </p>
              <p>
                Cette Fashion Week a également mis en lumière l'importance de l'
                <strong>inclusion et de la diversité</strong> dans l'industrie
                de la mode. Les designers ont présenté des collections qui
                reflétaient la diversité des corps, des cultures et des
                identités de genre, tout en s'engageant à travailler avec des
                mannequins de différentes origines et tailles.
              </p>
              <p>
                En fin de compte, la Fashion Week est un événement important
                pour l'industrie de la mode, offrant une occasion unique de
                découvrir les dernières tendances et les nouvelles collections
                des grands noms de l'industrie. Cependant, il est également
                important de travailler à rendre l'industrie de la mode plus{" "}
                <strong>inclusive, durable et accessible à tous</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="d-flex w-100 text-left">Janvier 2023</h1>
        <div
          className={`w-100 mt-5 mb-5 d-flex flex-${
            matches ? "column" : "row"
          }`}
        >
          <div className="w-100 position-relative">
            <img
              width="100%"
              style={{ objectPosition: "center", objectFit: "cover" }}
              src={Defile1}
              alt="Defile de mode versace"
            />{" "}
          </div>
          <div className=" d-flex w-100 flex-column">
            <h1
              className={`primary ${matches && "mt-4"} w-100 p-4 bold`}
              style={{
                bottom: "0px",
                borderRadius: "0px",
              }}
            >
              Défilé de mode - Versace
            </h1>
            <div className={matches ? "p-2" : "p-4"}>
              <p>
                Le défilé de mode Versace de janvier 2023 a été un événement
                spectaculaire mettant en vedette les dernières tendances de la
                célèbre maison de mode italienne.
              </p>
              <p>
                La collection présentée lors de ce défilé était une explosion de
                couleurs vives et de motifs audacieux, avec des{" "}
                <strong>designs avant-gardistes</strong> qui ont ébloui le
                public. Les mannequins ont défilé sur un podium élégant, portant
                des tenues exquises qui ont fait ressortir leur beauté
                naturelle.
              </p>
              <p>
                La collection Versace de janvier 2023 était un hommage à
                l'héritage de la marque, avec des{" "}
                <strong>imprimés audacieux</strong> et des{" "}
                <strong>silhouettes fluides</strong> qui ont rappelé les
                créations iconiques de Gianni Versace.
              </p>
              <p>
                Les invités VIP du défilé ont été émerveillés par l'ambiance
                électrisante, avec des éclairages et une musique exceptionnels.
                Les journalistes de mode ont également salué cette collection
                exceptionnelle, soulignant les choix de couleurs audacieux et
                les <i>accessoires élégants</i> qui ont ajouté une touche de
                sophistication aux tenues.
              </p>
              <p>
                En fin de compte, le défilé de mode Versace de janvier 2023
                était un événement mémorable qui a démontré l'engagement continu
                de la marque à créer des tenues innovantes et élégantes. La
                collection a été acclamée par la critique et a suscité
                l'enthousiasme de tous ceux qui ont eu la chance d'y assister.
              </p>
            </div>
          </div>
        </div>
      </div>
      <PaymentSection />
    </div>
  );
};
