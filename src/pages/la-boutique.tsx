import { Title } from "../components/title/title";
import Video1 from "../assets/video2.mp4";
import { PaymentSection } from "../components/payment-section/payment-section";
import { useGlobalContext } from "../context/context";
import { ContactSection } from "../components/contact-section/contact-section";
import { WhoWeAreSection } from "../components/who-we-are-section/who-we-are-section";
import { RecruitmentSection } from "../components/recruitment/recruitment-section";

type Props = {};

export const LaBoutique = (props: Props) => {
  return (
    <div className="w-100">
      <Title h1 className="my-5 text-center primary" title="La boutique" />
      {/* <div className="w-100 my-5 text-secondary d-flex"
      >
        <span className="mx-4">Qui sommes-nous ?</span>
        <span className="mx-4">Contact</span>
      <span className="mx-4">Recrutement</span>
      <span className="mx-4">Évenements</span>
      
      <span className="mx-4">Presse</span>




      </div> */}
      {/* <video
        height={600}
        className="w-100 position-relative"
        autoPlay={true}
        loop={true}
        style={{ objectFit: "cover", borderRadius: 0 }}
      >
        <source src={Video1} />
      </video> */}
      <WhoWeAreSection />
      <Title h5 className="my-5" title="Contact" />

      <ContactSection />
      
      <RecruitmentSection />
      <PaymentSection />
    </div>
  );
};
