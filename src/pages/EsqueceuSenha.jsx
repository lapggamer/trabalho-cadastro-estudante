import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EsqueceuSenha() {
    useEffect(() => { document.title = "Esqueceu Senha" });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("As senhas não coincidem!");
            return;
        }
        setError("");

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
                <h1 style={{ textAlign: "center" }}>Esqueceu sua senha</h1>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="email">Insira seu e-mail</label><br />
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                            style={{ width: "100%", marginBottom: 10, padding: 5, border: "none", borderRadius: 5 }} />
                    </div>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="password">Insira sua nova senha</label><br />
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                            style={{ width: "100%", marginBottom: 10, padding: 5, border: "none", borderRadius: 5 }} />
                    </div>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="confirmPassword">Confirme sua senha</label><br />
                        <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            style={{ width: "100%", marginBottom: 10, padding: 5, border: "none", borderRadius: 5 }} />
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button type="submit" style={{ color: "white", backgroundColor: "blue",
                        padding: "10px 20px", borderRadius: 5, marginTop: 10, border: "none", cursor: "pointer" }}>Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default EsqueceuSenha;