import { useState } from "react";
import {
  TextField,
  Button,
  Modal,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import api from "../../services/api";

const Item = ({ item, reload }) => {
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
    setNewName("");
  };

  const handleUpdate = () => {
    const params = { newName };

    api
      .patch(`/ocurrence_types/${id}`, params)
      .then((response) => {
        if (response.status === 204) {
          handleModalClose();
          reload();
        }
      })
      .catch(() => console.log("deu ruim!"));
  };

  const handleDelete = () => {
    api
      .delete(`/ocurrence_types/${item.id}`)
      .then((response) => {
        if (response.status === 204) {
          reload();
        }
      })
      .catch((err) => console.log(err));
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate();
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

      <IconButton onClick={handleModalOpen}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

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

export default Item;
