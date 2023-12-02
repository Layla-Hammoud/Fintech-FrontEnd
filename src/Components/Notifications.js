import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
// import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import Avatar from '@mui/material/Avatar';
// import { fToNow } from '../utils/format-time';
import NotificationsNone from '@mui/icons-material/NotificationsNone'
import NotificationItem from './NotificationItem';
import io from 'socket.io-client'; // Import the socket.io-client library

// Mockup data for notifications
const NOTIFICATIONS = [
  { title: 'transfer complete', message: 'the transfer is succ received by Y.' },
  { title: 'transaction canceled', message: 'the tansaction is not accepted by merchent X .' },
  { title: 'transaction canceled', message: 'the tansaction is not accepted by merchent X .' },
  { title: 'transaction canceled', message: 'the tansaction is not accepted by merchent X .' },
  { title: 'transaction canceled', message: 'the tansaction is not accepted by merchent X .' }
];

// Socket setup
const socket = io('http://localhost:3001'); // Replace with your actual server URL

const Notifications = () => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // useEffect(() => {
  //   // Listen for incoming notifications
  //   socket.on('notification', (notification) => {
  //     // Update notifications when a new one is received
  //     setNotifications((prevNotifications) => [notification, ...prevNotifications]);
  //   });

  //   // Clean up socket connection when component unmounts
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  const handleButtonClick = (event) => {
    if (popoverOpen) {
      setPopoverOpen(false);
      setAnchorEl(null);
    } else {
      setPopoverOpen(true);
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setPopoverOpen(false);
    setAnchorEl(null);
  };

  // const handleMarkAllAsRead = () => {
  //   setNotifications(
  //     notifications.map((notification) => ({
  //       ...notification,
  //       isUnRead: false,
  //     }))
  //   );
  // };

  return (
    <>
      <IconButton color={popoverOpen ? 'primary' : 'default'} onClick={handleButtonClick}>
        <Badge badgeContent={totalUnRead} color="error">
          <NotificationsNone />
        </Badge>
      </IconButton>

      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.75,
            width: 360,
            height: 500,
            overflowY: 'scroll'
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              You have {totalUnRead} unread messages
            </Typography>
          </Box>


          {/* {totalUnRead > 0 && (
            <Button color="primary" onClick={handleMarkAllAsRead}>
              Mark All as Read
            </Button>
          )} */}
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {notifications.map((notification) => (
          <Box sx={{ display: 'flex', flexDirection: 'column', OverflowY: 'scroll' }}>
            <NotificationItem key={notification.id} notification={notification} />
            <Divider />
          </Box>
        ))}
        <Divider sx={{ borderStyle: 'double' }} />

      </Popover>

    </>
  );
};



export default Notifications;
