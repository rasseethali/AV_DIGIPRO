import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="group inline-flex items-center gap-3 rounded-full border border-red-200 bg-white px-6 py-3 text-red-600 shadow-md transition-all duration-300 hover:-translate-x-1 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-xl"
    >
      <ArrowLeft
        size={20}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />

      <span className="font-semibold">
        Back
      </span>
    </button>
  );
};

export default BackButton;