import { useReducer } from "react";

export function ResidencyForm() {
  const [form, updateForm] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      formId: null,
      name: "Certificate of Residency",
      status: 0,
      formType: 2,
      profile: null,
      purpose: "",
      uploaded_docs: null,
      pick_up: "",
      payment_method: "Cash on pick-up",
    }
  );

  return { form, updateForm };
}
