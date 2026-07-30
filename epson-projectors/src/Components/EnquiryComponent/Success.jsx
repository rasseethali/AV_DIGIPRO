import { CheckCircle2, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[600px] items-center justify-center">

      <div className="w-full max-w-xl rounded-[36px] border border-red-100 bg-white p-12 text-center shadow-[0_20px_60px_rgba(220,38,38,.12)]">

        <div className="mx-auto flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-red-100">
          <CheckCircle2
            size={60}
            className="text-red-600"
          />
        </div>

        <h2 className="mt-8 text-4xl font-black text-gray-900">
          Thank You!
        </h2>

        <p className="mt-5 text-lg leading-8 text-gray-500">
          Your enquiry has been submitted successfully.
        </p>

        <p className="mt-2 text-gray-500">
          Our team will contact you soon.
        </p>

        <button
          onClick={() => navigate("/")}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Home
            size={20}
            className="transition group-hover:-translate-x-1"
          />

          Back to Home
        </button>

      </div>
    </div>
  );
};

export default Success;