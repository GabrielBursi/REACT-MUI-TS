import { Avatar, Divider, Drawer,  List, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { Children } from '../../../types';

import { UseDrawerContext } from '../../contexts/';
import ListItemLink from './ListItemLink';

function SideBar({children}: Children) {

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const { isDrawerOpen, toggleDrawer, drawerOptions } = UseDrawerContext()

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawer}>
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
                            {drawerOptions.map(option => (
                                <ListItemLink 
                                    key={option.path}
                                    icon={option.icon} 
                                    label={option.label} 
                                    to={option.path}
                                    onClick={smDown ? toggleDrawer : undefined}
                                />
                            ))}
                        </List>
                    </Box>

                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}

export default SideBar;