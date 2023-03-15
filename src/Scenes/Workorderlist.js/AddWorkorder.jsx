import { Box, Button, MenuItem, TextField } from '@mui/material'
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Buttonn from "../../Components/Button.jsx";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '../../Components/Header';
import { checkoutSchemaforworkorder } from '../../formsvalidation/yupschema';
import { Addworkorder, clearErrors } from '../../Redux/Action/Addworkorder';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
function AddWorkorder() {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const alert = useAlert();
    const dispatch = new useDispatch();

    const { error, loading } = useSelector(
        (state) => state.Addworkorder
    );

    const handleFormSubmit = (values) => {
        dispatch(Addworkorder(values));
    };
    const initialValues = {
        workorderid: "",
        title: "",
        assignto: "",

    };
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error]);


    return (
        <>
            <Container component="main" width="100%" height="100vh">
                <CssBaseline />
                <Header title="ADD WORK ORDER" subtitle="" />

                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={checkoutSchemaforworkorder}
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
                                sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: "100%",
                                }}
                            >
                                <Box sx={{
                                    marginTop: 5,
                                    borderRadius: "5px",
                                    backgroundColor: colors.primary[400],
                                    padding: '3%',

                                }} x={{ mt: 2 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="workorderid"
                                        label="Work Order ID"
                                        name="workorderid"
                                        autoComplete="workorderid"
                                        type="text"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.workorderid}
                                        error={!!touched.workorderid && !!errors.workorderid}
                                        helperText={touched.workorderid && errors.workorderid}
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="title"
                                        label="Title"
                                        name="title"
                                        autoComplete="title"
                                        type="text"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.title}
                                        error={!!touched.title && !!errors.title}
                                        helperText={touched.title && errors.title}
                                        autoFocus
                                    />
                                    <TextField
                                        select
                                        fullWidth
                                        // type="text"
                                        label="Assign To"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.assignto}
                                        name="assignto"
                                        margin="normal"
                                        required
                                        id="assignto"
                                        error={!!touched.assignto && !!errors.assignto}
                                        helperText={touched.assignto && errors.assignto}
                                        autoFocus
                                    >
                                        <MenuItem value="Contractor">Contractor</MenuItem>
                                        <MenuItem value="Technician">Technician</MenuItem>
                                    </TextField >

                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        mt: 3
                                    }} >

                                        <Button variant="contained" component="label" color="primary">
                                            {" "}
                                            <FileUploadIcon /> Upload  file
                                            <input type="file" hidden />
                                        </Button>

                                    </Box>

                                    <Box sx={{

                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        alignItems: 'center',
                                        mt: 5
                                    }} >
                                        <Buttonn width='30%' buttonname="Add" marginright="20px" />
                                        <Buttonn width='30%' buttonname="Close" />
                                    </Box>
                                </Box>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Container>

        </>
    )
}

export default AddWorkorder