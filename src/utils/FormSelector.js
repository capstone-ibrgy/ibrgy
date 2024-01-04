import Cedula from '../screens/user/Cedula'
import Clearance from '../screens/user/Clearance'
import Indigency from '../screens/user/Indigency'
import Residency from '../screens/user/Residency'

function FormSelector(form) {

    if (form.id == 'cedula') return <Cedula />
    else if (form.id == 'clearance') return <Clearance />
    else if (form.id == 'indigency') return <Indigency />
    else if (form.id == 'residency') return <Residency />

    return (
        <div>FormSelector</div>
    )
}

export {
    FormSelector
}