/**
MIT License

Copyright (c) 2020 Deon Trevor Mpofu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

import React, {
    useState,
    useEffect,
    useRef
} from "react";

import {
    EnterCommandForm,
    IntroMessage,
    CommandsList,
    CommandResponse
} from "components";

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
