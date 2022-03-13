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

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function EnterCommandForm(props) {
    const [command, setCommand] = useState("");

    return (
        <form
            className="form-inline d-flex align-items-center col-sm-12 col-md-6"
            onSubmit={(event) => {
                event.preventDefault();
                props.callCommand(command);

                // clear the input box.
                setCommand("");
                props.setIsTypingDone(!props.isTypingDone)
            }}
        >
            <label
                htmlFor="commandId"
                className="color-green"
            >
                root@sync_pundit:~#
            </label>

            <input
                type="text"
                className="form-control border-0 text-white"
                id="commandId"
                autoComplete="off"
                autoFocus
                spellCheck="false"
                value={command}
                onChange={(event) => {
                    setCommand(event.target.value.toLowerCase());
                }}
            />

            <button
                type="submit"
                className="btn btn-primary mb-2 d-none"
            >
                Submit
            </button>
        </form>
    );
}
