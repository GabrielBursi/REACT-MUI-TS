import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material";
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
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

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
                    <Typography variant="button" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap"> 
                        
                        Salvar
                    </Typography>
                </Button>
            )}

            {mostrarBotaoSalvarSkeleton && (
                <Skeleton width={110} height={60}/>
            )}

            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharSkeleton && !smDown && !mdDown) && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>save</Icon>}
                    onClick={aoClicarEmSalvarEFechar}
                >
                    <Typography variant="button" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
                        
                        Salvar e Voltar
                    </Typography>
                </Button>
            )}

            {(mostrarBotaoSalvarEFecharSkeleton && !smDown && !mdDown) && (
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
                    <Typography variant="button" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap"> 
                        
                        Apagar
                    </Typography>
                </Button>
            )}

            {mostrarBotaoApagarSkeleton && (
                <Skeleton width={110} height={60}/>
            )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoSkeleton && !smDown) && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>add</Icon>}
                    onClick={aoClicarEmNovo}
                >
                    <Typography variant="button" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap"> 
                        
                        {textoBotaoNovo}
                    </Typography>
                </Button>
            )}

            {mostrarBotaoNovoSkeleton && (
                <Skeleton width={110} height={60}/>
            )}

            { 
                (
                    mostrarBotaoVoltar && (
                        mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar
                    )
                ) &&(
                    <Divider variant="middle" orientation="vertical"/>
                )
            }

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarSkeleton) && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>arrow_back</Icon>}
                    onClick={aoClicarEmVoltar}
                >
                    <Typography variant="button" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
                        
                        Voltar
                    </Typography>
                </Button>
            )}

            {mostrarBotaoVoltarSkeleton && (
                <Skeleton width={110} height={60}/>
            )}

        </Box>
    );
}

export default FerramentasDeDetalhe;