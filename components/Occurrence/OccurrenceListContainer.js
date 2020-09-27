import { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import OccurrenceFilter from "./OccurrenceFilter";
import api from "../../services/api";
import socket from "../../services/socket";
import styles from "./OccurrenceListContainer.module.scss";

const OccurrenceListContainer = () => {
  const [occurrences, setOccurrences] = useState([]);
  const [occurrenceTypes, setOccurrenceTypes] = useState();

  useEffect(() => {
    registerToSocket();
    fetchOccurrences();
  }, []);

  const registerToSocket = () => {
    socket.on("occurrences", () => fetchOccurrences());
  };

  const fetchOccurrences = () => {
    api
      .get("/occurrences/")
      .then((response) => {
        if (response.status === 200) {
          setOccurrences(response.data);
        }
      })
      .catch((err) => alert("Deu ruim"));
  };

  const addOccurrenceTypes = (occurrenceTypes) => {
    setOccurrenceTypes(occurrenceTypes);
  };

  return (
    <>
      <OccurrenceFilter
        occurrenceTypes={occurrenceTypes}
        addOccurrenceTypes={addOccurrenceTypes}
      />
      <hr />
      <Typography variant="h5">Ocorrências</Typography>
      <div className={styles.occurrenceBody}>
        <Grid container>
          {occurrences &&
            occurrences.map((occurrence, index) => (
              <Grid key={index} item md={3}>
                <div className={styles.occurrence}>
                  <h3>{occurrence.name}</h3>
                  <p>{occurrence.description}</p>
                  <p>
                    <small>{occurrence.address}</small>
                  </p>
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default OccurrenceListContainer;
