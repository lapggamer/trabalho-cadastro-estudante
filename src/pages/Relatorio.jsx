import { useState, useEffect } from "react";

function Relatorio({ estudantes, cursos, inscricoes }) {
    const [aniversariantes, setAniversariantes] = useState([]);
    const [cursosComVagas, setCursosComVagas] = useState([]);

    useEffect(() => {
        gerarRelatorios();
    }, [estudantes, cursos, inscricoes]);

    const gerarRelatorios = () => {
        const mesAtual = new Date().getMonth() + 1;
        
        // Filtra os aniversariantes do mês
        const aniversariantesMes = estudantes.filter(estudante => {
            const mesNascimento = new Date(estudante.dataNascimento).getMonth() + 1;
            return mesNascimento === mesAtual;
        });
        setAniversariantes(aniversariantesMes);

        // Filtra os cursos com vagas disponíveis
        const cursosDisponiveis = cursos.filter((curso, index) => {
            const inscritos = inscricoes[index]?.length || 0;
            return inscritos < curso.maxAlunos;
        });
        setCursosComVagas(cursosDisponiveis);
    };

    return (
        <div style={{ fontFamily: "Arial", padding: 20 }}>
            <h1>Relatórios</h1>

            <h2>Estudantes Inscritos por Curso</h2>
            <ul>
                {cursos.map((curso, index) => (
                    <li key={index}>
                        <strong>{curso.nome}</strong> ({inscricoes[index]?.length || 0}/{curso.maxAlunos} alunos)
                        <ul>
                            {inscricoes[index]?.map((nome, i) => (
                                <li key={i}>{nome}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <h2>Cursos com Vagas Disponíveis</h2>
            <ul>
                {cursosComVagas.map((curso, index) => (
                    <li key={index}>
                        {curso.nome} - {curso.maxAlunos - (inscricoes[index]?.length || 0)} vagas disponíveis
                    </li>
                ))}
            </ul>

            <h2>Aniversariantes do Mês</h2>
            <ul>
                {aniversariantes.length > 0 ? (
                    aniversariantes.map((estudante, index) => (
                        <li key={index}>{estudante.nome} - {new Date(estudante.dataNascimento).toLocaleDateString("pt-BR")}</li>
                    ))
                ) : (
                    <p>Não há aniversariantes este mês.</p>
                )}
            </ul>
        </div>
    );
}

export default Relatorio;