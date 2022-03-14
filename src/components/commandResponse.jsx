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

import React, { useEffect } from 'react';
import typingEffect from "typing-effect";
import { dateApi } from 'utilities';

// displays the results of the commands issued.
const Response = (props) => {

    useEffect(() => {
        typingEffect(
            Array.from(document.querySelectorAll("[data-typing-effect]"))
        )
            .then(() => {
                props.setIsTypingDone(true)
            });

    }, []);

    return (
        <div >
            <div className="d-flex mb-2 mt-3">
                <span className="color-green">
                    root@sync_pundit:~#
                </span>
                <span className='ms-2'>
                    {props.enteredCommand}
                </span>
            </div>
            <div className="d-flex flex-column flex-sm-row mb-3">
                <div>
                    <span className="color-green">
                        <span className="timeStamp" >
                            {dateApi.timeStamp()}
                        </span>  &lt;sync_pundit&gt; </span>
                </div>
                <div className='ms-2' data-typing-effect>
                    {props.response.map((item, index) =>
                        <div key={index}>
                            {item}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function CommandResponse(props) {
    const openLinkOnNewWindow = (link) => {
        if (link === "")
            return;

        setTimeout(function () {
            window.open(link, "_blank");
        }, 3000);
    }

    const onRefreshWindow = () => {
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    // checks which command was issued, then display the results of the command.
    const selectResponse = (props) => {
        switch (props.enteredCommand) {
            case "whoami":
                return (
                    <Response
                        response={[
                            "\"I'm currently at PhishFort on the frontlines in the war against phishing attacks.",
                            " I enjoy tracking down malicious activity from phishing websites, apps, web apps and penetration testing networks.",
                            "Off work i spend my time training on Try Hack Me and Hack The Box, researching and playing around with all sorts",
                            "I also enjoy playtng video games",
                            "- Mortal Kombat, Tekken, Soul Calibur - you get the point, Need for Speed, Forza e.t.c",
                            "- Call of Duty, Battlefield - GOD of War, GTA",
                            ".....I just love video games :)",
                            "I also sing and record covers, beatbox, rap(I'm horrible btw, but i like it!), watch anime and stand up comedy\""
                        ]}
                        enteredCommand={props.enteredCommand}
                        isTypingDone={props.isTypingDone}
                        setIsTypingDone={props.setIsTypingDone}
                    />
                )
            case "contact":
                return (
                    <Response
                        response={[
                            <a href='Sync_Pundit@syncpundit.ml'>
                                Website
                            </a>,
                            <a href="https://www.linkedin.com/in/deon-trevor-mpofu">
                                LinkedIn
                            </a>,
                            <a href="https://twitter.com/Sync_Pundit">
                                Twitter
                            </a>,
                        ]}
                        enteredCommand={props.enteredCommand}
                        isTypingDone={props.isTypingDone}
                        setIsTypingDone={props.setIsTypingDone}
                    />
                )
            case "expertise":
                return (
                    <Response
                        response={[
                            "Social Engineering",
                            "Anti-Phishing",
                            "Incident Response",
                            "Threat Hunting",
                            "Penetration Testing",
                            "Malware Analysis",
                            "Security Testing and Assessment",
                            "Vulnerability Assessment",
                            "Scripting and Development",
                            "Google Cloud Platform"
                        ]}
                        enteredCommand={props.enteredCommand}
                        isTypingDone={props.isTypingDone}
                        setIsTypingDone={props.setIsTypingDone}
                    />
                )
            case "ls":
                return (
                    <Response
                        response={[
                            <a href='text/contact.txt'> contact.txt </a>,
                            <a href='text/expertise.txt'> expertise.txt </a>,
                        ]}
                        enteredCommand={props.enteredCommand}
                        isTypingDone={props.isTypingDone}
                        setIsTypingDone={props.setIsTypingDone}
                    />
                )
            case "misc":
                return (
                    <Response
                        response={[
                            <div className="mt-4" style={{ marginLeft: '-7rem' }}>
                                <div className="color-green"> Commands: </div>
                                <div className="ms-5">
                                    <div > revshell </div>
                                </div>
                            </div>
                        ]}
                        enteredCommand={props.enteredCommand}
                        isTypingDone={props.isTypingDone}
                        setIsTypingDone={props.setIsTypingDone}
                    />
                )
            case "revshell":
                return (
                    <>
                        <Response
                            response={["Wait a second as we refresh...",]}
                            enteredCommand={props.enteredCommand}
                            isTypingDone={props.isTypingDone}
                            setIsTypingDone={props.setIsTypingDone}
                        />
                        <div>
                            {onRefreshWindow()}
                        </div>
                    </>
                )
            case "github":
                return (
                    <div>
                        <Response
                            response={["==== Taking you to Github ====>",]}
                            enteredCommand={props.enteredCommand}
                            isTypingDone={props.isTypingDone}
                            setIsTypingDone={props.setIsTypingDone}
                        />
                        {openLinkOnNewWindow("https://github.syncpundit.ml/")}
                    </div>)
            case "blog":
                return (
                    <div>
                        <Response
                            response={["==== Taking you to the blog ====>",]}
                            enteredCommand={props.enteredCommand}
                            isTypingDone={props.isTypingDone}
                            setIsTypingDone={props.setIsTypingDone}
                        />
                        {openLinkOnNewWindow("https://blog.syncpundit.ml/")}
                    </div>
                )
            default:
                return (
                    <Response
                        response={["Command unknown!",]}
                        enteredCommand={props.enteredCommand}
                        isTypingDone={props.isTypingDone}
                        setIsTypingDone={props.setIsTypingDone}
                    />
                )
        }
    }

    console.log(props);


    return (
        <div> {selectResponse(props)} </div>
    )
}
