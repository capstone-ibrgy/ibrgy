import { useReducer } from 'react'

export function ResidencyForm() {
    const [form, updateForm] = useReducer((prev, next) => {
        return { ...prev, ...next }
    },
        {
            name: 'Certificate of Residency',
            formId: null,
            status: 0,
            formType: "residency",
            formTypeId: 2,
            profile: null,
            purpose: '',
            uploaded_docs: null,
            pick_up: '',
            payment_method: 'Cash on pick-up'
        });

    return { form, updateForm };
}





