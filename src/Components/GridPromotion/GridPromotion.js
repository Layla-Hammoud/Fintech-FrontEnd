import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridToolbarFilterButton,

} from '@mui/x-data-grid';
import {  MenuItem,Select} from '@mui/material'

import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';


const initialRows = [
    {id:1,name:'promotion1',description:'Benefit now from a promotion over 20%',amount:20,startDate:'10-12-2023',endDate:'10-1-2024'},
    {id:2,name:'promotion3',description:'Benefit now from a promotion over 20%',amount:20,startDate:'10-12-2023',endDate:'10-1-2024'},
    {id:3,name:'promotion4',description:'Benefit now from a promotion over 20%',amount:20,startDate:'10-12-2023',endDate:'10-1-2024'},
    {id:4,name:'promotion5',description:'Benefit now from a promotion over 20%',amount:20,startDate:'10-12-2023',endDate:'10-1-2024'},
    {id:5,name:'promotion6',description:'Benefit now from a promotion over 20%',amount:20,startDate:'10-12-2023',endDate:'10-1-2024'},
    {id:6,name:'promotion7',description:'Benefit now from a promotion over 20%',amount:20,startDate:'10-12-2023',endDate:'10-1-2024'},
    {id:6,name:'promotion8',description:'Benefit now from a promotion over 20%',amount:20,startDate:'10-12-2023',endDate:'10-1-2024'},
    {id:6,name:'promotion9',description:'Benefit now from a promotion over 20%',amount:20,startDate:'10-12-2023',endDate:'10-1-2024'},
    ];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
  const [sorting, setSorting] = React.useState('');

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));



  };

  return (
    <GridToolbarContainer sx={{display:'flex',justifyContent:'flex-end',width:'100%',alignItems:'center',
    '@media(width<900px)':{
      display:'flex',justifyContent:'center'
    },
    '@media(width<300px)':{
      display:'flex',justifyContent:'flex-start'
    },
    }}>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick} sx={{height:'40px'}}>
        Add promotion
      </Button>
      <Select labelId='sortingPromotion' value={sorting} style={{ marginLeft: '8px' ,width:'80px',height:'40px'}}
        onChange={(event) => setSorting(event.target.value)}
      >
        <MenuItem value="" disabled>
          sorted by
        </MenuItem>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Recent">Recent</MenuItem>
      </Select>
      <GridToolbarFilterButton sx={{height:'40px'}}/>
    </GridToolbarContainer>
  );
}

export default function GridPromotion() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
 


  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
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

  const columns = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Discount',
      type: 'number',
      width: 180,
      editable: true,
    },
    {
      field: 'startDate',
      type:'Date',
      headerName: 'Start Date',
      width: 220,
      editable: true,
    },
    {
        field: 'endDate',
        headerName: 'End Date',
      type:'Date',
        width: 220,
        editable: true,
      },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
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
            icon={<EditIcon sx={{color:'green'}}/>}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon  sx={{color:'red'}} />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        display:'block',
        height: 650,
        width: '80% ',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
       marginLeft:'130px',
       marginTop:'120px',
      '& .MuiDataGrid-cell':{
        border:'none',
        backgroundColor:'#FAFAFA',
        marginTop:1,
    },
    '& .MuiDataGrid-columnHeader':{
      backgroundColor:'#119C59',
      color:'white',
      fontWeight:'Bold'
    }
      }}

    >
  
      <DataGrid
      className='grid'
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}

        sx={{border:'none',}}
      />
    </Box>
  );
}
