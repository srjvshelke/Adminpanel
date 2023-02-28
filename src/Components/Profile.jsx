import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { memo } from 'react';
import { tokens } from "../theme";

function Profile() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log('profile');
    return (
        <>
            <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                        alt="profile-user"
                        width="100px"
                        height="100px"
                        src={`../../ASSEST/user.png`}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                </Box>
                <Box textAlign="center">
                    <Typography
                        variant="h2"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                    >
                        SURAJ SHELKE
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                        Admin
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default memo(Profile)