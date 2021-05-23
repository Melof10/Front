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
        setData(res.posts);
    })
    .catch(error => {
        console.log(error)
    }) 
}