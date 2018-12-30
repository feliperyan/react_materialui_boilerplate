const API_BASE_ENDPOINT = 'http://localhost:8000'
const API_LOGIN = '/api/user/login'
const API_REGISTER = '/api/user/new'
const API_QUOTE = '/api/quote'


export const register = async(the_email, the_password) => {
    console.log(`got ${the_email} ${the_password}`);
    let response = await postData(`${API_BASE_ENDPOINT}${API_REGISTER}`, {email:the_email, password:the_password});

    return(response)
}

export const login = async(the_email, the_password) => {
    console.log(`got ${the_email} ${the_password}`);
    let response = await postData(`${API_BASE_ENDPOINT}${API_LOGIN}`, {email:the_email, password:the_password});

    return(response)
}

export const getQuote = async(token) => {
    console.log('token: ', token);
    let response = await fetch(
        `${API_BASE_ENDPOINT}${API_QUOTE}`, 
        {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Authorization':'Bearer '+token,
            }    
        });

    if(!response.ok ){
        throw new Error(`Response from fetch not ok: ${response.status}`);
    }
    let data = await response.json();
    return({status:'ok', payload:data})
}

const postData = async(url = ``, body = {}) => {
    let response = await fetch(url, {
        method: "POST",
        mode: "cors", // no-cors, cors, *same-origin
        headers: {
            "Content-Type": "application/json",    
        },
        body: JSON.stringify(body), // body data type must match "Content-Type" header
    });

    if (!response.ok){
        console.log(response);
        throw new Error(`Response from postData not ok: ${response.status}`);
    }

    let datajson = await response.json();
    return(datajson);
}