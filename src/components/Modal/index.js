import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {createTheme, styled} from '@mui/material/styles';
import {TextField} from "@mui/material";
import {ThemeProvider} from "@emotion/react";

const style = {
    position: 'absolute',
    top: '40vh',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    p: 4,
};

const ColorButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#096F7D',
    '&:hover': {
        backgroundColor: '#000',
    },
}));

//Palete color
const theme_button = createTheme({
    palette: {
        primary: {
            light: '#FFC900',
            main: '#086E7D',
            dark: '#1A5F7A',
            contrastText: '#fff',
        },
        secondary: {
            light: '#FFF89A',
            main: '#FFC900',
            dark: '#086E7D',
            contrastText: '#000',
        },
    },
});

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    return (
        <>
            <div>
                <ColorButton variant="contained" size="large" onClick={handleOpen}>Sign In</ColorButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="Sign In"
                    aria-describedby="Sign In"
                >
                    <Box component='form' autocomplete="off" sx={style} className='xl:w-2/5 md:w-3/5 w-11/12 rounded'>
                        <Typography id="modal-modal-title" variant="h4" component="h4" align='center'>
                            Sign In
                        </Typography>
                        <Typography id="modal-modal-description" className='mt-9'>
                            Sign in to access additional content.
                        </Typography>

                        <div>
                            <div className='pt-4 pb-4 text-center'>
                                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" type="email" autoFocus />
                            </div>
                            <div className='text-center'>
                                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type="password"/>
                            </div>
                            <p Style="margin-top: 3% ; color: red"><a href=''>Forgot your password ?</a></p>
                            <div className='mt-9 text-center'>
                                <ThemeProvider theme={theme_button}>
                                    <Button color="primary" variant="contained" size='large'>Sign In</Button>
                                </ThemeProvider>
                            </div>
                            <p className='mt-10'>Do not have an account yet ? <Button size='large' onClick={handleOpen2} Style="color: #096F7D"> Sign Up</Button></p>
                        </div>
                    </Box>
                </Modal>
            </div>

            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="Sign Up"
                aria-describedby="Sign Up"
            >
                <Box component='form' autocomplete="off" sx={style} className='xl:w-2/5 md:w-3/5 w-11/12 rounded'>
                    <Typography id="modal-modal-title" variant="h3" component="h3" align='center'>
                        Sign Up
                    </Typography>
                    <div>
                        <div className='pt-4 pb-12 text-center'>
                            <Typography id="modal-modal-title" variant="h5" component="h5" align='center'>
                                Your Name
                            </Typography>
                            <TextField id="outlined-basic" label="First name" variant="outlined" type="text" autoFocus />
                            <TextField id="outlined-basic" label="Last name" variant="outlined" type="text" />
                        </div>
                        <div className='pb-12 text-center'>
                            <Typography id="modal-modal-title" variant="h5" component="h5" align='center'>
                                Your email
                            </Typography>
                            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" type="email" />
                        </div>
                        <div className='pb-4 text-center'>
                            <Typography id="modal-modal-title" variant="h5" component="h5" align='center'>
                                Your Password
                            </Typography>
                            <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type="password"/>
                        </div>
                        <div className='pb-4 text-center'>
                            <TextField fullWidth id="outlined-basic" label="Confirm Password" variant="outlined" type="password"/>
                        </div>
                        <div className='mt-9 text-center'>
                            <ThemeProvider theme={theme_button}>
                                <Button color="primary" variant="contained" size='large'>Sign Up</Button>
                            </ThemeProvider>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
