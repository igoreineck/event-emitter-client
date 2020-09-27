import { useRouter } from "next/router";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Container>
          <div className={styles.aligned}>
            <div></div>
            <Button color="inherit">Login</Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
