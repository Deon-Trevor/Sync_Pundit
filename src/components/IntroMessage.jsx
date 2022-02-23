// Imports
import React from "react";
import CommandsList from "./commands";

export default function IntroMessage(props) {
    const timeStamp = () => {
        let now = new Date();
        return now.getHours() + ":" + now.getMinutes();
    };

    return (
        <div>
            <div>
                <span>
                    <span> msf5 exploit </span>
                    <span className="color-red"> ( multi/handler)</span> &gt;
                </span>
                <span className="typing-1"> run </span>
            </div>

            <div id="first-header">
                <div>
                    <span className="color-blue"> [*] </span>
                    <span> Started reverse TCP handler </span>
                    <span> on 192.168.1.101:2345 </span>
                </div>
                <div>
                    <span className="color-blue"> [*] </span> 
                    Sending stage (36 bytes)
                </div>
                <div>
                    <span className="color-blue"> [*] </span> Commands shell session 1
                    opened <span> (192.168.1.101:2345 =&gt; 192.168.1.175:1129) </span>
                </div>
            </div>

            <div id="second-header" className="mt-4">
                <div>
                    <span className="color-green">
                        <span className="timeStamp"> {timeStamp()} </span>
                        &lt;sync_pundit&gt;
                    </span>
                    hello....! This is Deon Trevor Mpofu - call me Sync_Pundit
                </div>
                <div>
                    <span className="color-green">
                        <span className="timeStamp"> {timeStamp()} </span>
                        &lt;sync_pundit&gt;
                    </span>
                    i like hacking and security research and stuff..
                </div>
                <div>
                    <span className="color-green">
                        <span className="timeStamp"> {timeStamp()} </span>
                        &lt;sync_pundit&gt;
                    </span>
                    navigate the system to learn more about me
                </div>
                <div>
                    <span className="color-green">
                        <span className="timeStamp"> {timeStamp()} </span>
                        &lt;sync_pundit&gt;
                    </span>
                    don't forget to check out the blog too!
                </div>
                <div>
                    <span className="color-green">
                        <span className="timeStamp"> {timeStamp()} </span>
                        &lt;sync_pundit&gt;
                    </span>
                    break a leg :)
                </div>
            </div>

            < CommandsList />
        </div>
    );
}
