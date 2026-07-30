import React from "react";
import { assetManifest } from "../assets/assetManifest.js";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <video
        src={assetManifest.videos.loading}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Preloader;