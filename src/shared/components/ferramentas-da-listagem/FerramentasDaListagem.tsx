import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

import { FerramentasDaListagemProps } from "../../../types";
import { Environment } from "../../environments";

function FerramentasDaListagem({ 
    aoMudarTextoDeBusca, 
    mostrarInputBusca = false, 
    textoDaBusca = '', 
    aoClicarEmNovo, 
    mostrarBotaoNovo = true, 
    textoBotaoNovo = 'Novo' 
}: FerramentasDaListagemProps) {

    const theme = useTheme()
    
    return (
        <Box
            component={Paper}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
            gap={1}
            marginX={2}
            padding={1}
            paddingX={2}
        >
            {mostrarInputBusca && (
                <TextField
                    size="small"
                    placeholder={Environment.INPUT_DE_BUSCA}
                    value={textoDaBusca}
                    onChange={e => aoMudarTextoDeBusca?.(e.target.value)}
                />
            )}
            <Box flex={1} display="flex" justifyContent="flex-end">
                { mostrarBotaoNovo && (
                    <Button
                        color="primary"
                        disableElevation
                        variant="contained"
                        onClick={aoClicarEmNovo}
                        endIcon={<Icon>add</Icon>}
                    >
                        {textoBotaoNovo}
                    </Button>
                )}
            </Box>
        </Box>
    );
}

export default FerramentasDaListagem;