export const newAddress = async(formValues) => {
    const response = await fetch('/address/create', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(formValues)
    });
    const message = (await response).json().message;

    if (message === 'saved') {

    }
    if (message === 'error') {

    }
}

export const getAddressList = async() => {
    const response = await fetch('/address/list', {
        credentials: "include"
    });

    const addressList = await response.json();

    var list = addressList.list;
    if (Array.isArray(list) && list.length) {
        return list;
    } else {
        return null;
    }
}