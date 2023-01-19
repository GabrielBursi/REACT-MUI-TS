import { FerramentasDeDetalhe } from '../../shared/components';
import {LayoutBase} from '../../shared/layouts';

function Dashboard() {
    return (
        <LayoutBase titulo='Página inicial' barraDeFerramentas={<FerramentasDeDetalhe mostrarBotaoSalvarEFechar mostrarBotaoSalvarEFecharSkeleton />}>
            <span>childreb</span>
        </LayoutBase>
    );
}

export default Dashboard;