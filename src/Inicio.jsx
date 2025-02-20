import { Link } from "react-router-dom";
import { useEffect } from "react";

function Inicio() {
    useEffect(() => { document.title = "Inicio" });

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: "50px" }}>
            <h1>Bem-Vindo ao nosso site!</h1>
            <nav style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
                <Link to="/cadastro" style={{ textDecoration: "none", color: "white",
                    backgroundColor: "#007bff", padding: "10px 20px", borderRadius: "5px" }}>Cadastro</Link>
                <Link to="/login" style={{ textDecoration: "none", color: "white",
                    backgroundColor: "#28a745", padding: "10px 20px", borderRadius: "5px" }}>Login</Link>
            </nav>
        </div>
    );
}

export default Inicio;