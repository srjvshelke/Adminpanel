import * as yup from "yup";
const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


export const checkoutSchemaforadduser = yup.object().shape({
    // firstName: yup.string().required("required"),
    // lastName: yup.string().required("required"),
    // Employeeid: yup.string().required("required"),
    // email: yup.string().email("invalid email").required("required"),
    // contact: yup
    //     .string()
    //     .matches(phoneRegExp, "Phone number is not valid")
    //     .required("required"),

    // Type:yup.string().required("required"),
    // Password:yup.string().required("required"),
    // ConfirmPassword: yup.string().required("required"),
});


export const checkoutSchemaforworkorder = yup.object().shape({
    // workorderid: yup.string().required("required"),
    // title: yup.string().required("required"),
    // assignto: yup.string().email("invalid email").required("required"),
});
