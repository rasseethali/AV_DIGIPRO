import React from "react";
import { Building2, GraduationCap, Hotel, Briefcase, House, Landmark } from "lucide-react";
import { assetManifest } from "../../assets/assetManifest.js";
const CompanyStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <img
            src={assetManifest.about.companyName}
            alt="Company"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Our Story
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            AV DIGIPRO was founded with the vision of providing innovative
            projector and visual display solutions. We help customers
            create immersive experiences through advanced technology,
            professional consultation, and reliable after-sales support.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            From home theatres to corporate boardrooms and educational
            institutions, we deliver solutions tailored to every
            requirement.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CompanyStory;