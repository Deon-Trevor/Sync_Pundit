import React, { useEffect } from 'react';
import typingEffect from "typing-effect";

const CommandsList = () => {
    useEffect(() => {
        typingEffect(
            Array.from(document.querySelectorAll("[data-typing-effect]"))
        );
    })
    const commandsList = [
        "whoami",
        "expertise",
        "contact",
        "blog",
        "github",
        "misc",
        "ls",
        "clear"
    ];

    return (
        <div className="d-flex ms-5 mt-4" data-typing-effect>
            <div className="color-green">
                Commands:
            </div>
            <div className="ms-5">
                {commandsList.map(command =>
                    <div key={command}>
                        {command}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CommandsList;