import React, {useRef} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Navbar.css';

function Navbar({allData, onQuery}) {
    //making search with filter method
    const searchRef = useRef('')
    const valueHandel = (e) => {
        e.preventDefault();
        const getValue = allData.filter(item => {
            return item?.name?.common.toLowerCase().includes(searchRef.current.value.toLowerCase())
        });
        onQuery(getValue)
    }

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <div className="nav-container w-100 d-flex justify-content-between">
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Country
                            </Typography>
                            <div className="input-group w-25">
                                <input type="text" className="form-control"
                                       placeholder="Search" ref={searchRef}/>
                                <div className="input-group-append">
                                    <button className="btn btn-cu" type="button" onClick={valueHandel}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
