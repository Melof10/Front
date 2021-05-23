import { ApiService } from '../../../services/apiServices';
import { API_URL, LOGIN, REQUEST_METHOD_GET } from '../../../constants';

export const Login = async(data) => {
    return await ApiService({
        API_URL: API_URL,
        BASE: LOGIN,
        METHOD: REQUEST_METHOD_GET
    });
}