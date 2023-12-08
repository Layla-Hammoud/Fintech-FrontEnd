// import { useCallback } from 'react';
// import { useRouter } from 'next/navigation';
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import useApi from "../../hooks/useApi";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const { apiCall } = useApi();
  const navigate = useNavigate();
const handlelogOut = async () =>{
  try {
     await apiCall({
     url: "/api/users/logout",
     method: "post",
   });
   toast.success("Logged out Successfully!")
   navigate('/')

 } catch (error) {
   console.log(error);


 }
}

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          USREName
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      >
        <MenuItem onClick={handlelogOut}>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
};