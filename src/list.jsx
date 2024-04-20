export const List = ({todos}) => {
    return (
        <>
            <div align="center">
                <table border={1}>
                    <thead>
                        <th>Sr no.</th>
                        <th>Task</th>
                        <th>Date</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            todos.map((val) => {
                                return (
                                    <tr key={val.id}>
                                        <td>{val.id}</td>
                                        <td>{val.task}</td>
                                        <td>{val.date}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}