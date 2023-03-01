const TodoRowItem = (props) => {
  //   const rowNumber = 1;
  //   const descripton = "Learn Mongodb";
  //   const Assignedto = "Siva";
  return (
    <tr onClick={() => props.deleteTodo(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.descripton}</td>
      <td>{props.Assignedto}</td>
    </tr>
  );
};

export default TodoRowItem;
