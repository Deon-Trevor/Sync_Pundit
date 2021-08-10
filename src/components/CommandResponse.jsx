import React from 'react';

const ResponseListing = ({ response, userCommand }) =>{
    const timeStamp = () =>{
        let now = new Date();
        return now.getHours() + ":" + now.getMinutes();
    }

    return (
        <div>
            <div className="d-flex mb-2 mt-2">
                <span className="color-green"> root@sync_pundit:~# </span><span className='ms-2'> {userCommand} </span>
            </div>
            <div className="d-flex mb-3">
                <div>
                    <span className="color-green"> <span className="timeStamp" > { timeStamp() } </span>  &lt;sync_pundit&gt; </span>
                </div>
                <div className='ms-2'>
                    {response.map(item => <div key={item}> {item} </div>)}
                </div>
            </div>
        </div>
    )
}

const CommandResponse = ({ userCommand }) => {
    const whoAmIs = [
        "\"I'm currently at PhishFort on the frontlines in the war against phishing attacks.",
        " I enjoy tracking down malicious activity from phishing websites, apps, web apps and pentesting networks.",
        "Off work i spend my time training on Try Hack Me and Hack The Box, researching and playing around with all sorts",
        "I also enjoy playtng video games",
        "- Mortal Kombat, Tekken, Soul Calibur - you get the point, Need for Speed, Forza e.t.c",
        "- Call of Duty, Battlefield - GOD of War, GTA",
        ".....i just love video games :)",
        "I also sing and record covers, beatbox, rap(I'm horrible btw, but i like it!), watch anime and stand up comedy"
    ];

    const expertiseList = [
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
    ]

    const contactMeList = [
        <a href='Sync_Pundit@syncpundit.ml'> Website </a>,
        <a href="https://www.linkedin.com/in/deon-trevor-mpofu"> LinkedIn </a>,
        <a href="https://twitter.com/Sync_Pundit"> Twitter </a>,
    ]

    const lsAllList = [
        "Nothing to list",
    ]
  
    const miscList = [
        "Coming soon",
    ]

    const switching = (userCommand) =>{
        switch (userCommand) {
            case "whoami":
                return <ResponseListing response={whoAmIs} userCommand={userCommand} />
            case "contact":
                return <ResponseListing response={contactMeList} userCommand={userCommand}/>
            case "expertise":
                return <ResponseListing response={expertiseList} userCommand={userCommand}/>
            case "ls":
                return <ResponseListing response={lsAllList} userCommand={userCommand}/>
            case "misc":
                return <ResponseListing response={miscList} userCommand={userCommand}/>
            default:
               return  <ResponseListing response={["Command unknown!",]} userCommand={userCommand}/>
        }      
    }

    return (
        <div> { switching(userCommand)} </div>
    )
}

export default CommandResponse;