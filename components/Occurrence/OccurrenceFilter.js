import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import api from "../../services/api";
import style from "./OccurrenceFilter.module.scss";

const OccurrenceFilter = ({ filter }) => {
  const [occurrenceTypesList, setOccurrenceTypesList] = useState([]);
  const [selectedOccurrenceType, setSelectedOccurrenceType] = useState();

  useEffect(() => {
    fetchOccurrenceTypes();
  }, []);

  const fetchOccurrenceTypes = async () => {
    try {
      const response = await api.get("/occurrence_types");

      if (response.status === 200) setOccurrenceTypesList(response.data);
    } catch (err) {
      console.log(err);
      alert("Ocorreu um erro");
    }
  };

  return (
    <div className={style.filterComponent}>
      <Grid container justify="center" alignItems="center">
        <Grid item md={4}>
          <FormControl variant="outlined" style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-outlined-label">
              Tipo de ocorrência
            </InputLabel>
            <Select
              label="Tipo de ocorrência"
              value={selectedOccurrenceType ? selectedOccurrenceType : ""}
              onChange={(e) => {
                const occurrenceTypeId = e.target.value;

                setSelectedOccurrenceType(occurrenceTypeId);
                filter(occurrenceTypeId);
              }}
            >
              <MenuItem>Selecionar</MenuItem>
              {occurrenceTypesList.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default OccurrenceFilter;
