import React from 'react';

const ResponseListing = ({ response, enteredCommand }) =>{
    const timeStamp = () =>{
        let now = new Date();
        return now.getHours() + ":" + now.getMinutes();
    }

    return (
        <div>
            <div className="d-flex mb-2 mt-3">
                <span className="color-green"> root@sync_pundit:~# </span><span className='ms-2'> { enteredCommand } </span>
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

const CommandResponse = ({ enteredCommand }) => {
    const whoAmIs = [
        "\"I'm currently at PhishFort on the frontlines in the war against phishing attacks.",
        " I enjoy tracking down malicious activity from phishing websites, apps, web apps and penetration testing networks.",
        "Off work i spend my time training on Try Hack Me and Hack The Box, researching and playing around with all sorts",
        "I also enjoy playtng video games",
        "- Mortal Kombat, Tekken, Soul Calibur - you get the point, Need for Speed, Forza e.t.c",
        "- Call of Duty, Battlefield - GOD of War, GTA",
        ".....I just love video games :)",
        "I also sing and record covers, beatbox, rap(I'm horrible btw, but i like it!), watch anime and stand up comedy\""
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
         <a href='text/contact.txt'> contact.txt </a>,
         <a href='text/expertise.txt'> expertise.txt </a>,
    ]
  
    const miscList = [
        <div className="mt-4" style={{marginLeft: '-7rem'}}>
            <div className="color-green"> Commands: </div>
            <div className="ms-5">
              <div > revshell </div>
            </div>
        </div>
    ]

    // opens the blog.
    const openLinkOnNewWindow = (link) => {
        if (link === "")
            return;

        setTimeout(function(){ 
            window.open( link, "_blank");
        },3000);
    }

    /** 
    *! This function was supposed to be avoided.
    *!  It is resource expensive.
    */
    const onRefreshWindow = () =>{
        setTimeout(()=>{
            window.location.reload();
        }, 1000);
    }

    const switching = (enteredCommand) =>{
        switch (enteredCommand) {
            case "whoami":
                return <ResponseListing response={whoAmIs} enteredCommand={enteredCommand} />
            case "contact":
                return <ResponseListing response={contactMeList} enteredCommand={enteredCommand}/>
            case "expertise":
                return <ResponseListing response={expertiseList} enteredCommand={enteredCommand}/>
            case "ls":
                return <ResponseListing response={lsAllList} enteredCommand={enteredCommand}/>
            case "misc":
                return <ResponseListing response={miscList} enteredCommand={enteredCommand}/>
            case "revshell":
                return <div> { onRefreshWindow() } </div>
            case "github":
                return (
                    <div>
                        <ResponseListing
                            response={["==== Taking you to Github ====>",]} 
                            enteredCommand={enteredCommand}
                        />
                        { openLinkOnNewWindow("https://github.syncpundit.ml/")}
                    </div>)
            case "blog":
                return( 
                    <div>
                        <ResponseListing 
                            response={["==== Taking you to the blog ====>",]} 
                            enteredCommand={enteredCommand}
                        />
                        { openLinkOnNewWindow("https://blog.syncpundit.ml/")}
                    </div>
                )
            default:
               return  <ResponseListing response={["Command unknown!",]} enteredCommand={enteredCommand}/>
        }      
    }

    return (
        <div> { switching(enteredCommand)} </div>
    )
}

export default CommandResponse;