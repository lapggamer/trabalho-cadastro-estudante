import { useEffect, useState } from "react";

function CadastroCurso({ onAdd }) {
    useEffect(() => { document.title = "Cadastro do Curso"; });

    const [form, setForm] = useState({
        nome: "",
        descricao: "",
        dataInicio: "",
        dataFinal: "",
        maxAlunos: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (new Date(form.dataInicio) >= new Date(form.dataFinal)) {
            alert("A data final deve ser maior que a data de início!");
            return;
        }
        onAdd({ ...form, dataInicio: new Date(form.dataInicio).toISOString(), dataFinal: new Date(form.dataFinal).toISOString() });
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
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
                <h1 style={{ textAlign: "center" }}>Cadastro de curso</h1>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="nome">Insira o curso</label><br />
                        <input type="text" name="nome" onChange={handleChange} required
                            style={{ width: "100%", marginBottom: 10, padding: 5, border: "none", borderRadius: 5 }} />
                    </div>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="descricao">Insira a descrição do curso</label><br />
                        <input type="text" name="descricao" onChange={handleChange} required
                            style={{ width: "100%", marginBottom: 10, padding: 5, border: "none", borderRadius: 5 }} />
                    </div>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="dataInicio">Insira a data de início do curso</label><br />
                        <input type="date" name="dataInicio" onChange={handleChange} required />
                    </div>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="dataFinal">Insira a data final do curso</label><br />
                        <input type="date" name="dataFinal" onChange={handleChange} required />
                    </div>
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <label htmlFor="maxAlunos">Número máximo de alunos</label><br />
                        <input type="number" name="maxAlunos" onChange={handleChange} required
                            style={{ width: "100%", marginBottom: 10, padding: 5, border: "none", borderRadius: 5 }} />
                    </div>
                    <button type="submit" style={{
                        color: "white", backgroundColor: "blue",
                        padding: "10px 20px", borderRadius: 5, border: "none", marginTop: 10, cursor: "pointer" }}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

function ListaCursos({ cursos, onEdit, onDelete, onInscrever, inscricoes }) {
    return (
        <div style={{ fontFamily: "Arial" }}>
            <h1>Lista de Cursos</h1>
            <ul>
                {cursos.map((curso, index) => (
                    <li key={index}>
                        {curso.nome} - {curso.descricao} - {new Date(curso.dataInicio).toLocaleDateString("pt-BR")} - {new Date(curso.dataFinal).toLocaleDateString("pt-BR")} - {inscricoes[index]?.length || 0}/{curso.maxAlunos} alunos
                        <button onClick={() => onEdit(index)} style={{ marginLeft: 10, color: "white",
                            backgroundColor: "blue", padding: 10, borderRadius: 10, border: "none", cursor: "pointer" }}>Editar</button>
                        <button onClick={() => onDelete(index)} style={{ marginLeft: 10, color: "white",
                            backgroundColor: "red", padding: 10, borderRadius: 10, border: "none", cursor: "pointer" }}>Excluir</button>
                        <button onClick={() => onInscrever(index)} style={{ marginLeft: 10, color: "white",
                            backgroundColor: "green", padding: 10, borderRadius: 10, border: "none", cursor: "pointer" }}>Inscrever Estudante</button>
                        <ul>
                            {inscricoes[index]?.map((nome, i) => (
                                <li key={i}>{nome}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function GestaoCursos() {
    const [cursos, setCursos] = useState([]);
    const [inscricoes, setInscricoes] = useState({});

    const addCurso = (novoCurso) => {
        setCursos([...cursos, novoCurso]);
    };

    const editCurso = (index) => {
        const novoNome = prompt("Novo nome:", cursos[index].nome);
        if (novoNome) {
            const novosCursos = [...cursos];
            novosCursos[index].nome = novoNome;
            setCursos(novosCursos);
        }
    };

    const deleteCurso = (index) => {
        setCursos(cursos.filter((_, i) => i !== index));
        setInscricoes((prev) => {
            const novoEstado = { ...prev };
            delete novoEstado[index];
            return novoEstado;
        });
    };

    const inscreverEstudante = (cursoIndex) => {
        const estudanteNome = prompt("Digite o nome do estudante:");
        if (!estudanteNome) return;

        setInscricoes((prev) => {
            const cursoId = cursoIndex;
            const inscritosAtuais = prev[cursoId] || [];

            if (inscritosAtuais.length >= cursos[cursoId].maxAlunos) {
                alert("Número máximo de alunos atingido!");
                return prev;
            }

            return {
                ...prev,
                [cursoId]: [...inscritosAtuais, estudanteNome],
            };
        });
    };

    return (
        <div>
            <CadastroCurso onAdd={addCurso} />
            <ListaCursos cursos={cursos} onEdit={editCurso} onDelete={deleteCurso} onInscrever={inscreverEstudante} inscricoes={inscricoes} />
        </div>
    );
}

export default GestaoCursos;