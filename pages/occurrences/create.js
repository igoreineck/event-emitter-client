import React, { useEffect, useState } from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Header from "../../components/Header";
import api from "../../services/api";

const OccurrenceCreation = () => {
  const [occurrenceTypes, setOccurrenceTypes] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endEate, setEndDate] = useState("");
  const [chosenOccurrenceTypeId, setChosenOccurrenceTypeId] = useState();

  useEffect(() => {
    fetchOccurrenceTypes();
  }, []);

  const fetchOccurrenceTypes = async () => {
    try {
      const response = await api.get("/occurrence_types");

      if (response.status === 200) setOccurrenceTypes(response.data);
    } catch (err) {
      alert("Ocorreu um erro");
      console.log(err);
    }
  };

  const registerOccurrence = async (occurrence) => {
    try {
      const response = await api.post("/occurrences", occurrence);

      if (response.status === 201) alert("A ocorrência foi criada com sucesso");
    } catch (err) {
      alert("Ocorreu um erro");
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Grid container justify="center">
          <Grid item md={6}>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const occurrence = {
                  name: name,
                  description: description,
                  cep: cep,
                  address: address,
                  start_date: startDate,
                  end_date: endEate,
                  occurrence_type_id: chosenOccurrenceTypeId,
                };

                registerOccurrence(occurrence);
              }}
            >
              <TextField
                name="name"
                label="Nome da ocorrência"
                variant="outlined"
                margin="normal"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                name="description"
                label="Descrição"
                variant="outlined"
                margin="normal"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                name="cep"
                label="CEP"
                variant="outlined"
                margin="normal"
                fullWidth
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              <TextField
                name="address"
                label="Endereço"
                variant="outlined"
                margin="normal"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                name="start_date"
                type="datetime-local"
                label="Data de início"
                variant="outlined"
                margin="normal"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <TextField
                name="end_date"
                type="datetime-local"
                label="Data de fim"
                variant="outlined"
                margin="normal"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={endEate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <FormControl variant="outlined" style={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Tipo de ocorrência
                </InputLabel>
                <Select
                  name="occurrence_type_id"
                  label="Tipo de ocorrência"
                  onChange={(e) => setChosenOccurrenceTypeId(e.target.value)}
                >
                  <MenuItem>Selecionar</MenuItem>
                  {occurrenceTypes.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button type="submit" color="primary" variant="contained">
                Criar ocorrência
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OccurrenceCreation;
