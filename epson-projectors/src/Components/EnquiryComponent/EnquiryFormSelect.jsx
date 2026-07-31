const EnquiryFormSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
}) => {
  return (
    <div className="space-y-2">

      <label className="block text-sm font-semibold text-gray-700">
        {label}
        {required && (
          <span className="ml-1 text-red-600">*</span>
        )}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-2xl border bg-white px-5 py-4 outline-none transition-all duration-300

        ${
          error
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100"
        }`}
      >

        <option value="">
          Select
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
};

export default EnquiryFormSelect;