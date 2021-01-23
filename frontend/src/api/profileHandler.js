export const editUser = async(formValues) => {
    if (formValues.cellphoneNumber === undefined) {
        delete formValues.cellphoneNumber;
    }

    const response = await fetch('/user/edit', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(formValues)
    });

    const result = await response.json();

    return result;
}