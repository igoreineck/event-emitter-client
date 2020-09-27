import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Item from "./Item";

const ItemList = ({ occurrenceTypes, updateOccurrenceTypesList }) => {
  return (
    <TableContainer>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Nome</strong>
            </TableCell>
            <TableCell align="right">&nbsp;</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {occurrenceTypes.map((item, index) => (
            <Item
              key={index}
              item={item}
              updateOccurrenceTypesList={updateOccurrenceTypesList}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemList;
