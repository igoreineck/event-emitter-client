import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import api from "../../services/api";

const OccurrenceTypeCreate = ({ updateOccurrenceTypesList }) => {
  const [name, setName] = useState("");

  const changeName = (e) => setName(e.target.value);

  async function createOccurrenceType(name) {
    try {
      const response = await api.post("/occurrence_types/", { name });

      if (response.status === 201) {
        updateOccurrenceTypesList();
      }
    } catch (err) {
      alert(`DEU RUIM: ${err}`);
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          createOccurrenceType(name);
        }}
      >
        <TextField
          name="name"
          label="Nome do tipo de ocorrência"
          variant="outlined"
          margin="normal"
          fullWidth
          value={name}
          onChange={changeName}
        />
        <Button type="submit" color="primary" variant="contained">
          Criar
        </Button>
      </form>
    </>
  );
};

export default OccurrenceTypeCreate;
