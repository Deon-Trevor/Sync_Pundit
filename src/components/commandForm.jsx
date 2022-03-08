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
          setCommand(event.target.value);
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
