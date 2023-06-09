import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Type from './components/Type';



function App() {

  const types = [
    {
      nameType: "Fruits" ,
      firstColor: "var(--fruits-color1)",
      secondColor: "var(--fruits-color2)",
     
    },
    {
      nameType: "Vegetables",
      firstColor: "var(--vegetables-color1)",
      secondColor: "var(--vegetables-color2)",
    },
    {
      nameType: "Meat and Fish",
      firstColor: "var(--meat-color1)",
      secondColor: "var(--meat-color2)",
    },
    {
      nameType: "Snacks",
      firstColor: "var(--snack-color1)",
      secondColor: "var(--snack-color2)",
    },
    {
      nameType: "Beverages",
      firstColor: "var(--beverages-color1)",
      secondColor: "var(--beverages-color2)",
    },
    {
      nameType: "Frozen",
      firstColor: "var(--frozen-color1)",
      secondColor: "var(--frozen-color2)",
    },
    {
      nameType: "Dairy and Eggs",
      firstColor: "var(--dairy-color1)",
      secondColor: "var(--dairy-color2)",
    },
    {
      nameType: "Bakery",
      firstColor: "var(--bakery-color1)",
      secondColor: "var(--bakery-color2)",
    },
    {
      nameType: "Personal Care",
      firstColor: "var(--personal-color1)",
      secondColor: "var(--personal-color2)",
    },
    {
      nameType: "Household Essentials",
      firstColor: "var(--house-color1)",
      secondColor: "var(--house-color2)",
    },
  ];

  const [itensList, setItensList] = useState([]);
  const [nextItemId, setNextItemId] = useState(0);

  const onItemAdd = (itemList) => {
    const newItem = { ...itemList, id: nextItemId };
    setItensList([...itensList, newItem]);
    setNextItemId(nextItemId + 1);
  };

  const deleteItem = (itemId) => {
    const newItensList = itensList.filter((itemList) => itemList.id !== itemId);
    setItensList(newItensList);
  };

  return (
    <div className="App">
      <Banner />
      <Form types={types.map((type) => type.nameType)} forRegisteredItem={(itemList) => onItemAdd(itemList)} />

      {types.map((type, index) => (
        <Type
          key={type.nameType}
          nameType={type.nameType}
          firstColor={type.firstColor}
          secondColor={type.secondColor}
          itensList={itensList.filter((itemList) => itemList.type === type.nameType)}
          onDelete={(itemId) => deleteItem(itemId)}
        /> 
      ))}

{itensList.map((item) => (
  <div key={item.id}>
    <span>{item.name}</span>
    <button onClick={() => deleteItem(item.id)}></button>
  </div>
))}
    </div>
  );
}



export default App;
