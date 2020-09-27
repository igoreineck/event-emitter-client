import { Container, Grid } from "@material-ui/core";
import Header from "../components/Header";
import OccurrenceListContainer from "../components/Occurrence/OccurrenceListContainer";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Grid container>
          <Grid item md>
            <OccurrenceListContainer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
