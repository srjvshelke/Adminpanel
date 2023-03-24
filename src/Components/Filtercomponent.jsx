import { Typography, Box, useTheme, InputLabel, NativeSelect, FormControl } from "@mui/material";
import { memo } from "react";
import { tokens } from "../theme";
import Filter from "./Filter";

const Filtercomponent = ({ Filtername, options }) => {
    console.log("Filter");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <Box m="2%" display='flex' alignItems='center' flexDirection='row' sx={{
                width: '96%',
                minHeight: "5vh",
                backgroundColor: colors.blueAccent[700],
            }} >
                <Typography m="2%" variant="h4" color={colors.grey[100]}>
                    Filter By  :
                </Typography>
                {
                    Filtername
                }


                <Filter Label={Filtername} options = { options} />


            </Box>
        </>
    );
};

export default memo(Filtercomponent);
