import { useReducer } from 'react'

export function ClearanceForm() {
    const [form, updateForm] = useReducer((prev, next) => {
        return { ...prev, ...next }
    },
        {
            name: "Barangay Clearance",
            formId: null,
            status: 0,
            formType: "clearance",
            formTypeId: 1,
            profile: null,
            nickname: '',
            purpose: '',
            uploaded_docs: null,
            pick_up: '',
            payment_method: 'Cash on pick-up',
        });

    return { form, updateForm };
}





