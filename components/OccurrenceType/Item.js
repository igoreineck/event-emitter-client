import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import api from "../../services/api";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Item({ item, reload }) {
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const editOccurrenceType = async (id, name) => {
    const struct = { name };

    return await api.patch(`/ocurrence_types/${id}`, struct);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewName("");
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          editOccurrenceType(item.id, newName)
            .then((response) => {
              if (response.status === 204) {
                handleClose();
                reload();
              }
            })
            .catch(() => {
              throw new Error("Deu ruim");
            });
        }}
      >
        <TextField
          name="name"
          label="Nome do tipo de ocorrência"
          variant="outlined"
          margin="normal"
          fullWidth
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </div>
  );

  return (
    <div>
      <h4>{item.name}</h4>

      <IconButton onClick={handleOpen}>
        <EditIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
