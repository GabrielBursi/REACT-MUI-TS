import { Icon, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

import { ListItemLinkProps } from '../../../types/props';

function ListItemLink({icon, label, to, onClick}: ListItemLinkProps) {
    
    const navigate = useNavigate()
    const resolvedPath = useResolvedPath(to)
    const match = useMatch({path: resolvedPath.pathname, end: true})

    function handleClick(){
        navigate(to)
        onClick?.()
    }

    return (
        <ListItemButton  selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
}

export default ListItemLink;