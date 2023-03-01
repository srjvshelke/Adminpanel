import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React, { memo } from 'react';
import { tokens } from "../theme";

function Buttonn({buttonname}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log('profile');
    return (
        <>
            <Button type="submit" color="secondary" variant="contained"
                sx={{
                    width: '100px', height: '40px', fontSize: "14px",
                    fontWeight: "bold",
                }}>
                {buttonname}
            </Button>
        </>
    )
}

export default memo(Buttonn)