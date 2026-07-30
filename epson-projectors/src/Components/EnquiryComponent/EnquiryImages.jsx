import { assetManifest } from "../../assets/assetManifest";
import { ShieldCheck, Award, Headphones } from "lucide-react";

const EnquiryImages = () => {
  return (
    <div className="relative hidden overflow-hidden  lg:flex min-h-[900px] items-center justify-center bg-gradient-to-br from-[#8B0000] via-[#B91C1C] to-[#DC2626]">

      <div>
        <img
          src={assetManifest.hero.EnquiryImage}
          alt="Home Cinema Projector"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      

    </div>
  );
};

export default EnquiryImages;