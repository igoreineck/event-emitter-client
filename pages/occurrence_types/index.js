import { Container } from "@material-ui/core";
import Header from "../../components/Header";
import OccurrenceTypesBody from "../../components/OccurrenceType/Body";

const OcurrenceTypes = () => {
  return (
    <>
      <Header />
      <Container>
        <OccurrenceTypesBody />
      </Container>
    </>
  );
};

export default OcurrenceTypes;
