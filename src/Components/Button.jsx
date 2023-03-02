import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React, { memo } from 'react';
import { tokens } from "../theme";

function Buttonn({buttonname,icon,width, marginBottom,marginleft,marginright}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log('profile');
    return (
        <>
            <Button type="submit" color="secondary" variant="contained"
                sx={{
                    width: {width},   marginBottom:{marginBottom}, height: '40px', fontSize: "14px",
                    fontWeight: "bold",marginLeft:{marginleft},marginRight:{marginright}
                }}>
                {icon}
                {buttonname}
            </Button>
        </>
    )
}

export default memo(Buttonn)