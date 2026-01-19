import type {Pessoa} from "../../types/Pessoa.ts";
interface ListaProps {
    pessoa: Pessoa[];
    handleEdit: (pessoa: Pessoa) => void;
    handleDelete: (id: number) => void;
}

export function List({pessoa, handleEdit, handleDelete}: ListaProps) {

    return (
        <div>
            <h2>Lista de Jogadores</h2>
            {pessoa.length === 0 ? (
                <p style={{ color: '#999' }}>Nenhum jogador cadastrado ainda.</p>
            ) : (
                <table className="table">
                    <thead className="table-primary">
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th scope={"col"} style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>
                            Nome
                        </th>
                        <th scope={"col"} style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>
                            Email
                        </th>
                        <th scope={"col"} style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>
                            Telefone
                        </th>
                        <th scope={"col"} style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>
                            Números
                        </th>
                        <th scope={"col"} style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'center' }}>
                            Ações
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {pessoa.map(person => (
                        <tr key={person.id}>
                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                {person.nome}
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                {person.email}
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                {person.phone}
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                {person.num1} -
                                {person.num2} -
                                {person.num3} -
                                {person.num4} -
                                {person.num5}
                            </td>
                            <td style={{
                                padding: '10px',
                                border: '1px solid #ccc',
                                textAlign: 'center'
                            }}>
                                <button
                                    onClick={() => handleEdit(person)}
                                    style={{
                                        padding: '5px 15px',
                                        backgroundColor: '#2196F3',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        marginRight: '5px'
                                    }}
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(person.id)}
                                    style={{
                                        padding: '5px 15px',
                                        backgroundColor: '#f44336',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}