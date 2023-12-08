import React from "react";
import { Grid, Typography, LinearProgress, Icon, IconButton, Box } from "@mui/material";
// import { green } from "@mui/material/colors";
// import EditIcon from '@mui/icons-material/Edit';
// import BasicModal from "./BasicModal.js"
// import EditSaving from "./EditSaving.js";
import BasicModal from "./BasicModal";

const ProgressSaving = ({ goalAmount, title, amount }) => {

    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    return (
        <Box sx={{ width: '100%', marginTop: '1px' }}>

            <Typography variant="subtitle1"
                sx={{
                    mb: -2,
                    fontWeight: 500
                }}>{title}</Typography>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <LinearProgress
                    variant="determinate"
                    value={((amount * 100) / goalAmount)}
                    sx={{
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: 'green'
                        },
                        backgroundColor: '#96D4AE',
                        width: '70%',
                        borderRadius: '10px'
                    }}
                />

                <Typography sx={{ fontWeight: 600 }}>$ {amount}<IconButton edge="end" color="primary" >
                    <Icon sx={{ color: "green", borderRadius: '50px', backgroundColor: '#EFECEC', textAlign: 'center' }} onClick={() => { handleOpenModal() }} >+</Icon>
                </IconButton></Typography>

            </Box>
            <BasicModal isEdit={true} open={openModal} close={handleCloseModal} data={{ goalAmount, title, amount }} />
        </Box>

    );
};

export default ProgressSaving;