export const setSignIn = async(googleUser) => {
    const response = await fetch('/user/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ token: googleUser.getAuthResponse().id_token })
    });

    window.location.href = (await response.json()).url;
};

export const getSessionUser = async() => {
    const response = await fetch('/user/getSession', {
        credentials: "include"
    });
    const responseContent = await response.json();

    if (responseContent == null) {
        return null;
    } else {
        return responseContent;
    }
}

export const setLogout = async() => {
    console.log("log");
    const response = await fetch('/user/logout', {
        method: "DELETE",
        credentials: 'include'
    });

    window.location.href = (await response.json()).url;
};