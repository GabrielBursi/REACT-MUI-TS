import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

function FerramentasDeDetalhe() {

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
            <Button
                color="primary"
                disableElevation
                variant="contained"
                startIcon={<Icon>save</Icon>}
            >
                Salvar
            </Button>
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>save</Icon>}
            >
                Salvar e Voltar
            </Button>
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>delete</Icon>}
            >
                Apagar
            </Button>
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>add</Icon>}
            >
                Novo
            </Button>

            <Divider variant="middle" orientation="vertical"/>

            <Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>arrow_back</Icon>}
            >
                Voltar
            </Button>
        </Box>
    );
}

export default FerramentasDeDetalhe;