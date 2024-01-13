import { format } from "date-fns"

const indexFields = (form, document) => {

    let fields = [];

    const profileFields = [
        { label: "First Name", current: form.form.profile.firstname },
        { label: "Middle Initial", current: form.form.profile.mi },
        { label: "Last Name", current: form.form.profile.lastname },
        { label: "Civil Status", current: form.form.profile.civilstatus },
        { label: "Gender", current: form.form.profile.gender },
        { label: "Address", current: form.form.profile.address },
        { label: "Place of Birth", current: form.form.profile.address },
        { label: "Date of Birth", current: format(form.form.profile.birthdate.toDate(), 'MMMM dd, yyyy') },
        { label: "Nationality", current: form.form.profile.national },
        { label: "Occupation", current: form.form.profile.occupation }
    ];

    console.log(form);

    if (form.formTypeId == 0) {
        const requiredFields = [
            { label: "Height (in cm)", current: form.form.height },
            { label: "Weight (in kg)", current: form.form.weight },
            { label: "Monthly Income", current: form.form.income },
        ];

        fields = [profileFields, requiredFields];
    } else if (form.formTypeId > 0 && form.formTypeId < 4) {
        const requiredFields = [
            { label: "Purpose", current: form.form.purpose }
        ];

        fields = [profileFields, requiredFields];
    } else {

        console.log("tae")
        let requiredFields = [];

        requiredFields = document['fields'].map((item, i) => {
            return {
                label: item.label,
                current: form.form['fields'][i].value
            }
        })

        fields = [profileFields, requiredFields];
    }

    return fields;
}

export {
    indexFields
}