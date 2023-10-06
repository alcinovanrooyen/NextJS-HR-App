'use client';

import * as React from 'react';

import Submit from './submit';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Form() {
    const isEdit:boolean = false; // ToDo check passed down props to set this.
    let [open, setOpen] = React.useState(false)

    const [manager, setManager] = React.useState('');

    const handleManagerChange = (event: SelectChangeEvent) => {
        setManager(event.target.value as string);
    };

    const [status, setStatus] = React.useState('active');

    const handleStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
    };

    const handleClose = function () {
        setOpen(false);
    }

    async function onSubmit(formData: FormData) {
        const response = await Submit(formData);
        console.log(response);
        setOpen(true);
    }

    return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
            <Snackbar 
                open={open} 
                autoHideDuration={6000} 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                onClose={handleClose}>
                <Alert severity="success" sx={{ width: '100%' }}>
                 Record added successfully!
                </Alert>
            </Snackbar>

            <Box
              component="form"
              sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                  backgroundColor: "primary.light",
                  padding: "50px",
                  width: "70%"
              }}
              noValidate
              autoComplete="off"
              action={onSubmit}
            >

                    <div>
                        <TextField
                          label="Name"
                          placeholder="John"
                          size="small"
                          type="text"
                          name="name"
                          required
                        />
                    </div>
                    <div>
                        <TextField
                          label="Surname"
                          placeholder="Doe"
                          size="small"
                          type="text"
                          name="surname"
                          required
                        />
                    </div>
                    <div>
                        <TextField
                          label="Telephone"
                          placeholder="eg. 0821111111"
                          size="small"
                          type="text"
                          name="telephone"
                          required
                        />
                    </div>
                    <div>
                        <TextField
                          label="Email Address"
                          placeholder="eg. test@test.com"
                          size="small"
                          type="text"
                          name="email"
                          required
                        />
                    </div>
                    <div>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }} size="small">
                            <InputLabel>Manager</InputLabel>
                            <Select
                              value={manager}
                              label="Manager"
                              name="manager"
                              onChange={handleManagerChange}
                            >
                                <MenuItem value="yes">Yes</MenuItem>
                                <MenuItem value="no">No</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 250, display: isEdit ? 'block': 'none'}} size="small">
                            <InputLabel>Status</InputLabel>
                            <Select
                            value={status}
                            label="Statusr"
                            name="status"
                            onChange={handleStatusChange}
                            >
                                <MenuItem value="active">Active</MenuItem>
                                <MenuItem value="inactive">Inactive</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Toolbar sx={{position:"relative"}}>
                        <Button sx={{position:"absolute", right: 0}} variant="contained" type="submit">Submit</Button>
                    </Toolbar>
            </Box>
        </Grid>
    )
}