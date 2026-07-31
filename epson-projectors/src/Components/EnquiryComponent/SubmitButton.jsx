import { SendHorizontal, Loader2 } from "lucide-react";

const SubmitButton = ({ loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group relative mt-4 flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-red-700 via-red-600 to-red-700 px-8 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(220,38,38,0.35)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(220,38,38,0.45)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
    >

      {/* Shine */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <span className="relative flex items-center gap-3">

        {loading ? (
          <>
            <Loader2
              size={20}
              className="animate-spin"
            />

            Sending...
          </>
        ) : (
          <>
            Submit Enquiry

            <SendHorizontal
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </>
        )}

      </span>

    </button>
  );
};

export default SubmitButton;