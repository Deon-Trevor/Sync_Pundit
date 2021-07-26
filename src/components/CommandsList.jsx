const CommandsList = (props) => {

    const commandsList = 
        ["whoami", "ls", "expertise", "contact", "blog", "misc"];

    return (
        <div className="d-flex ms-5 mt-4">
            <div className="color-green"> Commands: </div>
            <div className="ms-5">
              { commandsList.map( command => <div key={command}> { command } </div>) }
            </div>
        </div>
    )   
}

export default CommandsList;