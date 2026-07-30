import React from "react";
import { assetManifest } from "../../assets/assetManifest.js";

const SubHero = () => {
  return (
    <section className="bg-black text-white py-16 px-5 md:px-10 lg:px-16">
      
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          The Best of Our 4K Technology
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">

        {/* Card 1 */}
        <div className="text-center">
          <img
            src={assetManifest.hero.sub1}
            alt="Local Contrast Enhancement"
            className="w-full h-56 object-cover rounded-lg"
          />
          <h3 className="mt-5 text-xl font-semibold">
            Local Contrast Enhancement
          </h3>
          <p className="mt-3 text-gray-300 leading-7">
            Greater dark and bright detail definition & enriched 4K image
            depth.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <img
            src={assetManifest.hero.sub2}
            alt="Enhanced Tone Mapping"
            className="w-full h-56 object-cover rounded-lg"
          />
          <h3 className="mt-5 text-xl font-semibold">
            Enhanced Tone Mapping
          </h3>
          <p className="mt-3 text-gray-300 leading-7">
            Increase contrast to preserve details in dark areas of projected
            images.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <img
            src={assetManifest.hero.sub3}
            alt="New HDR10+ technology"
            className="w-full h-56 object-cover rounded-lg"
          />
          <h3 className="mt-5 text-xl font-semibold">
            New HDR10+ Technology
          </h3>
          <p className="mt-3 text-gray-300 leading-7">
            Optimize each frame of HDR video and enhance details in both bright
            and dark areas.
          </p>
        </div>

        {/* Card 4 */}
        <div className="text-center">
          <img
            src={assetManifest.hero.sub4}
            alt="4K Ultra HD"
            className="w-full h-56 object-cover rounded-lg"
          />
          <h3 className="mt-5 text-xl font-semibold">
            4K Ultra HD 8.3 Million Pixels
          </h3>
          <p className="mt-3 text-gray-300 leading-7">
            Twice the resolution of 4K Pro-UHD or standard 4K.
          </p>
        </div>

        {/* Card 5 */}
        <div className="text-center">
          <img
            src={assetManifest.hero.sub5}
            alt="Colors"
            className="w-full h-56 object-cover rounded-lg"
          />
          <h3 className="mt-5 text-xl font-semibold">
            Colors as Directors Envisioned
          </h3>
          <p className="mt-3 text-gray-300 leading-7">
            Super-wide 95% DCI-P3 and 100% Rec.709 color space.
          </p>
        </div>

        {/* Card 6 */}
        <div className="text-center">
          <img
            src={assetManifest.hero.sub6}
            alt="Long Lasting Color"
            className="w-full h-56 object-cover rounded-lg"
          />
          <h3 className="mt-5 text-xl font-semibold">
            Long Lasting Color You Can Count On
          </h3>
          <p className="mt-3 text-gray-300 leading-7">
            Superior 4LED color volume, high contrast, and 10+ year LED light
            source life.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SubHero;