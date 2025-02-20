import { useEffect, useState } from "react";

function CadastroEstudante({ onAdd }) {
    useEffect(() => { document.title = "Cadastro do Estudante" });

    const [form, setForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        dataNascimento: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name == "telefone") {
            setForm({ ...form, [name]: formatarTelefone(value )});
        } else {
            setForm({ ...form, [name] : value });
        }
    };

    const formatarTelefone = (numero) => {
        numero = numero.replace(/\D/g, "");
        numero = numero.replace(/^(\d{2})(\d)/g, "($1) $2");
        numero = numero.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
        return numero;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(form);
        console.log("Dados cadastrados:", form);
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75vh",
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
                <h1 style={{ textAlign: "center" }}>Cadastro de Estudante</h1>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="nome">Insira seu nome completo</label><br />
                        <input type="text" name="nome" onChange={handleChange} required
                            style={{ width: "100%", marginBottom: 10, padding: 5, border: "none", borderRadius: 5 }} />
                    </div>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="email">Insira seu e-mail</label><br />
                        <input type="email" name="email" onChange={handleChange} required
                            style={{ width: "100%", marginBottom: 10, padding: 5, border: "none", borderRadius: 5 }} />
                    </div>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="telefone">Insira seu telefone</label><br />
                        <input type="tel" name="telefone" onChange={handleChange} required
                            style={{ width: "100%", marginBottom: 10, padding: 5, border: "none", borderRadius: 5 }} />
                    </div>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="dataNascimento">Insira sua data de nascimento</label><br />
                        <input type="date" name="dataNascimento" onChange={handleChange} required />
                    </div>
                    <button type="submit" style={{ color: "white", backgroundColor: "blue",
                        padding: "10px 20px", borderRadius: 5, border: "none", marginTop: 10, cursor: "pointer" }}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

const formatarData = (data) => {
    if (!data) return "";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
};

function ListaEstudantes({ estudantes, onEdit, onDelete }) {
    return (
        <div style={{ fontFamily: "Arial" }}>
            <h1>Lista de Estudantes</h1>
            <ul>
                {estudantes.map((estudante, index) => (
                    <li key={index}>
                        {estudante.nome} - {estudante.email} - {estudante.telefone} - {formatarData(estudante.dataNascimento)}
                        <button onClick={() => onEdit(index)} style={{ marginLeft: 10, color: "white",
                            backgroundColor: "green", padding: 10, borderRadius: 10, border: "none", cursor: "pointer" }}>Editar</button>
                        <button onClick={() => onDelete(index)} style={{ marginLeft: 10, color: "white",
                            backgroundColor: "red", padding: 10, borderRadius: 10, border: "none", cursor: "pointer" }}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function GestaoEstudantes() {
    const [estudantes, setEstudantes] = useState([]);

    const addEstudante = (novoEstudante) => {
        setEstudantes([...estudantes, novoEstudante]);
    };

    const editEstudante = (index) => {
        const novoNome = prompt("Novo nome:", estudantes[index].nome);
        if (novoNome) {
            const novosEstudantes = [...estudantes];
            novosEstudantes[index].nome = novoNome;
            setEstudantes(novosEstudantes);
        }
    };

    const deleteEstudante = (index) => {
        setEstudantes(estudantes.filter((_, i) => i !== index));
    };

    return (
        <div>
            <CadastroEstudante onAdd={addEstudante} />
            <ListaEstudantes estudantes={estudantes} onEdit={editEstudante} onDelete={deleteEstudante} />
        </div>
    );
}

export default GestaoEstudantes;