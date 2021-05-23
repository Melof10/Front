import * as Yup from "yup";
import { EMAIL_INVALID, REQUIRED, errorMinCharacters } from '../../../constants'

export const LoginSchema = Yup.object().shape({    
    email: Yup.string()
        .email(EMAIL_INVALID)
        .required(REQUIRED),
    password: Yup.string()
        .min(4, errorMinCharacters(4))        
        .required(REQUIRED),
});