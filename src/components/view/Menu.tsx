import { Link } from "react-router-dom";
import '../../assets/css/Menu.css';

export function Menu() {
    return (
        <nav className="menu-container">
            <ul className="menu-list">
                <li className="menu-item">
                    <Link to="/home" className="menu-link">
                        Inicio
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/formulario" className="menu-link">
                        Cadastro de Jogadores
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/consulta" className="menu-link">
                        Consulta Quina
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/logout" className="menu-link">
                        Sair
                    </Link>
                </li>
            </ul>
        </nav>
    );

}