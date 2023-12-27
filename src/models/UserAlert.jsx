import { useReducer } from 'react'

export function UserAlert() {

    const ERROR = 'error';
    const WARNING = 'warning';
    const INFO = 'info';
    const SUCCESS = 'success';

    const [alert, setAlert] = useReducer((prev, next) => {
        return { ...prev, ...next }
    },
        {
            show: false,
            type: '',
            message: '',
            duration: 3000
        });

    return { alert, setAlert, ERROR, WARNING, INFO, SUCCESS };
}





