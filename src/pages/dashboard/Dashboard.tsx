import { BarraDeFerramentas } from '../../shared/components';
import {LayoutBase} from '../../shared/layouts';

function Dashboard() {
    return (
        <LayoutBase titulo='Página inicial' barraDeFerramentas={<BarraDeFerramentas mostrarInputBusca/>}>
            <span>childreb</span>
        </LayoutBase>
    );
}

export default Dashboard;