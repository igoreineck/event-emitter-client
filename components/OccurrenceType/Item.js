// import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import api from "../../services/api";

const Item = ({ item, updateOccurrenceTypesList }) => {
  const deleteOccurrenceType = async (occurrenceTypeId) => {
    try {
      const response = await api.delete(
        `/occurrence_types/${occurrenceTypeId}`
      );

      if (response.status === 204) updateOccurrenceTypesList();
    } catch (err) {
      alert(`DEU RUIM: ${err}`);
    }
  };

  const handleDelete = () => deleteOccurrenceType(item.id);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {item.name}
      </TableCell>
      <TableCell align="right">
        <Button variant="contained">Editar</Button>
      </TableCell>
      <TableCell align="right">
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Excluir
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Item;
