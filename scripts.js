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
  
    terminal.innerHTML += `<br><span style="color:green; display:inline-block; width: 140px;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeStyledText(
      "I'm currently at PhishFort on the frontlines in the war against phishing attacks.",
      "white",
      1
    );
    terminal.innerHTML += "<br><span style='display:inline-block; width: 140px;'></span>";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeStyledText(
      "I enjoy hunting down cyber threats, from phishing, malware, defacement, identity theft, etc.",
      "white",
      1
    );
    terminal.innerHTML += "<br><span style='display:inline-block; width: 140px;'></span>";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeStyledText(
      "Off work I spend my time training on Try Hack Me and Hack The Box, researching and playing around with all sorts",
      "white",
      1
    );
    terminal.innerHTML += "<br><span style='display:inline-block; width: 140px;'></span>";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeStyledText("I also enjoy playing video games", "white", 1);
    terminal.innerHTML += "<br><span style='display:inline-block; width: 140px;'></span>";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeStyledText(
      "- Mortal Kombat, Tekken, Soul Calibur - you get the point, Need for Speed, Forza e.t.c",
      "white",
      1
    );
    terminal.innerHTML += "<br><span style='display:inline-block; width: 140px;'></span>";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeStyledText(
      "- Call of Duty, Battlefield - GOD of War, GTA",
      "white",
      1
    );
    terminal.innerHTML += "<br><span style='display:inline-block; width: 140px;'></span>";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeStyledText(".....I just love video games :)", "white", 1);
    terminal.innerHTML += "<br><span style='display:inline-block; width: 140px;'></span>";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeStyledText(
      "I also sing and record covers, beatbox, rap (I'm horrible btw, but I like it!), watch anime and stand up comedy",
      "white",
      1
    );
  } else if (command === "ls") {
   
    terminal.innerHTML += `<br><span style="color:green; display:inline-block; width: 140px;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeStyledText(
      "projects.txt    resume.pdf    blog    portfolio",
      "white",
      1
    );
  } else if (command === "expertise") {
   
    terminal.innerHTML += `<br><span style="color:green; display:inline-block; width: 140px;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeStyledText(
      "Security Research, Network Penetration Testing, Web Application Security, Malware Analysis",
      "white",
      1
    );
  } else if (command === "contact") {
    
    terminal.innerHTML += `<br><span style="color:green; display:inline-block; width: 140px;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeStyledText("Email: syncpundit@example.com", "white", 1);
    terminal.innerHTML += "<br><span style='display:inline-block; width: 140px;'></span>";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeStyledText("Twitter: @sync_pundit", "white", 152);
    terminal.innerHTML += "<br><span style='display:inline-block; width: 140px;'></span>";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeStyledText("LinkedIn: sync_pundit", "white", 152);
  } else if (command === "blog") {
    
    terminal.innerHTML += `<br><span style="color:green; display:inline-block; width: 140px;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeStyledText(
      "Check out my blog at: syncpundit-blog.com",
      "white",
      1
    );
  } else if (command === "github") {
    
    terminal.innerHTML += `<br><span style="color:green; display:inline-block; width: 140px;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeStyledText("GitHub: github.com/sync_pundit", "white", 1);
  } else if (command === "misc") {
  
    terminal.innerHTML += `<br><span style="color:green; display:inline-block; width: 140px;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeStyledText("Miscellaneous information goes here", "white", 1);
  } else {
    
    terminal.innerHTML += `<br><span style="color:green; display:inline-block; width: 140px;">${getCurrentTime()} &lt;sync_pundit&gt;</span> `;
    await typeStyledText("Command not found", "white", 1);
  }
  terminal.innerHTML += "<br>";

  
  displayInputField();
}


function typeStyledText(text, color, margin) {
  return new Promise((resolve) => {
    const span = document.createElement("span");
    span.style.color = color;
    span.style.marginLeft = `${margin}px`;
    span.style.display = "inline-block";
    terminal.appendChild(span);
    let index = 0;

    function typeNextChar() {
      if (index < text.length) {
        span.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeNextChar, Math.random() * 10 + 5); // Random delay between 10ms and 15ms
      } else {
        resolve();
      }
    }
    typeNextChar();
  });
}


typeCommands();
