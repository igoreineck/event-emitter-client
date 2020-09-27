import api from "../../services/api";
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import ItemList from "./ItemList";
import OccurrenceTypeCreate from "./OccurrenceTypeCreate";

const Body = () => {
  const [occurrenceTypes, setOcurrenceTypes] = useState([]);

  useEffect(() => {
    fetchOccurrenceTypes();
  }, []);

  const fetchOccurrenceTypes = () => {
    api
      .get("/occurrence_types/")
      .then((response) => {
        if (response.status === 200) {
          let items = response.data;

          items.map((item) => {
            return {
              id: item.id,
              name: item.name,
            };
          });

          setOcurrenceTypes(items);
        }
      })
      .catch((err) => alert("Deu ruim!"));
  };

  return (
    <>
      <div>
        <OccurrenceTypeCreate
          updateOccurrenceTypesList={fetchOccurrenceTypes}
        />
      </div>
      <hr />
      <Grid container>
        <ItemList
          occurrenceTypes={occurrenceTypes}
          updateOccurrenceTypesList={fetchOccurrenceTypes}
        />
      </Grid>
    </>
  );
};

export default Body;
