import {
  Building2,
  GraduationCap,
  Hotel,
  Briefcase,
  House,
  Landmark,
} from "lucide-react";

const industries = [
  { icon: Building2, title: "Corporate" },
  { icon: GraduationCap, title: "Education" },
  { icon: Hotel, title: "Hospitality" },
  { icon: Briefcase, title: "Business" },
  { icon: House, title: "Home Theatre" },
  { icon: Landmark, title: "Government" },
];

const Industries = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Industries We Serve
          </h2>

          <p className="mt-4 text-gray-600">
            Reliable AV solutions for every industry.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow hover:shadow-xl transition"
              >
                <Icon
                  size={42}
                  className="mx-auto text-red-600"
                />

                <h3 className="mt-5 font-semibold">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Industries;