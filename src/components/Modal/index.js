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

    return (
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
                        Connectez-vous pour accéder à du contenu supplémentaire.
                    </Typography>

                    <div>
                        <div className='pt-4 pb-4 text-center'>
                            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" type="email" autoFocus />
                        </div>
                        <div className='text-center'>
                            <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type="password"/>
                        </div>
                        <p Style="margin-top: 3% ; color: red">Forgot your password ?</p>
                        <div className='mt-9 text-center'>
                            <ThemeProvider theme={theme_button}>
                                <Button color="primary" variant="contained" size='large'>Sign In</Button>
                            </ThemeProvider>
                        </div>
                        <p className='mt-10'>Do not have an account yet ?<a Style="color: #"> Sign Up</a></p>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
