import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextFieldforforms from "../../Components/TextField";
import Buttonn from "../../Components/Button.jsx"
function AddWorkorder() {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleFormSubmit = (values) => {
        console.log(values);
    };
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
        address2: "",
    };

    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const checkoutSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
        contact: yup
            .string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("required"),
        address1: yup.string().required("required"),
        address2: yup.string().required("required"),
    });
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                Height: "100vh"
            }}
            >
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={checkoutSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Box sx={{
                                marginTop:"20%",
                                Height: "90%",
                                Width: "90%",
                                backgroundColor: colors.blueAccent[400],
                            }}>
                                <Box sx={{
                               
                            }}
                                >
                                    <TextFieldforforms label="name" />
                                    <TextFieldforforms label="name" />
                                    <TextFieldforforms label="name" />

                                    <Buttonn buttonname="Upload" />
                                </Box>
                                <Box display="flex" justifyContent="center" alignItems='center' mt="40px">
                                    <Buttonn />
                                    <Buttonn />
                                </Box>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>

        </>
    )
}

export default AddWorkorder