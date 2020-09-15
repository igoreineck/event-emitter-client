import { useState } from "react";
import { useRouter } from "next/router";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import Header from "../../components/Header";
import api from "../../services/api";

const Create = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  async function createOccurrenceType(name) {
    return await api.post("/ocurrence_types/", {
      name,
    });
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
                .then((response) => {
                  if (response.status === 200) {
                    router.push("/occurrence_types/");
                  }
                })
                .catch((err) => alert("Erro"));
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
};

export default Create;
