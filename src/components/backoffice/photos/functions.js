import { ApiService } from '../../../services/apiServices';
import { API_URL, GET_PHOTOS, REQUEST_METHOD_GET } from '../../../constants';

export const getPhotos = async(setData) => {
    await ApiService({
        API_URL: API_URL,
        BASE: GET_PHOTOS + '/1/10',
        METHOD: REQUEST_METHOD_GET
    })
    .then(res => {        
        setData(res.photos);
    })
    .catch(error => {
        console.log(error)
    }) 
}