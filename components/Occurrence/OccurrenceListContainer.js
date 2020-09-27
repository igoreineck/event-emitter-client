import { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import OccurrenceFilter from "./OccurrenceFilter";
import OccurrenceItem from "./OccurrenceItem";
import api from "../../services/api";
import socket from "../../services/socket";

const filterByOccurrenceTypeId = (occurrenceList, id) => {
  return occurrenceList.filter((occurrence) => {
    if (occurrence.occurrence_type_id == id) return occurrence;
  });
};

const fetchOccurrences = async () => {
  try {
    const response = await api.get("/occurrences/");

    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    alert("Ocorreu um erro");
  }
};

const OccurrenceListContainer = () => {
  const [occurrences, setOccurrences] = useState([]);

  useEffect(() => {
    registerToSocket();
    updateOccurrences();
  }, []);

  const registerToSocket = () =>
    socket.on("occurrences", () => updateOccurrences());

  const updateOccurrences = async () => {
    const occurrencesList = await fetchOccurrences();
    setOccurrences(occurrencesList);
  };

  const handleFilter = async (id) => {
    const updatedOccurrences = await fetchOccurrences();

    if (typeof id !== "undefined") {
      const filteredOccurrences = filterByOccurrenceTypeId(
        updatedOccurrences,
        id
      );
      setOccurrences(filteredOccurrences);
    } else {
      setOccurrences(updatedOccurrences);
    }
  };

  return (
    <>
      <OccurrenceFilter filter={handleFilter} />

      <h3>Ocorrências</h3>
      <hr />
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <strong>Nome</strong>
              </TableCell>
              <TableCell>
                <strong>Descrição</strong>
              </TableCell>
              <TableCell>
                <strong>CEP</strong>
              </TableCell>
              <TableCell>
                <strong>Endereço</strong>
              </TableCell>
              <TableCell>
                <strong>Data de Início</strong>
              </TableCell>
              <TableCell>
                <strong>Data de Término</strong>
              </TableCell>
              <TableCell>
                <strong>Tipo de Ocorrência</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {occurrences.map((occurrence, index) => (
              <OccurrenceItem key={index} item={occurrence} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OccurrenceListContainer;
