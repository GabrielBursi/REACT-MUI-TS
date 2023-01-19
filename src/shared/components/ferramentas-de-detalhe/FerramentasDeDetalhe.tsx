import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material";
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

    mostrarBotaoApagarSkeleton = false,
    mostrarBotaoNovoSkeleton = false,
    mostrarBotaoSalvarSkeleton = false,
    mostrarBotaoVoltarSkeleton = false,
    mostrarBotaoSalvarEFecharSkeleton = false,
    
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
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarSkeleton ) && (
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

            {mostrarBotaoSalvarSkeleton && (
                <Skeleton width={110} height={60}/>
            )}

            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharSkeleton ) && (
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

            {mostrarBotaoSalvarEFecharSkeleton && (
                <Skeleton width={180} height={60}/>
            )}

            {(mostrarBotaoApagar && !mostrarBotaoApagarSkeleton) && (
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

            {mostrarBotaoApagarSkeleton && (
                <Skeleton width={110} height={60}/>
            )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoSkeleton) && (
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

            {mostrarBotaoNovoSkeleton && (
                <Skeleton width={110} height={60}/>
            )}

            <Divider variant="middle" orientation="vertical"/>

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarSkeleton) && (
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

            {mostrarBotaoVoltarSkeleton && (
                <Skeleton width={110} height={60}/>
            )}

        </Box>
    );
}

export default FerramentasDeDetalhe;