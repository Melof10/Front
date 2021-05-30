import { ApiService } from '../../../services/apiServices';
import { API_URL, GET_POSTS, REQUEST_METHOD_GET } from '../../../constants';

export const getPosts = async(setData) => {
    await ApiService({
        API_URL: API_URL,
        BASE: GET_POSTS,
        METHOD: REQUEST_METHOD_GET
    })
    .then(res => {
        console.log(res);
        setData(res.data);
    })
    .catch(error => {
        console.log(error)
    }) 
}

export const getPost = async(setData, id) => {
    await ApiService({
        API_URL: API_URL,
        BASE: GET_POSTS,
        METHOD: REQUEST_METHOD_GET,
        ID: id
    })
    .then(res => {  
        console.log(res)
        setData(res.data);
    })
    .catch(error => {
        console.log(error)
    }) 
}