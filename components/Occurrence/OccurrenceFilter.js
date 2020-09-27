import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import api from "../../services/api";

const OccurrenceFilter = ({ occurrenceTypes, addOccurrenceTypes }) => {
  const [filteredOccurrenceType, setFilteredOccurrenceType] = useState();
  const [occurrenceTypesList, setOccurrenceTypesList] = useState([]);

  useEffect(() => {
    fetchOccurrenceTypes();
  }, []);

  const fetchOccurrenceTypes = () => {
    api
      .get("/occurrence_types")
      .then((response) => {
        if (response.status === 200) {
          setOccurrenceTypesList(response.data);
        }
      })
      .catch((err) => alert("deu ruim"));
  };

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item md={4}>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              addOccurrenceTypes(filteredOccurrenceType);
            }}
          >
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Tipo de ocorrência
              </InputLabel>
              <Select
                label="Tipo de ocorrência"
                onChange={(e) => setFilteredOccurrenceType(e.target.value)}
              >
                <MenuItem>Selecionar</MenuItem>
                {occurrenceTypesList &&
                  occurrenceTypesList.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <Button type="submit">Adicionar</Button>
          </form>
        </Grid>
      </Grid>
      <Grid container>
        <div>{occurrenceTypes}</div>
      </Grid>
    </>
  );
};

export default OccurrenceFilter;
