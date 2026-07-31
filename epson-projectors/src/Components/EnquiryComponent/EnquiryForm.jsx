import { useState } from "react";
import axios from "axios";
import EnquiryInput from "./EnquiryInput";
import EnquiryFormSelect from "./EnquiryFormSelect";
import SubmitButton from "./SubmitButton";
import Success from "./Success";

import states from "../../data/states";
import languages from "../../data/languages";

import { validateEnquiry } from "../../utils/validation";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    language: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/enquiry`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.success) {
      setSuccess(true);
    } else {
      alert(response.data.message);
    }
  } catch (err) {
    console.error(err);

    if (err.response) {
      alert(err.response.data.message);
    } else {
      alert(err.message);
    }
  } finally {
    setLoading(false);
  }
};

if (success) {
  return <Success />;
}

  return (
    <div className="rounded-[36px] bg-white  p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)] lg:p-10">

      {/* Heading */}

      <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-red-600">
        AV DIGIPRO
      </span>

      <h2 className="mt-5 text-4xl font-black text-gray-900">
        Enquiry Form
      </h2>

      <p className="mt-3 text-gray-500">
        Fill in the details below and our Epson experts
        will contact you shortly.
      </p>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >

        <EnquiryInput
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />

        <EnquiryInput
          label="Phone Number"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />

        <EnquiryInput
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <EnquiryFormSelect
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          options={states}
          error={errors.state}
          required
        />

        <EnquiryFormSelect
          label="Preferred Language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          options={languages}
          error={errors.language}
          required
        />

        {/* Message */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Message
            <span className="ml-1 text-red-600">*</span>
          </label>

          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us your requirement..."
            className={`w-full rounded-2xl border px-5 py-4 outline-none transition-all duration-300

            ${
              errors.message
                ? "border-red-500"
                : "border-gray-200 focus:border-red-600 focus:ring-4 focus:ring-red-100"
            }`}
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.message}
            </p>
          )}

        </div>

        <SubmitButton loading={loading} />

      </form>

    </div>
  );
};

export default EnquiryForm;