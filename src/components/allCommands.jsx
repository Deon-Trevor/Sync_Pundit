import React, { useEffect } from 'react';
import { dateApi } from "utilities"
import typingEffect from "typing-effect";

export default function Command({ command, key, setIsTyped }) {
    useEffect(() => {
        typingEffect(
            Array.from(document.querySelectorAll("[data-typing-effect]"))
        ).then(() => setIsTyped(true));
    }, []);

    return (
        <div key={key}>
            <div className="d-flex mb-2 mt-3">
                <span className="color-green">
                    root@sync_pundit:~#
                </span>
                <span className="ms-2"> {command.name} </span>
            </div>
            <div className="d-flex mb-3" >
                <div>
                    <span className="color-green" >
                        {dateApi.timeStamp()} &lt;sync_pundit&gt;
                    </span>
                </div>
                <div className='ms-2' data-typing-effect>
                    <div>
                        {command.description.map((item, index) =>
                            <p key={index}> {item} </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}