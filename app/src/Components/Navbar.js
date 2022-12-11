import React, { useRef, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import './Navbar.css';

function Navbar({ totaldata }) {
    const [inValue, setinValue] = useState("");
    const searchRef = useRef(null)
    const valueHandel = (e) =>{
        e.preventDefault();
        const getValue = totaldata.filter(item => item?.name?.common.toLowerCase().includes(searchRef.current.value));
        setinValue(getValue)
    }
    console.log(inValue)
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <div className="nav-container w-100 d-flex justify-content-between">
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Country
                            </Typography>
                            <div className="input-group w-25">
                                <input type="text" class="form-control" placeholder="Search this blog" ref={searchRef}/>
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary" type="button" onClick={valueHandel}>
                                            <i className="fa fa-search">ssss</i>
                                        </button>
                                    </div>
                            </div>
                                {/* <TextField
                                className="mb-2"
                                label="Search Countries"
                                onChange={e => setquery(e.target.value)}
                                sx={{ input: { color: 'white' } }}
                                onClick={console.log("sss")}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            /> */}
                            </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
            )
}

            export default Navbar
