import { useReducer } from 'react'

export function CedulaForm() {
    const [form, updateForm] = useReducer((prev, next) => {
        return { ...prev, ...next }
    },
        {
            height: '',
            weight: '',
            income: '',
            uploaded_docs: '',
            pick_up: '',
            payment_method: ''
        });

    return { form, updateForm };
}





