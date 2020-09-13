import Item from "./Item";

const ItemList = ({ occurrenceTypes }) => {
  return (
    <div>
      <h3>Tipos de ocorrência</h3>
      {occurrenceTypes.map((name, index) => (
        <Item key={index} name={name} />
      ))}
    </div>
  );
};

export default ItemList;
