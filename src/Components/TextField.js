import { Calculate } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme, TextField } from "@mui/material";
import React, { memo } from 'react';
import { tokens } from "../theme";


function TextFieldforforms(props) {
    const { variant,type, label, handleBlur,handleChange,value, name,error,helperText} = props;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <TextField
                fullWidth
                variant={variant}
                type={type}
                label={label}
                onBlur={handleBlur}
                onChange={handleChange}
                value={value}
                name={name}
                error={error}
                helperText={helperText}
              { ...props}
                // sx={{ gridColumn: "span 2" }}
                // onChange={handleChange}
                // value={values.contact}
                // error={!!touched.contact && !!errors.contact}
                // helperText={touched.contact && errors.contact}
                // sx={{
                //     width:'45%',
                //     marginBottom:"15px",
                // }}
            />
        </>
    )
}

export default memo(TextFieldforforms)