import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { Children } from '../../../types';

function SideBar({children}: Children) {

    const theme = useTheme()

    return (
        <>
            <Drawer variant='permanent'>
                <Box height='100vh' width={theme.spacing(28)} display='flex' flexDirection='column'>
                    
                    <Box 
                        height={theme.spacing(20)} 
                        width='100%' 
                        display='flex' 
                        alignItems='center' 
                        justifyContent='center'
                    >
                        <Avatar src = '' sx={{ height: theme.spacing(12), width: theme.spacing(12) }}/>
                    </Box>

                    <Divider/>

                    <Box flex={1}>
                        <List component='nav'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>    
                                </ListItemIcon>
                                <ListItemText primary='Página inicial'/>
                            </ListItemButton>
                        </List>
                    </Box>

                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}

export default SideBar;