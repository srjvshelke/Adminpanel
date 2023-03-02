import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextFieldforforms from "../../Components/TextField";
import Buttonn from "../../Components/Button.jsx";
import FileUploadIcon from '@mui/icons-material/FileUpload';
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
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: 'center',
                // position: 'relative',
                borderRadius: "5px",
                backgroundColor: colors.primary[400],
                padding: '20px'
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
                        <Box sx={{
                            maxWidth: "700px",
                            width: "100%",
                            padding: "25px 30px",
                            borderRadius: "25px",
                            backgroundColor: colors.blueAccent[400],
                        }}>
                            <form onSubmit={handleSubmit}>
                                <Box sx={{
                                    display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: 'center', marginX: "20px", marginY: "30px"
                                }}
                                >

                                    {/* <Box> */}
                                    <TextFieldforforms label="Work Order ID" />
                                    <TextFieldforforms label="Title" />
                                    <TextFieldforforms label="Assign To" />

                                    <Buttonn width='35%' buttonname="Upload File" marginBottom="15px" icon={<FileUploadIcon sx={{ mr: "10px" }} />} />
                                </Box>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    alignItems: 'center',
                                }} >
                                    <Buttonn  width='30%' buttonname="Add" marginright="20px"/>
                                    <Buttonn  width='30%' buttonname="Close" />
                                </Box>
                                {/* </Box> */}


                            </form>

                        </Box>)}
                </Formik>
            </Box >

        </>
    )
}

export default AddWorkorder