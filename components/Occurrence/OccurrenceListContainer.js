import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import api from "../../services/api";
import styles from "./OccurrenceListContainer.module.scss";

const OccurrenceListContainer = () => {
  const [occurrences, setOccurrences] = useState([]);

  useEffect(() => {
    fetchOccurrences();
  }, []);

  const fetchOccurrences = () => {
    api
      .get("/ocurrences/")
      .then((response) => {
        if (response.status === 200) {
          setOccurrences(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Deu ruim");
      });
  };

  return (
    <div className={styles.occurrenceBody}>
      <Grid container>
        {occurrences &&
          occurrences.map((occurrence, index) => (
            <Grid key={index} item md={4} className={styles.occurrence}>
              <h3>{occurrence.name}</h3>
              <p>{occurrence.description}</p>
              <p>
                <small>{occurrence.address}</small>
              </p>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default OccurrenceListContainer;
