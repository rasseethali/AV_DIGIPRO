import EnquiryImages from "../components/EnquiryComponent/EnquiryImages";
import EnquiryForm from "../components/EnquiryComponent/EnquiryForm";
import BackButton from "../components/EnquiryComponent/BackButton";
import { assetManifest } from "../assets/assetManifest";

const Enquiry = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">



      <BackButton />

      <div className="mx-auto max-w-7xl">

        <div className="overflow-hidden rounded-[40px] bg-white shadow-2xl">

          <div className="grid lg:grid-cols-[45%_55%]">

            <EnquiryImages />

            <EnquiryForm />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Enquiry;