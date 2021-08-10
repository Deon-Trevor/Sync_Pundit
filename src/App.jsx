// Imports.
import React, { useState } from 'react';

// Custom imports.
import EnterCommandForm from './components/EnterCommandForm';
import CommandsList from './components/CommandsList';
import CommandResponse from './components/CommandResponse';
import IntroMessage from './components/IntroMessage';

const AllCommands = ({ allCommands }) =>{
    return (
        <div>
            { allCommands.map((command, index)=> <div> {command} </div> )}
        </div>
    )
}

const App = (props)=> {
    const [allCommands, setAllCommands] = useState([]);

    return (
        <div className='container'>
            <IntroMessage   />
            <AllCommands allCommands={allCommands}/>
            
            <EnterCommandForm callCommand={
                (newCommand)=>{
                    if (newCommand.trim() === 'commands')
                        setAllCommands([...allCommands, <CommandsList />]);
                    else 
                        setAllCommands([...allCommands, <CommandResponse userCommand={newCommand}/>])
                }
            }/>
        </div>
    )
}

export default App;