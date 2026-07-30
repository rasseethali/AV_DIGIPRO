import React from "react";

export const GoogleMap = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=R-10,Sangath+Alacrity+Flats,2nd+Street,MGR+Nagar,Velachery,Chennai+600042&output=embed"
            title="AV DIGIPRO Office Location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="w-full h-[420px] rounded-3xl border border-gray-200 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
