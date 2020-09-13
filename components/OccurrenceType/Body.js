import api from "../../services/api";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Grid, Button } from "@material-ui/core";
import ItemList from "./ItemList";

export default function Body() {
  const [occurrenceTypes, setOcurrenceTypes] = useState([]);
  const router = useRouter();

  async function fetchOccurrenceTypes() {
    const request = await api.get("/ocurrence_types/");
    const names = await request.data.map((c) => c.name);
    setOcurrenceTypes(names);
  }

  useEffect(() => {
    fetchOccurrenceTypes();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Grid item md={12}>
            <ItemList occurrenceTypes={occurrenceTypes} />
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => router.push("/occurrence_types/create")}
          >
            Criar tipo de ocorrẽncia
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
