import React, { memo } from 'react';
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";


function Item({ title, to, icon, selected, setSelected  }) {
    console.log("itrem");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <MenuItem
                active={selected === title}
                style={{
                    color: colors.grey[100],
          
                }}
                onClick={() => setSelected(title)}
                icon={icon}
                
            >
                <Typography>{title}</Typography>
                <Link to={to} />
            </MenuItem>
        </>
    )
}

export default memo(Item)