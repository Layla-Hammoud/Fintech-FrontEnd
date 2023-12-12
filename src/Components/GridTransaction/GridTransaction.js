import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import '../GridPromotion/GridPromotion.css'
import useApi from '../../hooks/useApi';
import TransactionModel from '../TransactionModel/TransactionModel'
import { Link } from 'react-router-dom'
import merchantImg from '../../Assets/Images/maker-mkr-logo.png'
import { AuthContext } from "../../Context/AuthContext";
// const { user, checkUser } = useContext(AuthContext);
//   const { fetchUserData } = useContext(AuthContext);
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
    GridToolbarFilterButton,

} from '@mui/x-data-grid';
import { FormControl, InputLabel, MenuItem, Select, Stack, Pagination } from '@mui/material'


import {
    randomCreatedDate,
    randomTraderName,
    randomId,
    randomArrayItem,
} from '@mui/x-data-grid-generator';
import { toast } from 'react-toastify';





// const initialRows = [
//     { id: 1, amountSent: 20, amountReceived: 30, type: 'transaction', status: 'completed', createdAt: '10-12-2023', updatedAt: '10-1-2024', sender: { id: 1, userName: 'Hadi' }, receiver: { id: 2, userName: 'AcitiveT' } },
//     { id: 2, amountSent: 0, amountReceived: 80, type: 'transfer', status: 'Pending', createdAt: '10-12-2023', updatedAt: '10-1-2024', sender: { id: 1, userName: 'Hadi' }, receiver: { id: 2, userName: 'AcitiveT' } },
//     { id: 3, amountSent: 0, amountReceived: 1000, type: 'transfer', status: 'completed', createdAt: '10-12-2023', updatedAt: '10-1-2024', sender: { id: 1, userName: 'Hadi' }, receiver: { id: 2, userName: 'AcitiveT' } },
//     { id: 4, amountSent: 20, amountReceived: 30, type: 'transaction', status: 'completed', createdAt: '10-12-2023', updatedAt: '10-1-2024', sender: { id: 1, userName: 'Hadi' }, receiver: { id: 2, userName: 'AcitiveT' } },
//     { id: 5, amountSent: 50, amountReceived: 30, type: 'transaction', status: 'canceled', createdAt: '10-12-2023', updatedAt: '10-1-2024', sender: { id: 1, userName: 'Hadi' }, receiver: { id: 2, userName: 'AcitiveT' } },
//     { id: 6, amountSent: 20, amountReceived: 30, type: 'transaction', status: 'completed', createdAt: '10-12-2023', updatedAt: '10-1-2024', sender: { id: 1, userName: 'Hadi' }, receiver: { id: 2, userName: 'AcitiveT' } },
//     { id: 7, amountSent: 80, amountReceived: 30, type: 'transaction', status: 'canceled', createdAt: '10-12-2023', updatedAt: '10-1-2024', sender: { id: 1, userName: 'Hadi' }, receiver: { id: 2, userName: 'AcitiveT' } },
//     { id: 8, amountSent: 5000, amountReceived: 0, type: 'deposit', status: 'completed', createdAt: '10-12-2023', updatedAt: '10-1-2024', sender: { id: 1, userName: 'Hadi' }, receiver: { id: 2, userName: 'AcitiveT' } },
// ];



function EditToolbar(props) {

    const { handleOpenModal } = props;
    const [sorting, setSorting] = React.useState('');


    return (
        <GridToolbarContainer sx={{
            display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems: 'center', color: 'gray', marginBottom: '12px',
            '@media(width<900px)': {
                display: 'flex', justifyContent: 'center'
            },
            '@media(width<500px)': {
                display: 'flex', alignItems: 'flex-start', flexDirection: 'column'
            },
        }}
        >
            {/* <Button color="primary" startIcon={<AddIcon />} sx={{ height: '40px', color: 'black' }} onClick={handleOpenModal}>
                <Link to='' style={{ color: 'black', textDecoration: 'none' }}> Create Transaction </Link>
            </Button> */}


            <FormControl
                sx={{
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                        borderColor: "#119c59",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#119c59",
                    },
                }}
            >
                <InputLabel id="promotionSorting">Get </InputLabel>
                <Select
                    labelId="promotionSorting"
                    id="promotionSorting"
                    value={sorting}
                    onChange={(event) => setSorting(event.target.value)}
                    style={{ marginLeft: '8px', width: '100px', height: '40px', color: 'black' }}
                >
                    <MenuItem value={"merchant"}>All</MenuItem>
                    <MenuItem value={"user"}>Recent</MenuItem>
                </Select>
            </FormControl>
            <GridToolbarFilterButton sx={{ height: '40px', color: 'black' }} />
        </GridToolbarContainer>
    );
}

