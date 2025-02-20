import { useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    useEffect(() => { document.title = "Dashboard" });

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: "50px" }}>
            <h1>Bem-vindo ao Dashboard</h1>
            <nav style={{ marginTop: "20px" }}>
                <Link to="/cadastro-estudante" style={{ textDecoration: "none", color: "white", marginInline: 10,
                    backgroundColor: "#ba1a2d", padding: "10px 20px", borderRadius: 5 }}>Cadastrar Novo Estudante</Link>
                <Link to="/cadastro-curso" style={{ textDecoration: "none", color: "white", marginInline: 10,
                    backgroundColor: "#16b82e", padding: "10px 20px", borderRadius: 5 }}>Curso</Link>
            </nav>
        </div>
    );
}

export default Dashboard;