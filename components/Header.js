import { useRouter } from "next/router";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();

  const homeRoute = () => router.push("/");
  const occurrencesCreateRoute = () => router.push("/occurrences/create");
  const occurrenceTypesRoute = () => router.push("/occurrence_types");

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Container>
          <div className={styles.aligned}>
            <div>
              <Button color="inherit" onClick={homeRoute}>
                Página inicial
              </Button>
              <Button color="inherit" onClick={occurrencesCreateRoute}>
                Criar ocorrências
              </Button>
              <Button color="inherit" onClick={occurrenceTypesRoute}>
                Tipos de ocorrências
              </Button>
            </div>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
