// Imports.
import React, { useState, useEffect } from "react";

// Custom imports.
import { EnterCommandForm, IntroMessage } from "./components";
import CommandsList from "./components/commands";
import CommandResponse from "./components/commandResponse";
import { useRef } from "react";

const AllCommands = ({ allCommands }) => {
  return (
    <div>
      {allCommands.map((command, index) => (
        <div> {command} </div>
      ))}
    </div>
  );
};

const App = () => {
  const [allCommands, setAllCommands] = useState([]);

  // auto scrolling when text goes out of view.
  // useRef and useEffect.
  const siteBodyRef = useRef();

  useEffect(() => {
    if (siteBodyRef.current) {
      siteBodyRef.current.scrollIntoView({
        behaviour: "smooth",
        block: "end",
      });
    }
  });

  return (
    <div className="container" ref={siteBodyRef}>
      <IntroMessage />
      <AllCommands allCommands={allCommands} />

      <EnterCommandForm
        callCommand={(newCommand) => {
          switch (newCommand.trim()) {
            case "commands":
              setAllCommands([...allCommands, <CommandsList />]);
              break;
            case "cls":
            case "clear":
              setAllCommands([]);
              break;
            default:
              setAllCommands([
                ...allCommands,
                <CommandResponse enteredCommand={newCommand} />,
              ]);
              break;
          }
        }}
      />
    </div>
  );
};

export default App;
