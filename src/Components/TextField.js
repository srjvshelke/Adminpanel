import { Box, IconButton, Typography, useTheme, TextField } from "@mui/material";
import React, { memo } from 'react';
import { tokens } from "../theme";

function TextFieldforforms({ type, label, handleBlur, name }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log('TextField');
    return (
        <>
            <TextField
                fullWidth
                variant="filled"
                type={type}
                label={label}
                onBlur={handleBlur}
                // onChange={handleChange}
                // value={values.contact}
                name={name}
                // error={!!touched.contact && !!errors.contact}
                // helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
            />
        </>
    )
}

export default memo(TextFieldforforms)