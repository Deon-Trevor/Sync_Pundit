import React, { useState, useRef } from 'react';

const introduction_message: String[] = [
    "Hellow there! I'm Deon Trevor Mpofu, but I would love it when you call me syncpundit.",
    "I like hacking, security research and some hot stuff",
    "Navigate the system and find more about me",
    "Don't forget to check the blog too!",
    "Break a leg",
]

interface ICommand {
    command: String,
    response: String[]
}

const commands: ICommand[] = [
    {
        command: "expertise",
        response: [
            "Anti-Phishing",
            "Cyber Threat Intelligence",
            "Threat Hunting",
            "Social Engineering",
            "Malware Analysis",
            "Security Testing and Assessment",
            "Google Cloud Platform"]
    },
    {
        command: "whoami",
        response: [
            "I'm currently at PhishFort on the frontlines in the war against phishing attacks.",
            "I enjoy hunting down cyber threats, from phishing, malware, defacement, identity theft, etc.",
            "Off work i spend my time training on Try Hack Me and Hack The Box, researching and playing around with all sorts",
            "I also enjoy playtng video games",
            "- Mortal Kombat, Tekken, Soul Calibur - you get the point, Need for Speed, Forza e.t.c",
            "- Call of Duty, Battlefield - GOD of War, GTA.....",
            "i just love video games :) ",
            "I also sing and record covers, beatbox, rap(I'm horrible btw, but i like it!), watch anime and stand up comedy"
        ]
    },
    {
        command: "contact",
        response: [
            "syncpundit.com",
            "https://twitter.com/Sync_Pundit",
            "https://www.linkedin.com/in/deon-trevor-mpofu"
        ]
    },
    {
        command: "github",
        response: ["https://github.com/deon-trevor-mpofu"]
    },
    { 
        command: "misc", 
        response: ["Enter REVSHELL command to clear the shell.."]
     },
    { 
        command: "ls", 
        response: ["expertise.txt", "contact.txt"]
     },
]

const validateCommand = (command: string) => {
    let isCommand = false;
    for (let i = 0; i < commands.length; i++)
        if (command === commands[i].command) {
            isCommand = true;
            break;
        }
    return isCommand;
}

const getCommand = (commandKey: string) => {
    let command: ICommand = { command: "", response: [] };
    for (let i = 0; i < commands.length; i++)
        if (commandKey === commands[i].command) {
            command = commands[i];
            break;
        }
    return command;
}

export default function App() {
    const [enteredCommands, setCommands] = useState<ICommand[]>([]);
    const clearEnteredCommands = () => setCommands([]);

    const [userCommand, setUserCommand] = useState("");
    const clearUserCommand = () => setUserCommand("");

    const addCommand = (command: ICommand) => setCommands([...enteredCommands, command])
    const addCommandError = (invalidCommand: string) => {
        setCommands([...enteredCommands, { command: invalidCommand, response: ["Invalid command input"] }]);
    }

    const onCommandInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setUserCommand(event?.target.value)
    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isCommandValid = validateCommand(userCommand);
        if (isCommandValid) {
            const command = getCommand(userCommand);
            addCommand(command);
        }
        else
            userCommand.toLowerCase() === "revshell" // valid command but not in the commands list.
            ? clearEnteredCommands() 
            : addCommandError(userCommand);

        clearUserCommand();
    }

    // Enforce self scrolling when page content overflows.
    const containerRef = useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const container = containerRef.current;
        container && container.scrollIntoView({ behavior: "smooth", block: "end" })
    }, [enteredCommands])

    return (
        <div className='h-screen font-mono bg-neutral-900'>
            <div className='container mx-auto h-full'>
                <div className='px-6 md:px-10 py-4 md:mx-10 lg:mx-40 text-gray-300'>
                    <div className='mb-3'>
                        <div> <span className='text-blue-500'> [*] </span> Started reverse TCP handler on 192.168.1.101:2345 </div>
                        <div> <span className='text-blue-500'> [*] </span> Sending stage (36 bytes)</div>
                        <div> <span className='text-blue-500'> [*] </span> Commands shell session 1 opened (192.168.1.101:2345 -&gt; 192.168.1.175:1129) </div>
                    </div>

                    {/* Displaying the intro message */}
                    <div className='md:grid grid-cols-8'>
                        {introduction_message.map((message, index) =>
                            <React.Fragment key={index}>
                                <div className='md:col-span-2 text-green-500'>
                                    &lt;sync_pundit&gt;
                                </div>
                                <div className='md:col-span-6'>
                                    {message}
                                </div>
                            </React.Fragment>
                        )}
                    </div>

                    {/* Listing all commands */}
                    <div className='md:grid grid-cols-8 mt-3'>
                        <div className='md:col-span-2 text-green-500'>
                            Commands
                        </div>
                        <div className='md:col-span-6'>
                            {commands.map((command, index) =>
                                <div key={index}>{command.command}</div>
                            )}
                        </div>
                    </div>

                    {/* Listing all the entered commands. */}
                    <div className="md:grid grid-cols-8">
                        {enteredCommands.map((command, index) =>
                            <React.Fragment key={index}>
                                <div className='md:col-span-2 text-green-500 md:mt-3'>
                                    root@syncpundit~#
                                </div>
                                <div className='md:col-span-6 md:mt-3'>
                                    {command.command}
                                </div>
                                <div className='md:col-span-2 text-green-500'>
                                    &lt;sync_pundit&gt;
                                </div>
                                <div className='md:col-span-6'>
                                    {command.response.map((response, responseIndex) =>
                                        <div key={responseIndex}>
                                            {response}
                                        </div>
                                    )}
                                </div>
                            </React.Fragment>
                        )}
                    </div>

                    {/* The form to input commands. */}
                    <div className='md:grid grid-cols-8 text-black pb-4 mt-3' ref={containerRef}>
                        <div className='md:col-span-2 text-green-500'>
                            root@syncpundit~#
                        </div>
                        <div>
                            <form onSubmit={onFormSubmit}>
                                <input
                                    className='bg-zinc-900 text-gray-100 outline-none'
                                    type="text"
                                    onChange={onCommandInputChange}
                                    value={userCommand}
                                    autoFocus
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}