import { Avatar, Divider, Drawer,  Icon,  List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { Children } from '../../../types/props';

import { useAuthContext, UseDrawerContext, UseThemeContext } from '../../contexts/';
import ListItemLink from './ListItemLink';

function SideBar({children}: Children) {

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const { isDrawerOpen, toggleDrawer, drawerOptions } = UseDrawerContext()
    const { toggleTheme, themeName } = UseThemeContext()
    const { logout } = useAuthContext();

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
                    <Box>
                        <List component='nav'>
                            <ListItemButton onClick={toggleTheme}>
                                <ListItemIcon>
                                    <Icon>{themeName === 'light' ? 'dark' : 'light'}_mode</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Alterar tema" />
                            </ListItemButton>
                            <ListItemButton onClick={logout}>
                                <ListItemIcon>
                                    <Icon>logout</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Sair" />
                            </ListItemButton>
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