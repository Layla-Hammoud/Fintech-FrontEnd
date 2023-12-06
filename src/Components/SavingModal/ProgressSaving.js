import React from "react";
import { Grid, Typography, LinearProgress, Icon, IconButton } from "@mui/material";
// import { green } from "@mui/material/colors";
// import EditIcon from '@mui/icons-material/Edit';
// import BasicModal from "./BasicModal.js"
// import EditSaving from "./EditSaving.js";
import BasicModal from "./BasicModal";

const ProgressSaving = ({goalAmount, title, amount}) =>{
   
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => {
       setOpenModal(true);
    };
   
    const handleCloseModal = () => {
       setOpenModal(false);
    };
    return( <>
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
                <Typography variant="h5" sx={{
                    marginBottom: { xs: '4px', sm: '8px' }, 
                    fontSize: { xs: '1rem', sm: '1.2rem' } 
                    
                }}>{title}</Typography>

                <LinearProgress 
                    variant="determinate"
                    value={((amount*100)/goalAmount)}
                    sx={{
                        '& .MuiLinearProgress-bar':{
                            backgroundColor: 'green',
                        },
                        backgroundColor: '#96D4AE',
                        width: '100%',
                        marginBottom: { xs: '6px', sm: '0' },
                        marginTop: { xs: '0', sm: '4px' }
                    }}
                    />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>
                    {amount} 
            <IconButton edge="end" color="primary" >
                <Icon sx={{ color: "green"}} onClick={()=>{handleOpenModal()}} >+</Icon>
                {/* <Icon onClick={handleOpenModal} sx={{ color: "green"}} >+</Icon> */}
            </IconButton>
            </Typography>
            </Grid>
        </Grid>
            <BasicModal isEdit={true} open={openModal} close={handleCloseModal} data={{goalAmount, title, amount}}/>
            </>
    );
};

export default ProgressSaving;