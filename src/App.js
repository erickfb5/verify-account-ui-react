import { Fragment, useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [codes, setCodes] = useState(["", "", "", "", "", ""]);

  useEffect(() => {
    const inputFields = document.querySelectorAll(".code");
    inputFields[0].focus();
  }, []);

  const handleCodeChange = (event, index) => {
    const value = event.target.value;
    if (value >= 0 && value <= 9) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
      if (index < 5) {
        setTimeout(
          () => document.querySelectorAll(".code")[index + 1].focus(),
          10
        );
      }
    } else if (event.key === "Backspace") {
      const inputFields = document.querySelectorAll(".code");
      if (inputFields[index].value === "" && index > 0) {
        inputFields[index - 1].value = "";
        inputFields[index - 1].focus();
        const newCodes = codes.slice(0, index);
        setCodes(newCodes);
      }
    }
  };
  

  return (
    <Fragment>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Verify Account</title>
      </head>
      <body>
        <div className="container">
          <h2>Verify Your Account</h2>
          <p>
            We emailed you the six digit code to email@email.com <br /> Enter
            the code below to confirm your email address.
          </p>
          <div className="code-container">
            {codes.map((code, index) => (
              <input
                type="number"
                className="code"
                key={index}
                placeholder="0"
                min="0"
                max="9"
                required
                value={code}
                onChange={(event) => handleCodeChange(event, index)}
                onKeyDown={(event) => handleCodeChange(event, index)}
              />
            ))}
          </div>
          <small className="info">
            This is design only. We didn't actually send you an email as we
            don't have your email, right?
          </small>
        </div>
      </body>
    </Fragment>
  );
};

export default App;
