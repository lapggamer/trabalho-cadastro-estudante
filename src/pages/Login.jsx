import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
    useEffect(() => { document.title = "Login" });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados enviados:", { email, password });

        setTimeout(() => {
            navigate("/dashboard");
        }, 1000);
    };

    
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#799cd4"
        }}>
            <div style={{
                padding: 50,
                border: "solid 10px black",
                fontFamily: "Arial",
                backgroundColor: "lightgray",
                borderRadius: 10,
                width: "400px"
            }}>
                <h1 style={{ textAlign: "center" }}>Faça Login</h1>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="email">Insira seu e-mail</label><br />
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                            style={{ width: "100%", marginBottom: 10, padding: 5, border: "none", borderRadius: 5 }} />
                    </div>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="password">Insira sua senha</label><br />
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                            style={{ width: "100%", marginBottom: 10, padding: 5, border: "none", borderRadius: 5 }} />
                    </div>
                    <Link to="/esqueceu-senha">Esqueceu sua senha?</Link>
                    <button type="submit" style={{ color: "white", backgroundColor: "blue",
                        padding: "10px 20px", borderRadius: 5, marginTop: 10, border: "none", cursor: "pointer" }}>Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;