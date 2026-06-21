import  RegisterForm  from '@/components/forms/auth/register.forms';
import * as yup from "yup";

const LoginSchema = yup.object({
    email:yup.string().email("wrong email").required(),
    password: yup.string().required()
})

export  default LoginSchema;

export const RegisterSchema = yup.object({
    email:yup.string().email().required(),
    password:yup.string().required("password must have 6 letters"),
    full_name:yup.string().required("full_name is a required field"),
   c_pass:yup.string().required().oneOf([yup.ref("password")],"password must match" ),
   number:yup.string().optional()
})