// Imports
import React, { useEffect, useState } from "react";
import { dateApi } from "utilities"
import typingEffect from "typing-effect";

export default function IntroMessage(props) {
    // const [showCommands, setShowCommands] = useState(false)
    useEffect(() => {
        typingEffect(
            Array.from(document.querySelectorAll("[data-typing-effect]"))
        ).then(() => props.setIsTypingDone(!props.isTypingDone));
    }, [])

    return (
        <div>
            <span>
                msf5 exploit
                <span className="text-danger"> (multi/handler) </span>
                <span> &gt; </span>
                <span className="ms-2" data-typing-effect> run </span>
            </span>
            {[
                "Started reverse TCP handler on 192.168.1.101:2345",
                "Sending stage (36 bytes)",
                "Commands shell session 1 opened (192.168.1.101:2345 => 192.168.1.175:1129)"
            ].map((statement, index) =>
                <div key={index} data-typing-effect>
                    <span className="text-primary"> [*] </span> {statement}
                </div>
            )}

            <div className="mt-4">
                {[
                    "hello....! This is Deon Trevor Mpofu - call me Sync_Pundit",
                    "i like hacking and security research and stuff.. ",
                    "navigate the system to learn more about me",
                    "don't forget to check out the blog too!",
                    "break a leg :)"
                ].map((statement, index) =>
                    <div key={index}>
                        <div data-typing-effect>
                            <span className="color-green">
                                {dateApi.timeStamp()} &lt;sync_pundit&gt;
                            </span>
                            <span>  {statement} </span>
                        </div>
                    </div>
                )}
            </div>

            <div
                className="d-flex ms-5 mt-4"
                data-typing-effect
            >
                <div className="color-green">
                    Commands:
                </div>
                <div className="ms-5">
                    {[
                        "whoami",
                        "expertise",
                        "contact",
                        "blog",
                        "github",
                        "misc",
                        "ls",
                    ].map(command =>
                        <div key={command}>
                            {command}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
