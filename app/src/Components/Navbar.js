import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import './Navbar.css';

function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <div className="nav-container w-100 d-flex justify-content-between">
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Country
                            </Typography>
                            <TextField
                                className="mb-2"
                                label="Search Countries"
                                sx={{ input: { color: 'white' } }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
