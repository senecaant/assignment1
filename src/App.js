import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import ContactForm from './components/ContactForm/ContactForm';

//Asignment 1 imports
import ButtonA from './assignment1/ButtonA';
import Input from './assignment1/Input';
import Select from './assignment1/Select';
import TextArea from './assignment1/TextArea';
import Card from './assignment1/Card';


const createAlert = () => {
  alert('OnChange Alert');
}

// You can run functions or you can reference them
// because functions in Javascript are essentially objects
// console.log(createAlert);

// Whenever there is a state change in a component
// the state value will update to the new value
// and the component will re-render (re-run)

function App() {
  //Create a state
  const [showLogo, setShowLogo] = useState(true);
  const [throwAway, setThrowAway] = useState('randomtext');
  return (
    <div className="App">
      <header className="App-header">
        {showLogo && (<img src={logo} className="App-logo" alt="logo" />)}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {<Button color="danger" handleClick={createAlert} throwAwayProp={throwAway}>
          <span>arrow</span>
          <span> 
            Click Me as a Prop! 
          </span>
        </Button>}
        {/*
          When passing functions that require parameters as props
          you have to wrap it in an arrow function to prevent it from
          running immediately on load
        */}
        <Button color="success" handleClick={() => setShowLogo(!showLogo)}>
          My Second Button 
        </Button>
        <hr />
        <ContactForm />
        <hr />
        <ButtonA color="success" onClick={createAlert}>
        My custom button
        </ButtonA>
        <hr />
        <Input onChange={createAlert} type="text" placeholder="This is my custom input from App.js"/>
        <hr />
        <Select onChange={createAlert}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
        </Select>
        <hr />
        <TextArea onChange={createAlert} rows={4} cols ={50} placeholder="This is my custom text area from App.js">
        </TextArea>
        <hr />
        <Card title='Anthony' text='My custom card' />

      </header>
    </div>
  );
}

export default App;
