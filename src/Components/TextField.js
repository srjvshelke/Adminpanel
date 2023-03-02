import { Calculate } from "@mui/icons-material";
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
                sx={{
                    width:'45%',
                    marginBottom:"15px",
                    // padding: '12px',
                    // border: 'none',
                    // borderRadius: "5px",
                    // margin: '5px',
                    // display: 'inline-block',
                    // fontSize: ' 17px',
                    // lineHeight: '20px'
                }}
            />
        </>
    )
}

export default memo(TextFieldforforms)