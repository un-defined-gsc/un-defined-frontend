import { Close } from '@mui/icons-material';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton
} from '@mui/material';


/**
 * @param {*} props
 */

const ClassicDialog = (props) => {
    const {
        children,
        actions,
        title,
        subtitle,
        setOpen,
        size = 'sm',
        disableBackdropClick,
    } = props;

    const _disableBackdropClick = disableBackdropClick ?? false;

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
                {...props}
                fullWidth
                maxWidth={size}
                scroll='body'
                onClose={(event, reason) => {
                    if (_disableBackdropClick) {
                        if (reason != 'backdropClick') {
                            handleClose();
                        }
                    } else {
                        handleClose();
                    }
                }}
            >
                <IconButton
                    size='small'
                    onClick={() => handleClose()}
                    sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
                >
                    <Close />
                </IconButton>

                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{subtitle}</DialogContentText>

                    <Box sx={{ mt: 4 }}>{children}</Box>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color='secondary'
                        variant='outlined'
                    >
                        Close
                    </Button>

                    {actions}
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ClassicDialog;
