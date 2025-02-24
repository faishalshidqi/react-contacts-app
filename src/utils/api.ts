const BASE_URL = 'https://contact-api.dicoding.dev/v1'

function getAccessToken() {
    return localStorage.getItem('accessToken')
}

function setAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken)
}

async function fetchApiWithToken(url: string,
                                 options: {
                                     headers: object,
                                     method: 'POST' | 'GET' | 'PUT' | 'DELETE',
                                     body: string
                                 } = {headers: {}, method: 'GET', body: ''}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`,
        }
    })
}


async function login({email, password}: {email: string, password: string}) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
    })
    const responseJson = await response.json()
    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true, data: {}}
    }
    return {error: false, data: responseJson.data}
}

async function register({name, email, password}: {name: string, email: string, password: string}) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password})
    })
    const responseJson = await response.json()
    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true}
    }
    return {error: false}
}

async function getUserLogged() {
    const response = await fetchApiWithToken(`${BASE_URL}/users/me`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        return {error: true, data: {}}
    }
    return {error: false, data: responseJson.data}
}

async function addContact({name, tag}: {name: string, tag: string}) {
    const response = await fetchApiWithToken(`${BASE_URL}/contacts`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({name, tag})
    })
    const responseJson = await response.json()
    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true}
    }
    return {error: false}
}

async function getContacts() {
    const response = await fetchApiWithToken(`${BASE_URL}/contacts`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true, data: []}
    }
    return {error: false, data: responseJson.data}
}

async function deleteContact(id: string) {
    const response = await fetchApiWithToken(`${BASE_URL}/contacts/${id}}`, {
        method: 'DELETE',
        headers: {},
        body: ""
    })
    const responseJson = await response.json()
    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true}
    }
    return {error: false}
}

export {
    getAccessToken, setAccessToken, login, register, getUserLogged, addContact, getContacts, deleteContact
}
