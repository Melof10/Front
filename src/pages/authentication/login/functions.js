import { ApiService } from '../../../services/apiServices';
import { API_URL, LOGIN, REQUEST_METHOD_POST } from '../../../constants';

export const handleLogin = async(data) => {
    return await ApiService({
        API_URL: API_URL,
        BASE: LOGIN,
        METHOD: REQUEST_METHOD_POST,
        data: data
    });
}