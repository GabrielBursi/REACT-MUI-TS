export type FerramentasDeDetalheProps = {
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    mostrarBotaoNovoSkeleton?: boolean;
    mostrarBotaoVoltarSkeleton?: boolean;
    mostrarBotaoApagarSkeleton?: boolean;
    mostrarBotaoSalvarSkeleton?: boolean;
    mostrarBotaoSalvarEFecharSkeleton?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void
    aoClicarEmSalvar?: () => void
    aoClicarEmSalvarEFechar?: () => void;
}