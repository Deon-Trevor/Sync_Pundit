// Imports
import React, { useEffect, useState } from "react";
import { dateApi } from "utilities"
import typingEffect from "typing-effect";

export default function IntroMessage(props) {
    const [showCommands, setShowCommands] = useState(false)
    useEffect(() => {
        typingEffect(
            Array.from(document.querySelectorAll("[data-typing-effect]"))
        );
    })

    return (
        <div>
            <div>
                <span>
                    <span> msf5 exploit </span>
                    <span className="color-red"> ( multi/handler)</span> &gt;
                </span>
                <span data-typing-effect> run </span>
            </div>

            <div data-typing-effect>
                <div>
                    <span className="color-blue"> [*] </span>
                    <span>
                        <span > Started reverse TCP handler </span>
                        <span> on 192.168.1.101:2345 </span>
                    </span>
                </div>
                <div>
                    <span className="color-blue"> [*] </span>
                    Sending stage (36 bytes)
                </div>
                <div>
                    <span className="color-blue"> [*] </span>
                    Commands shell session 1 opened
                    <span> (192.168.1.101:2345 =&gt; 192.168.1.175:1129) </span>
                </div>
            </div>

            <div className="mt-4">
                <div data-typing-effect>
                    <span className="color-green">
                        <span className="timeStamp"> {dateApi.timeStamp()} </span>
                        &lt;sync_pundit&gt;
                    </span>
                    {" "}hello....! This is Deon Trevor Mpofu - call me Sync_Pundit
                </div>
                <div data-typing-effect>
                    <span className="color-green">
                        <span className="timeStamp"> {dateApi.timeStamp()} </span>
                        &lt;sync_pundit&gt;
                    </span>
                    {" "}i like hacking and security research and stuff..
                </div>
                <div data-typing-effect>
                    <span className="color-green">
                        <span className="timeStamp"> {dateApi.timeStamp()} </span>
                        &lt;sync_pundit&gt;
                    </span>
                    {" "}navigate the system to learn more about me
                </div>
                <div data-typing-effect>
                    <span className="color-green">
                        <span className="timeStamp"> {dateApi.timeStamp()} </span>
                        &lt;sync_pundit&gt;
                    </span>
                    {" "}don't forget to check out the blog too!
                </div>
                <div data-typing-effect>
                    <span className="color-green">
                        <span className="timeStamp"> {dateApi.timeStamp()} </span>
                        &lt;sync_pundit&gt;
                    </span>
                    {" "}break a leg :)
                </div>
            </div>

            <div className="d-flex ms-5 mt-4" data-typing-effect>
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
                        "clear"
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
