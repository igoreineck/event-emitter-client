import Item from "./Item";

const ItemList = ({ occurrenceTypes, reload }) => {
  return (
    <div>
      <h3>Tipos de ocorrência</h3>
      {occurrenceTypes.map((item, index) => (
        <Item key={index} item={item} reload={reload} />
      ))}
    </div>
  );
};

export default ItemList;
