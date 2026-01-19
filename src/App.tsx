import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import {Formulario} from "./components/view/Formulario.tsx";
import {Home} from "./components/view/Home.tsx";
import {ConsultaQuina} from "./components/view/ConsultaQuina.tsx";
import {Menu} from "./components/view/Menu.tsx";
import {Login} from "./components/view/Login.tsx";
import './App.css'
import {LogOut} from "./components/view/LogOut.tsx";

const PrivateRoute = () => {
    const isAutshenticated = !!localStorage.getItem('token');
    return isAutshenticated ? (
        <>
            <Menu/>
            <Outlet/>
        </>
        ) : (<Navigate to="/login" replace/>);
};

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/formulario" element={<Formulario/>}/>
                        <Route path="/consulta" element={<ConsultaQuina/>}/>
                        <Route path="/logout" element={<LogOut/>}/>
                    </Route>
                    <Route path={"*"} element={<Navigate to="/login" replace/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App
