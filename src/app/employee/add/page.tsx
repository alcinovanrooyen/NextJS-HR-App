"use client";

import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Toolbar from '@mui/material/Toolbar';
import { useRouter } from 'next/navigation'

let router;
function goBack () {
    router.push('/employee/list')
}
import Form from './form';

export default function EmployeeAdd() {
    router = useRouter();
    return (
        <div>
            <h2>Create / Edit Employee</h2>
            <Toolbar
                sx={{
                    positin: "relative"
                }}

            >
                <Fab sx={{
                        position: "absolute",
                        right:0,
                        backgroundColor: "grey.300"
                    }}
                    onClick={ goBack } 
                    aria-label="add"
                >
                    <ArrowBackIcon />
                </Fab>
            </Toolbar>
            <Form />
        </div>
    )    
}