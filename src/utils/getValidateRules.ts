import { FormFieldName } from "config";

export const getFormValidation = (fieldName: FormFieldName) => {
  switch (fieldName) {
    case FormFieldName.NAME:
      return {
        required: "* Name is required",
        maxLength: { value: 25, message: "* max 15 characters" },
        pattern: {
          value: /^[аa-яzАA-ЯZ\s]*$/,
          message: "Only letters",
        },
      };
    case FormFieldName.EMAIL:
      return {
        required: {
          value: true,
          maxLength: { value: 25, message: "* max 15 characters" },
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          message: "Email is required. Please try again",
        },
      };
    case FormFieldName.PASSWORD:
      return {
        required: "* Password is required",
        maxLength: { value: 25, message: "* max 15 characters" },
        minLength: {
          value: 6,
          message: "Minimum 6 characters",
        },
      };
    case FormFieldName.CONFIRM_PASSWORD:
      return {
        required: "* Please confirm password",
        minLength: {
          value: 6,
          message: "* Minimum 6 characters",
        },
      };
  }
};
