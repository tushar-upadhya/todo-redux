import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext } from "react";
import { DeleteContext } from "../context/contextProvider";

const Navbar = () => {
    const { dlttask, setDlettask } = useContext(DeleteContext);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: "#232f3e" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            style={{ textAlign: "center" }}
                        >
                            TO-DO
                        </Typography>
                        {/* <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;
