import { useState } from "react";
import Button from "../Button";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import "./Form.css";

const Form = (props) => {




const [item, setItem] = useState ('')
const [amount, setAmount] = useState ('')
const [type, setType] = useState ('')


const onSave = (event) =>{
  event.preventDefault() //Don't let the page refresh (default behavior)
 props.forRegisteredItem({
  item,
  amount,
  type
 })
}

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Fill in the data to create an item in the list</h2>
        <TextField 
        obligatory={true} 
        label="Item" 
        placeholder="Add item" 
        result = {item}
        toChange={result => setItem(result)}
        />
        <TextField 
        obligatory={true} 
        label="Amount" 
        placeholder="Add the amount"
        result = {amount} 
        toChange={result => setAmount(result)}
        />
        <DropdownList 
        obligatory={true} 
        label="Type" 
        itens={props.types}
        result = {type}
        toChange={result => setType(result)}
        />
        <Button text="Add item"/>
      </form>
    </section>
  );
};

export default Form;
