import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";
import { FerramentasDeDetalheProps } from "../../../types";

function FerramentasDeDetalhe({
    textoBotaoNovo = "Novo",

    aoClicarEmApagar,
    aoClicarEmNovo,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,
    aoClicarEmVoltar,

    mostrarBotaoApagar = true,
    mostrarBotaoNovo = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoSalvarEFechar = false,
    
}: FerramentasDeDetalheProps) {

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
            {mostrarBotaoSalvar && (
                <Button
                    color="primary"
                    disableElevation
                    variant="contained"
                    startIcon={<Icon>save</Icon>}
                    onClick={aoClicarEmSalvar}
                >
                    Salvar
                </Button>
            )}
            {mostrarBotaoSalvarEFechar && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>save</Icon>}
                    onClick={aoClicarEmSalvarEFechar}
                >
                    Salvar e Voltar
                </Button>
            )}
            {mostrarBotaoApagar && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>delete</Icon>}
                    onClick={aoClicarEmApagar}
                >
                    Apagar
                </Button>
            )}
            {mostrarBotaoNovo && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>add</Icon>}
                    onClick={aoClicarEmNovo}
                >
                    {textoBotaoNovo}
                </Button>
            )}

            <Divider variant="middle" orientation="vertical"/>

            {mostrarBotaoVoltar && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>arrow_back</Icon>}
                    onClick={aoClicarEmVoltar}
                >
                    Voltar
                </Button>
            )}
        </Box>
    );
}

export default FerramentasDeDetalhe;