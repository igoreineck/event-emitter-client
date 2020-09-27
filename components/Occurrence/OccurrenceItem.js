import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import api from "../../services/api";

const deleteOccurrence = async (occurrenceId) => {
  try {
    await api.delete(`/occurrences/${occurrenceId}`);
  } catch (err) {
    console.log(err);
    alert(err);
  }
};

const OccurrenceItem = ({ item }) => {
  return (
    <TableRow>
      <TableCell>
        <IconButton
          aria-label="delete"
          variant="contained"
          color="secondary"
          type="button"
          onClick={(e) => deleteOccurrence(item.id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {item.name}
      </TableCell>
      <TableCell align="right">{item.description}</TableCell>
      <TableCell align="right">{item.cep}</TableCell>
      <TableCell align="right">{item.address}</TableCell>
      <TableCell align="right">{item.start_date}</TableCell>
      <TableCell align="right">{item.end_date}</TableCell>
      <TableCell align="right">{item.occurrence_type_id}</TableCell>
    </TableRow>
  );
};

export default OccurrenceItem;
