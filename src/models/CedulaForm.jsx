import { useReducer } from "react";

export function CedulaForm() {
  const [form, updateForm] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      formId: null,
      name: "Community Tax Certificate (Cedula)",
      status: 0,
      formType: 0,
      profile: null,
      height: "",
      weight: "",
      income: "Below Php 10,000",
      uploaded_docs: null,
      pick_up: "",
      payment_method: "Cash on pick-up",
    }
  );

  return { form, updateForm };
}
