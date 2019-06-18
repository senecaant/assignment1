import React, {useState} from 'react';

const ContactForm = () => {
    // Whenever a state value changes, the component re-renders
    const [name, setName] = useState('Input 1 here');
    const [input2, setInput2] = useState('Input 2 here');
    const [input3, setInput3] = useState('A');
    // In this case, when setName is run, the component re-renders

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
        // Make an api call that submits the form data somewhere
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            {/*
                Controlled components are form components that are controlled 
                by some sort of state.
            */}
            <span>Input 1: </span>  
            <input 
                type="text" 
                name="fullName"
                value={name} 
                onChange={(event) => setName(event.target.value)} 
            /><br/>
            <span>Input 2: </span>  
            <input 
                type="text" 
                name="fullName"
                onChange={(event) => setInput2(event.target.value)} 
            /><br/>
            <span>Input 3: </span>
            <select 
                name="selections"
                onChange={(event) => setInput3(event.target.value)}
            >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select><br/>
            
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;