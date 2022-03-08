// Imports.
import React, { useState, useEffect } from "react";

// Custom imports.
import { EnterCommandForm, IntroMessage } from "./components";
import CommandsList from "./components/commands";
import CommandResponse from "./components/commandResponse";
import { useRef } from "react";

const EnteredCommands = ({ allCommands }) => {
  return (
    <div>
      {allCommands.map((command, index) => (
        <div key={index}> {command} </div>
      ))}
    </div>
  );
};

const App = () => {
  const [allCommands, setAllCommands] = useState([]);
  const [isTypingDone, setIsTypingDone] = useState(false);

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

    console.log(`ISTYPING: ${isTypingDone}`)
  }, [isTypingDone]);

  return (
    <div className="container" ref={siteBodyRef}>
      <IntroMessage
        isTypingDone={isTypingDone}
        setIsTypingDone={setIsTypingDone}
      />

      <EnteredCommands
        allCommands={allCommands}
        isTypingDone={isTypingDone}
        setIsTypingDone={setIsTypingDone}
      />

      {isTypingDone &&
        <EnterCommandForm
          isTypingDone={isTypingDone}
          setIsTypingDone={setIsTypingDone}
          callCommand={(command) => {
            switch (command.trim()) {
              case "commands":
                setAllCommands([...allCommands, <CommandsList />]);
                setIsTypingDone(!isTypingDone);
                break;
              case "cls":
              case "clear":
                console.log("this is the beginning!");
                setIsTypingDone(true);
                setAllCommands([]);
                console.log("this is the end!");
                break;
              default:
                setAllCommands([
                  ...allCommands,
                  <CommandResponse
                    enteredCommand={command}
                    isTypingDone={isTypingDone}
                    setIsTypingDone={setIsTypingDone}
                  />,
                ]);
                break;
            }
          }}
        />
      }
    </div>
  );
};

export default App;
