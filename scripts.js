const terminal = document.getElementById("terminal");
const typedCommands = [
  "run",
  "[*] Started reverse TCP handler on 192.168.1.101:2345",
  "[*] Sending stage (36 bytes)",
  "[*] Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)",
];

const instantCommands = ["msf5 exploit (", "multi/handler", ") > "];

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function typeText(text, index, color) {
  return new Promise((resolve) => {
    if (index < text.length) {
      let currentChar = text.charAt(index);
      terminal.innerHTML += `<span style="color:${color}">${currentChar}</span>`;
      setTimeout(() => {
        resolve(typeText(text, index + 1, color));
      }, Math.random() * 10 + 5); 
    } else {
      resolve();
    }
  });
}

async function typeCommands() {
  let instantCommandText = instantCommands.join("");
  let handlerIndex = instantCommandText.indexOf("multi/handler");
  let beforeHandler = instantCommandText.substring(0, handlerIndex);
  let afterHandler = instantCommandText.substring(
    handlerIndex + "multi/handler".length
  );

  terminal.innerHTML += `<span style="color:white">${beforeHandler}</span>`;
  terminal.innerHTML += `<span style="color:red">multi/handler</span>`;
  terminal.innerHTML += `<span style="color:white">${afterHandler}</span>`;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  for (let command of typedCommands) {
    await typeText(command, 0, "white");
    terminal.innerHTML += "<br>";
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
  }

  
  terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
  await typeText(
    "hello....! This is Deon Trevor Mpofu - call me Sync_Pundit",
    0,
    "white"
  );
  terminal.innerHTML;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
  
  await typeText(
    "i like hacking and security research and stuff..",
    0,
    "white"
  );

  terminal.innerHTML;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
  await typeText("navigate the system to learn more about me", 0, "white");
  terminal.innerHTML;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
  await typeText("don't forget to check out the blog too!", 0, "white");
  terminal.innerHTML;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
  await typeText("break a leg :)", 0, "white");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  terminal.innerHTML += "<br>";
 
  terminal.innerHTML += `<br><span style="color:green;">Commands:</span> `;
  terminal.innerHTML += "<br>";
  await new Promise((resolve) => setTimeout(resolve, 1000)); 

  
  const commandsList = [
    "whoami",
    "ls",
    "expertise",
    "contact",
    "blog",
    "github",
    "misc",
  ];

  for (let command of commandsList) {
    terminal.innerHTML += `<br><span style="color:white; margin-left: 140px;">${command}</span>`;
    await new Promise((resolve) => setTimeout(resolve, 500)); 
  }
  
  displayInputField();
}

async function displayInputField() {
  terminal.innerHTML += '<br><span style="color:green;">root@syncpundit:~#</span> ';
  terminal.innerHTML += '<input id="userInput" type="text">';
  const userInput = document.getElementById("userInput");
  userInput.focus(); 

  
  userInput.addEventListener('keypress', async function(event) {
    if (event.key === 'Enter') {
      await handleUserInput(userInput);
    }
  });
}

async function handleUserInput(inputField) {
  const command = inputField.value.trim();
  terminal.removeChild(inputField); 
  terminal.innerHTML += command; 
  terminal.innerHTML += "<br>"; 

  if (command === "whoami") {
    terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeText(
      "I'm currently at PhishFort on the frontlines in the war against phishing attacks.",
      0,
      "white"
    );
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText(
      "I enjoy hunting down cyber threats, from phishing, malware, defacement, identity theft, etc.",
      0,
      "white"
    );
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText(
      "Off work I spend my time training on Try Hack Me and Hack The Box, researching and playing around with all sorts",
      0,
      "white"
    );
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText("I also enjoy playing video games", 0, "white");
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText(
      "- Mortal Kombat, Tekken, Soul Calibur - you get the point, Need for Speed, Forza e.t.c",
      0,
      "white"
    );
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText(
      "- Call of Duty, Battlefield - GOD of War, GTA",
      0,
      "white"
    );
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText(".....I just love video games :)", 0, "white");
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText(
      "I also sing and record covers, beatbox, rap (I'm horrible btw, but I like it!), watch anime and stand up comedy",
      0,
      "white"
    );
  } else if (command === "ls") {
    terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeText(
      "projects.txt",
      0,
      "white"
    );
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText("resume.pdf", 0, "white");
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText("blog ", 0, "white");
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText("portfolio ", 0, "white");
  } else if (command === "expertise") {
    terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeText(
      "Security Research,",
      0,
      "white"
    );
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText("Network Penetration Testing,", 0, "white");
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText("Web Application Security,", 0, "white");
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText("Malware Analysis,", 0, "white");
  } else if (command === "contact") {
    terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeText("Email: syncpundit@example.com", 0, "white");
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText("Twitter: @sync_pundit", 0, "white");
    terminal.innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText("LinkedIn: sync_pundit", 0, "white");
  } else if (command === "blog") {
    terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeText(
      "Check out my blog at: syncpundit-blog.com",
      0,
      "white"
    );
  } else if (command === "github") {
    terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeText("GitHub: github.com/sync_pundit", 0, "white");
  } else if (command === "misc") {
    terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeText("Miscellaneous information goes here", 0, "white");
  } else {
    terminal.innerHTML += `<br><span style="color:green;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeText("Command not found", 0, "white");
  }
  terminal.innerHTML += "<br>";

  
  displayInputField();
}


function typeText(text, index, color) {
  return new Promise((resolve) => {
    if (index < text.length) {
      let currentChar = text.charAt(index);
      terminal.innerHTML += `<span style="color:${color}">${currentChar}</span>`;
      setTimeout(() => {
        resolve(typeText(text, index + 1, color));
      }, Math.random() * 10 + 5); 
    } else {
      resolve();
    }
  });
}

// Start the script
typeCommands();
