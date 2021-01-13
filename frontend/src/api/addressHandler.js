//Create new address
export const newAddress = async(formValues) => {
    const response = await fetch('/address/create', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(formValues)
    });
    const message = (await response).json();
    console.log();
    if (message === 'saved') {

    }
    if (message === 'error') {

    }
    if (message === 'duplicate') { //backend basis of duplication is address name!
        console.log("duplicated");
    }
}

//get address list of user
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

//get single address for edit modal
export const getAddress = async(event) => {
    //get name of address since address name is unique per user
    const name = event.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[0].innerHTML;

    const response = await fetch('/address/edit/' + name, {
        credentials: "include"
    });

    const result = await response.json();
    if (result.address) {
        return result.address;
    } else if (result.message) {
        return null;
    }
}

export const editAddress = async(formValues, currentName) => {
    const response = await fetch('/address/edit/' + currentName, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify(formValues)
    });

    const result = await response.json();

    if (result.message === 'updated') {
        console.log("updated!");
    } else {
        console.log('error updating.');
    }
}

export const deleteAddress = async(addressName) => {
    const response = await fetch('/address/delete/' + addressName, {
        method: 'DELETE',
        credentials: 'include'
    });

    const result = await response.json();

    if (result.message === 'deleted') {
        console.log('deleted!');
    } else {
        console.log('error.');
    }
}