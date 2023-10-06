'use client';

import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import getRows from './rows';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'First name', width: 90 },
  { field: 'surname', headerName: 'Last name', width: 130 },
  {
    field: 'telephone',
    headerName: 'Telephone',
    width: 160,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 160,
  },
  {
    field: 'manager',
    headerName: 'Manager',
    width: 70,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 70,
  },
];

interface Employee {
    _id: string;
    id: string;
    name: string;
    surname: string;
    telephone: string;
    email: string;
    manager: string;
    status: string;
}

let rows:[Employee];

export default function DataTable() {
    const [rows, setRows] = React.useState([{
        id: '',
        name: '',
        surname: '',
        telephone: '',
        email: '',
        manager: '',
        status: ''
    }]);

    React.useEffect(() =>{
        async function fetchRows() {
            const data = await getRows();
            data.shift();
            setRows(data.map( _ => ({ id: _._id, ..._ }) ));
        }
        fetchRows();
    },[]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}