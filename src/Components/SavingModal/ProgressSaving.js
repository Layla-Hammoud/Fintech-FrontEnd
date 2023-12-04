import React from "react";
import { Grid, Typography, LinearProgress, Icon } from "@mui/material";
import { green } from "@mui/material/colors";

const ProgressSaving = ({goalAmount, title, amount}) =>{
    return(
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
                <Typography >
                    {amount} <Icon sx={{ color: green[500], display: "inline-block" }}>+</Icon>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ProgressSaving;