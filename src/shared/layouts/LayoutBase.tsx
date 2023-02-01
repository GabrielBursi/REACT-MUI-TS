import { Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { LayoutBaseProps } from "../../types/props";
import { UseDrawerContext } from "../contexts";

export default function LayoutBase({ children, titulo, barraDeFerramentas }: LayoutBaseProps) {

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    const { toggleDrawer } = UseDrawerContext()

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} display="flex" alignItems="center" gap={1}>

                {smDown && (
                    <IconButton onClick={toggleDrawer}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}

                <Typography 
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                    component="h1" 
                    whiteSpace="nowrap" 
                    overflow="ellipses"
                >
                    {titulo}
                </Typography>
            </Box>

            { barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </Box>
            )}

            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    );
}
