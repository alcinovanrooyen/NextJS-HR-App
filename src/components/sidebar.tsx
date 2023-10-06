"use client";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';

import { useRouter } from 'next/navigation';

const drawerWidth = 240;

let router;

function goToDept(): void {
    router.push('/department/list');
}

function goToEmp(): void {
    router.push('/employee/list');
}

export default function Sidebar() {
    router = useRouter();

    return (
        <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
              <List>
                {['Employees', 'Departments'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton onClick={ index % 2 === 0 ? goToEmp : goToDept }>
                      <ListItemIcon>
                        {index % 2 === 0 ? <EngineeringIcon /> : <BusinessIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
        </Drawer>
    )
}