import { useReducer } from "react";

export function ClearanceForm() {
  const [form, updateForm] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      formId: null,
      name: "Barangay Clearance",
      status: 0,
      formType: 1,
      profile: null,
      nickname: "",
      purpose: "",
      uploaded_docs: null,
      pick_up: "",
      payment_method: "Cash on pick-up",
    }
  );

  return { form, updateForm };
}
