"use client";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { useRouter } from 'next/navigation'

import DataTable from './table';

let router;
function goToAdd () {
    router.push('/employee/add')
}

export default function EmployeeList() {
    router = useRouter();
    return (
        <div>
            <h2>Employees</h2>
            <Toolbar
                sx={{
                    positin: "relative"
                }}
            >
                <Fab sx={{
                        position: "absolute",
                        right:0,
                    }}
                    onClick={ goToAdd } 
                    color="primary" 
                    aria-label="add"
                >
                    <AddIcon />
                </Fab>
            </Toolbar>

            <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
            <Box
              sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                  backgroundColor: "primary.light",
                  padding: "50px",
                  width: "70%"
              }}
            >
                <DataTable />
            </Box>
        </Grid>
            
        </div>
    )
}