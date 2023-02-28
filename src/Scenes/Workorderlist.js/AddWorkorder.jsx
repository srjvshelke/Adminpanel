import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
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
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
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

                            <Box
                                display="grid"
                                gap="20px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    minHeight: "60%",
                                    minWidth: "60%",
                                    backgroundColor: colors.blueAccent[400],
                                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                }}>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Password"
                                    onBlur={handleBlur}
                                    // onChange={handleChange}
                                    // value={values.contact}
                                    name="Password"
                                    // error={!!touched.contact && !!errors.contact}
                                    // helperText={touched.contact && errors.contact}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Password"
                                    onBlur={handleBlur}
                                    // onChange={handleChange}
                                    // value={values.contact}
                                    name="Password"
                                    // error={!!touched.contact && !!errors.contact}
                                    // helperText={touched.contact && errors.contact}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Password"
                                    onBlur={handleBlur}
                                    // onChange={handleChange}
                                    // value={values.contact}
                                    name="Password"
                                    // error={!!touched.contact && !!errors.contact}
                                    // helperText={touched.contact && errors.contact}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                 <Button type="submit" color="secondary" variant="contained"
                                    sx={{
                                        // marginLeft:"10px",
                                        width: '100px', height: '40px', fontSize: "14px",
                                        fontWeight: "bold",
                                    }}>
                                    Upload file
                                </Button>
                            </Box>
                            <Box display="flex" justifyContent="center" alignItems='center' mt="40px">
                                <Button type="submit" color="secondary" variant="contained"
                                    sx={{
                                        width: '100px', height: '40px', fontSize: "14px",
                                        fontWeight: "bold",
                                    }}>
                                    Add 
                                </Button>
                                <Button type="submit" color="secondary" variant="contained"
                                    sx={{
                                        marginLeft:"10px",
                                        width: '100px', height: '40px', fontSize: "14px",
                                        fontWeight: "bold",
                                    }}>
                                    close
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>

        </>
    )
}

export default AddWorkorder