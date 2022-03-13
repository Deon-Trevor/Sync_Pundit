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

import React, { useEffect } from "react";
import { dateApi } from "utilities"
import typingEffect from "typing-effect";

export default function IntroMessage(props) {
    useEffect(() => {
        typingEffect(
            Array.from(document.querySelectorAll("[data-typing-effect]"))
        ).then(() => props.setIsTypingDone(!props.isTypingDone));
    }, [])

    return (
        <div className="mt-4">
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
