import { Container } from "@material-ui/core";
import Header from "../components/Header";
import OccurrenceListContainer from "../components/Occurrence/OccurrenceListContainer";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <OccurrenceListContainer />
      </Container>
    </>
  );
};

export default Home;
