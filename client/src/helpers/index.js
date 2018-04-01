import axios from "axios/index";

export async function isAuth() {
    const promise = axios.post('http://localhost:5000/isAuth', {});

    return promise;
}

/*export async function isLoggedIn() {
    let bool = await isAuth();
    console.log('isLoggedIn: ', bool.data.authenticated);
    return bool.data.authenticated;
}*/