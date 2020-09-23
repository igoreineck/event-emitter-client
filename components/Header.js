import { useRouter } from "next/router";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();

  const occurrenceRoute = () => router.push("/occurrences");
  const occurrenceTypesRoute = () => router.push("/occurrence_types");

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Container className={styles.customHeader}>
          <div>
            <Button onClick={occurrenceRoute} color="inherit">
              Ocorrências
            </Button>
            <Button onClick={occurrenceTypesRoute} color="inherit">
              Tipos de ocorrências
            </Button>
          </div>
          <Button color="inherit">Login</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
