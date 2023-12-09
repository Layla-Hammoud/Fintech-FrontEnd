import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, MenuItem, Select } from '@mui/material';
import './TransactionTable.css'
import useApi from '../../hooks/useApi'

function TransactionTable() {
    //data  istead of id should  userName (population)
    // const dataTransactions = [
    //     { id: 1, amountSent: 100, amountReceived: 90, type: 'transaction', status: 'completed', senderId: 1, receiverId: 2 },
    //     { id: 2, amountSent: 400, amountReceived: 400, type: 'transaction', status: 'canceled', senderId: 1, receiverId: 2 },
    //     { id: 3, amountSent: 500, amountReceived: 600, type: 'transaction', status: 'pending', senderId: 1, receiverId: 2 },
    //     { id: 4, amountSent: 600, amountReceived: 600, type: 'transaction', status: 'completed', senderId: 1, receiverId: 2 },
    //     { id: 5, amountSent: 600, amountReceived: 600, type: 'transaction', status: 'completed', senderId: 1, receiverId: 2 },
    //     { id: 6, amountSent: 600, amountReceived: 600, type: 'transaction', status: 'canceled', senderId: 1, receiverId: 2 },
    //     { id: 7, amountSent: 600, amountReceived: 600, type: 'transaction', status: 'completed', senderId: 1, receiverId: 2 },
    //     { id: 8, amountSent: 600, amountReceived: 600, type: 'transaction', status: 'pending', senderId: 1, receiverId: 2 },


    // ];


    const { apiCall } = useApi();
    const fetching = async () => {


        try {
            const data = await apiCall({
                url: '/transactions/transactionForUser',
                method: 'GET',
                data: { id: 1 }
            })
            if (data !== null) {
                console.log(data);
                setDataTransactions(data)
                setStill(true)
            }

        }
        catch (error) {
            console.log(error)
        }
    }
    const [dataTransactions, setDataTransactions] = useState([]);
    const [still, setStill] = useState(false);
    const [activeOption, setActiveOption] = useState('All');
    const [page, setPage] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    useEffect(() => {
        fetching();

    }, [dataTransactions])


    //handel options for filtring data
    const handelOption = (option) => {
        setActiveOption(option);

    };


    //change style according to the window width
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    //add style to the status column according to the value 
    const makeStyle = (status) => {
        if (status === 'completed') {
            return {
                color: 'green',
            }
        }
        else if (status === 'pending') {
            return {
                color: 'gray',
            }
        }
        else {
            return {
                color: 'red',
            }
        }
    }


    let style1 = { backgroundColor: '#119C59', borderRadius: 1, p: 1, color: 'white', width: 70, textAlign: "center" };
    let style2 = { borderRadius: 5, p: 1, width: 60, textAlign: "center" };




    //still sorting according to the option// 
    return (
        (still) ? <div style={{ width: '100%', border: '1px solid #D9D9D9', padding: '20px' }}>
            <Box className="Box" display='flex' justifyContent='space-between' sx={{ width: '100%', marginBottom: 5 }}>
                <Typography className='tableTitle' variant='h5' sx={{ fontWeight: 'bold', fontSize: '22px' }}>Transaction Confirmation</Typography>
                {(windowWidth >= 675) ? <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 300 }}>
                    <Typography onClick={() => handelOption('All')} sx={activeOption === 'All' ? style1 : style2} >All</Typography>
                    <Typography onClick={() => handelOption('Monthly')} sx={activeOption === 'Monthly' ? style1 : style2} >Monthly</Typography>
                    <Typography onClick={() => handelOption('Weekly')} sx={activeOption === 'Weekly' ? style1 : style2} >Weekly</Typography>
                    <Typography onClick={() => handelOption('Today')} sx={activeOption === 'Today' ? style1 : style2}>Today</Typography>

                </Box> :
                    <Select
                        labelId="filtering"
                        value={activeOption}
                        onChange={(event) => setActiveOption(event.target.value)}
                    >
                        <MenuItem value={'All'}>All</MenuItem>
                        <MenuItem value={'monthly'}>Monthly</MenuItem>
                        <MenuItem value={'weekly'}>Weekly</MenuItem>
                        <MenuItem value={'Today'}>Today</MenuItem>

                    </Select>
                }

            </Box>
            <TableContainer component={Paper} className='Table' sx={{ width: '100%', margin: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Amount Sent</TableCell>
                            <TableCell>Amount Received</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Sender ID</TableCell>
                            <TableCell>Receiver ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataTransactions.slice(page * 7, page * 7 + 7).map((row) => (
                            <TableRow key={row.id} sx={{ "&: -child td": { border: 0, background: 'red' } }}>
                                <TableCell>{row.amountSent}</TableCell>
                                <TableCell>{row.amountReceived}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell > <span className="status" style={makeStyle(row.status)} >{row.status}</span></TableCell>
                                <TableCell>{row.senderId}</TableCell>
                                <TableCell>{row.receiverId}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[7]}
                component="div"
                count={dataTransactions.length}
                rowsPerPage={4}
                page={page}
                onPageChange={handleChangePage}
            />
        </div>
            : <div>No data yet</div>
    )
}

export default TransactionTable;
