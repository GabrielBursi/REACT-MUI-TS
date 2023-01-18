import { Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { LayoutBaseProps } from "../../types";
import { UseDrawerContext } from "../contexts";

export default function LayoutBase({ children, titulo }: LayoutBaseProps) {

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const { toggleDrawer } = UseDrawerContext()

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} height={theme.spacing(12)} display="flex" alignItems="center" gap={1}>

                {smDown && (
                    <IconButton onClick={toggleDrawer}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}

                <Typography variant="h5" component="h1">
                    {titulo}
                </Typography>
            </Box>
            <Box>
                Barra de ferramentas
            </Box>

            <Box>
                {children}
            </Box>
        </Box>
    );
}