export default function GridTransaction() {
    const [rows, setRows] = React.useState([]);
    const [loading, setLoading] = useState(true);
    const [rowModesModel, setRowModesModel] = React.useState({});
    const [page, setPage] = React.useState(1);
    const pageSize = 7; // Set the number of rows per page here
    const [openModal, setOpenModal] = React.useState(false);
    const [editedData, setEditedData] = useState({});
    const { apiCall } = useApi();

    // Calculate the total number of pages based on the page size
    const totalPages = Math.ceil(rows.length / pageSize);
    // Calculate the start and end indices for the current page
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const visibleRows = rows.slice(startIndex, endIndex);



    const handlePageChange = (event, value) => {
        setPage(value);
    };


    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await apiCall({
                    url: `/api/transactions/transactionForUser/9`, // Pass the page parameter to the backend
                    method: "get",
                  });
                  console.log(response)
                setRows(response.data)

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false)
            }

        };
        fetchTransactions();

    }, []);



    const handleSaveClick = (id, params) => async () => {
        try {
            // setEditedData({
            //     ...editedData,
            //     [params.id]: params.data,
            // });
            const updatedData = UpdatedData(id);
            console.log("Updated Data:", updatedData);

            await apiCall({
                url: `/api/transactions/edit-transaction`,
                method: "put",
                data: { id, ...updatedData },
            });

            setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    const handleDeleteClick = (id) => async () => {
        try {
            await apiCall({
                url: `/api/transactions/delete-transaction`,
                method: "delete",
                data: { id }
            });
            setRows(rows.filter((row) => row.id !== id));
        } catch (error) {
            toast.error("transaction completed can't be deleted")
        }
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    //function to update row values
    const UpdatedData = (id) => {
        console.log('editedd', editedData)
        const updatedRow = { ...rows.find((row) => row.id === id), ...editedData[id] };
        console.log('updated', updatedRow)
        return {

            status: updatedRow.status

        };
    };



    const handleRowEditStop = (params, event) => {
        console.log(params)
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            setEditedData({
                ...editedData,
                [params.id]: params.data,
            });
        }
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const columns = [
        {
            field: 'sender',
            headerName: 'Sender',
            width: 180,
            editable: true,
            renderCell: (params) => (
                <p>
                    {params.row.senderUsername}
                </p>
            ),
        },
        {
            field: 'receiver',
            headerName: 'Receiver',
            width: 180,
            editable: true,
            renderCell: (params) => (
                <p>
                    {params.row.receiverUsername}
                </p>
            ),
        },
        { field: 'amountSent', headerName: 'Amount sent', width: 200, editable: true },
        { field: 'amountReceived', headerName: 'Amount received', width: 200, align: 'left', headerAlign: 'left', editable: true, },
        { field: 'type', headerName: 'Type', headerAlign: 'left', type: 'number', align: 'left', width: 200, editable: true, },
        { field: 'status', headerAlign: 'left', type: 'Date', headerName: 'Status', width: 150, editable: true },
        {
            field: 'createdAt', headerAlign: 'left', type: 'Date', headerName: 'Sent At', width: 205, editable: true, renderCell: (params) => (
                <div>
                    {new Date(params.row.createdAt).toISOString().split('T')[0]}
                </div>)
        },
        {
            field: 'updatedAt', headerAlign: 'left', headerName: 'Updated At', type: 'Date', width: 200, editable: true, renderCell: (params) => (
                <div>
                    {new Date(params.row.updatedAt).toISOString().split('T')[0]}
                </div>)
        },
        {
            field: 'actions', headerAlign: 'left', align: 'left', type: 'actions', headerName: 'Actions', width: 200, cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon sx={{ color: 'green' }} />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon sx={{ color: 'red' }} />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        (loading) ? <div>loading.....</div>
            : <Box
                sx={{
                    display: 'block',
                    height: 650,
                    width: '80% ',
                    '& .actions': {
                        color: 'text.secondary',
                    },
                    '& .textPrimary': {
                        color: 'text.primary',
                    },
                    marginLeft: '130px',
                    marginTop: '120px',
                    '@media(width<500px)': {
                        marginLeft: 'auto',
                        marginRight: 'auto'

                    },
                    '& .MuiDataGrid-cell': {
                        border: 'none',
                        backgroundColor: '#FAFAFA',
                        marginTop: 1,
                    },
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: '#119C59',
                        color: 'white',
                        fontWeight: 'Bold',
                    }
                }}

            >

                <DataGrid
                    className='grid'
                    disableRowSelectionOnClick
                    rows={visibleRows}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    pagination
                    pageSize={pageSize}
                    rowsPerPageOptions={[pageSize]}
                    rowCount={rows.length}
                    page={page}
                    onPageChange={handlePageChange}
                    sx={{ border: 'none' }}
                    slots={{
                        toolbar: EditToolbar,
                    }}
                    slotProps={{
                        toolbar: { handleOpenModal },
                    }}

                />

                <Stack spacing={2} direction="row" justifyContent="flex-end" mt={2}>
                    <Pagination count={totalPages} page={page} onChange={handlePageChange} className='pagg' />
                </Stack>
                {/* <TransactionModel open={openModal} setOpen={handleCloseModal} merchant={rows} /> */}
            </Box>
    );
}
