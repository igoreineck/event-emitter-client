import api from "../../services/api";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Grid, Button } from "@material-ui/core";
import ItemList from "./ItemList";

export default function Body() {
  const [occurrenceTypes, setOcurrenceTypes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    handleOccurrenceTypesUpdate();
  }, []);

  async function fetchOccurrenceTypes() {
    const request = await api.get("/ocurrence_types/");
    return await request.data.map((item) => {
      return { id: item.id, name: item.name };
    });
  }

  async function handleOccurrenceTypesUpdate() {
    const items = await fetchOccurrenceTypes();

    setOcurrenceTypes(items);
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Grid item md={12}>
            <ItemList
              occurrenceTypes={occurrenceTypes}
              reload={handleOccurrenceTypesUpdate}
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
    </Container>
  );
}
