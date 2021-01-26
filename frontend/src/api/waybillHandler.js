export const createWaybill = async(waybillDetails) => {
    const response = await fetch('/waybill/create', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(waybillDetails)
    });

    const result = await response.json();

    if (result.success) { //success
        return true;
    } else if (result.err) { //known error
        return false;
    } else { //other errors
        return false;
    }
}

export const editWaybill = async(waybillDetails, objectId) => {
    waybillDetails._id = objectId;
    const response = await fetch('/waybill/edit', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(waybillDetails)
    });

    const result = await response.json();

    if (result) {
        return true;
    } else {
        return false;
    }
}

export const getWaybillList = async() => {
    const response = await fetch('/waybill/list', {
        credentials: 'include'
    });

    const result = await response.json();

    var list = result.list;

    if (Array.isArray(list) && list.length) {
        return list;
    } else {
        return null;
    }
}