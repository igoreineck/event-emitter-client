import api from "../../services/api";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Grid, Button } from "@material-ui/core";
import ItemList from "./ItemList";

const Body = () => {
  const [occurrenceTypes, setOcurrenceTypes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchOccurrenceTypes();
  }, []);

  const fetchOccurrenceTypes = () => {
    api
      .get("/ocurrence_types/")
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
      .catch((err) => {
        console.log(err);
        alert("Deu ruim!");
      });
  };

  return (
    <Grid container>
      <Grid item md={8}>
        <Grid item md={12}>
          <ItemList
            occurrenceTypes={occurrenceTypes}
            reload={fetchOccurrenceTypes}
          />
        </Grid>
      </Grid>
      <Grid item md={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/occurrence_types/create")}
        >
          Criar tipo de ocorrẽncia
        </Button>
      </Grid>
    </Grid>
  );
};

export default Body;
