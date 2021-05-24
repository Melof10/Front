import { ApiService } from '../../../services/apiServices';
import { API_URL, GET_PHOTOS, REQUEST_METHOD_GET } from '../../../constants';

export const getPhotos = async(setData, page) => {
    await ApiService({
        API_URL: API_URL,
        BASE: GET_PHOTOS + `/${page}/10`,
        METHOD: REQUEST_METHOD_GET
    })
    .then(res => {        
        setData(res.photos);
    })
    .catch(error => {
        console.log(error)
    }) 
}

export const nextPage = (setPhotos, setPage, page) => { 
    setPage(page + 1);   
    getPhotos(setPhotos, page + 1);    
}

export const previusPage = (setPhotos, setPage, page) => { 
    setPage(page - 1);       
    getPhotos(setPhotos, page - 1);   
}

export const firstPage = (setPhotos, setPage, page) => { 
    setPage(page);   
    getPhotos(setPhotos, page); 
}

export const lastPage = (setPhotos, setPage, page) => { 
    setPage(page);   
    getPhotos(setPhotos, page);   
}