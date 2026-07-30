export const validateEnquiry = (formData) => {
  const errors = {};

  // Name
  if (!formData.name.trim()) {
    errors.name = "Full Name is required.";
  }

  // Phone
  if (!formData.phone.trim()) {
    errors.phone = "Phone Number is required.";
  } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }

  // Email
  if (!formData.email.trim()) {
    errors.email = "Email Address is required.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  // State
  if (!formData.state) {
    errors.state = "Please select your state.";
  }

  // Language
  if (!formData.language) {
    errors.language = "Please select a language.";
  }

  // Message
  if (!formData.message.trim()) {
    errors.message = "Message cannot be empty.";
  }

  return errors;
};