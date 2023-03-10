import { Box, Button, MenuItem, TextField } from "@mui/material";
import { Formik } from "formik";

import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import TextFieldforforms from "../Components/TextField";
import { checkoutSchemaforadduser } from "../formsvalidation/yupschema";
import { useDispatch, useSelector } from "react-redux";
import { Addauser, clearErrors } from "../Redux/Action/Adduser";
import { useEffect } from "react";
import { useAlert } from "react-alert";

// import checkoutSchemaforadduser from "../formsvalidation/yupschema"

const Adduser = () => {
    // const alert = useAlert();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const dispatch = new useDispatch();

    const { error, loading } = useSelector(
        (state) => state.adduser
      );

    const initialValues = {
        firstName: "",
        lastName: "",
        Employeeid: "",
        email: "",
        contact: '',
        Type: "",
        Password: "",
        ConfirmPassword: "",
    };

    const handleFormSubmit = (values) => {
  
        // const { firstName, lastName, Employeeid, email, contact, Type, Password, ConfirmPassword } = values;
        // const myForm = new FormData();
    
        // myForm.set("firstname", values.firstName);
        // myForm.set("lastname",  values.lastName);
        // myForm.set("employeeid",  values.Employeeid);
        // myForm.set("emailid",  values.email);
        // myForm.set("contact",  values.contact);
        // myForm.set("type",  values.Type);
        // myForm.set("password",  values.Password);
        // myForm.set("confirmpassword",  values.ConfirmPassword);
        dispatch(Addauser(values));
    };

    
  useEffect(() => {
    if (error) {
    //   alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);



    return (
        <Box m="20px" >
            <Header title="ADD USER" subtitle="Add a New User" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchemaforadduser}
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
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },

                                // width: "50%"
                            }}

                        >
                            <TextFieldforforms
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                            />

                            <TextFieldforforms
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />

                            <TextFieldforforms
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Employee ID"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Employeeid}
                                name="Employeeid"
                                error={!!touched.Employeeid && !!errors.Employeeid}
                                helperText={touched.Employeeid && errors.Employeeid}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextFieldforforms
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email ID"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextFieldforforms
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                select
                                fullWidth
                                variant="filled"
                                // type="text"
                                label="Type"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Type}
                                name="Type"
                                error={!!touched.Type && !!errors.Type}
                                helperText={touched.Type && errors.Type}
                                sx={{ gridColumn: "span 2" }}
                            >
                                <MenuItem value="Contractor">Contractor</MenuItem>
                                <MenuItem value="Technician">Technician</MenuItem>
                            </TextField >
                            <TextFieldforforms
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Password}
                                name="Password"
                                error={!!touched.Password && !!errors.Password}
                                helperText={touched.Password && errors.Password}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextFieldforforms
                                fullWidth
                                variant="filled"
                                type="text"
                                label=" Confirm Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.ConfirmPassword}
                                name="ConfirmPassword"
                                error={!!touched.ConfirmPassword && !!errors.ConfirmPassword}
                                helperText={touched.ConfirmPassword && errors.ConfirmPassword}
                                sx={{ gridColumn: "span 2" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems='center' mt="40px">
                            <Button type="submit" color="secondary" variant="contained"
                                sx={{
                                    width: '100px', height: '40px', fontSize: "14px",
                                    fontWeight: "bold",
                                }}>
                                Add User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};



export default Adduser;
