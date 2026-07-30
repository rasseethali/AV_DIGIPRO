import { assetManifest } from "../../assets/assetManifest.js";

const MissionVision = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${assetManifest.backgrounds.red})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Mission & Vision
          </h2>
          <p className="mt-4 text-gray-200 text-2xl max-w-2xl mx-auto">
            Our commitment to innovation, quality, and customer satisfaction
            drives every solution we deliver.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 overflow-hidden">

            <span className="absolute top-0 left-0 h-1 w-0 bg-red-600 transition-all duration-500 group-hover:w-full"></span>

            <h3 className="text-3xl font-bold text-red-500 mb-5">
              Our Mission
            </h3>

            <p className="text-gray-200 leading-8">
              our mission is to deliver innovative, reliable, and high-quality audiovisual solutions that enhance communication, collaboration, and customer experiences. We are committed to providing cutting-edge technology, exceptional service, and tailored solutions that meet the evolving needs of businesses, educational institutions, corporate organizations, and public sectors. Through integrity, quality, and continuous innovation, we strive to build long-term partnerships with every client.
            </p>
          </div>

          {/* Vision */}
          <div className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 overflow-hidden">

            <span className="absolute top-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>

            <h3 className="text-3xl font-bold text-blue-400 mb-5">
              Our Vision
            </h3>

            <p className="text-gray-200 leading-8">
              Our vision is to become India's most trusted and preferred audiovisual technology partner by setting new standards in innovation, quality, and customer satisfaction. We aim to transform the way people communicate, learn, and collaborate through advanced AV solutions while creating sustainable value for our customers, employees, and business partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;