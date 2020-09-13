import Header from "../../components/Header";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useRouter } from "next/router";
import api from "../../services/api";

export default function Create() {
  const [name, setName] = useState("");
  const router = useRouter();

  async function createOccurrenceType(name) {
    const structure = {
      name,
    };

    const request = api.post("/ocurrence_types/", structure);
    return await request;
  }

  return (
    <>
      <Header />
      <Container>
        <Grid item md={6}>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              createOccurrenceType(name)
                .then((response) => console.log(response.status))
                .catch((err) => console.log(err));
            }}
          >
            <TextField
              name="name"
              label="Nome do tipo de ocorrência"
              variant="outlined"
              margin="normal"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Grid container>
              <Grid item md={6}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Cadastrar
                </Button>
              </Grid>
              <Grid item md={6}>
                <Button
                  color="primary"
                  fullWidth
                  onClick={(e) => router.push("/occurrence_types/")}
                >
                  Voltar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>
    </>
  );
}
