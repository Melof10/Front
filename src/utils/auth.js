import jwtDecode from 'jwt-decode';
import moment from 'moment';
import { ApiService } from '../services/apiServices';
import { 
    API_URL, 
    REFRESH_ACCESS_TOKEN, 
    REQUEST_METHOD_POST, 
    ACCESS_TOKEN, 
    REFRESH_TOKEN 
} from '../constants';

export function getAccessTokenApi(){
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if(!accessToken || accessToken === null || accessToken === ''){
        return null;
    }

    return willExpiredToken(accessToken) ? null : accessToken;
}

export function getRefreshTokenApi(){
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    if(!refreshToken || refreshToken === null || refreshToken === ''){
        return null;
    }

    return willExpiredToken(refreshToken) ? null : refreshToken;
}

export const refreshAccessToken = async(refreshToken) => {
    try{
        const refreshAccessToken = await ApiService({
            API_URL: API_URL,
            BASE: REFRESH_ACCESS_TOKEN,
            METHOD: REQUEST_METHOD_POST,
            data: refreshToken
        });
        if(!refreshAccessToken){
            logout();
            console.log(refreshAccessToken);            
        }else{
            const { accessToken, refreshToken } = refreshAccessToken;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);
        }
    }catch(error){                
        console.log(error);        
    }        
}

export function logout(){
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

function willExpiredToken(token){    
    const metaToken = jwtDecode(token);
    const { exp } = metaToken;
    const now = moment().unix();
    return now > exp;
}