import { FerramentasDaListagem } from '../../shared/components';
import {LayoutBase} from '../../shared/layouts';

function Dashboard() {
    return (
        <LayoutBase titulo='Página inicial' barraDeFerramentas={<FerramentasDaListagem mostrarInputBusca/>}>
            <span>childreb</span>
        </LayoutBase>
    );
}

export default Dashboard;