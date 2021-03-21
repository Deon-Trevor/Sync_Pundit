// Function one
function function01M(){
    $("#mform1").submit(function(e) {
      e.preventDefault();
    });
      var input1 = $('#mcode').val();
      var today1 = new Date();
      var mtimestamp1 = today1.getHours() + ":" + today1.getMinutes();
      $('#mcode').blur();
     if(input1 == 'whoami'){
      document.getElementById("msection").innerHTML += "<table id=\"table1\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform2\"><input class=\"about-s-form\" type=\"text\" id=\"mcode2\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>"; 
      document.getElementById('mtimestamp6').innerHTML = mtimestamp1;
      // document.getElementById('timestamp61').innerHTML = timestamp1;
      $( "#mcode2" ).focus();
  
      }else if(input1 == 'ls'){
      document.getElementById("msection").innerHTML += "<table id=\"table1\"><tr><td><span><span id=\"timestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td><form id=\"mform2\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode2\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
      document.getElementById('mtimestamp7').innerHTML = mtimestamp1;
      // document.getElementById('timestamp71').innerHTML = timestamp1;
      $( "#mcode2" ).focus();
    
     }else if(input1 == 'expertise'){
      document.getElementById("msection").innerHTML +="<table id=\"table1\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Social Engineering</p><p class=\"m-catex-p2\">Anti-Phishing</p><p class=\"m-catex-p3\">Incident Response</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Penetration Testing</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Vulnerability Assessment</p><p class=\"m-catex-p9\">Scripting and Development</p><p class=\"m-catex-p10\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform2\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode2\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
      document.getElementById('mtimestamp8').innerHTML = mtimestamp1;
      // document.getElementById('timestamp81').innerHTML = timestamp1;
      $( "#mcode2" ).focus();
  
     }else if(input1 == 'contact'){
      document.getElementById("msection").innerHTML +="<table id=\"table1\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"m-catcon-p1\"><a href=\"mailto:trevordeonmpofu@gmail.com\">Google</a></p><p class=\"m-catcon-p2\"><a href=\"https://twitter.com/DeonMpofu?ref_src=twsrc%5Etfw\">Twitter</a></p><p class=\"m-catcon-p3\"><a href=\"https://bw.linkedin.com/in/deon-trevor-mpofu?trk=profile-badge\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform2\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode2\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
      document.getElementById('mtimestamp9').innerHTML =mtimestamp1;
      // document.getElementById('timestamp91').innerHTML = timestamp1;
      $( "#mcode2" ).focus();
    
     }else if(input1 == 'blog'){
      document.getElementById("msection").innerHTML +="<table id= \"table1 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform2\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode2\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
      setTimeout(function(){ 
          window.open( 
                "https://blog.syncpundit.ml/", "_blank");
      },5000);
      
      document.getElementById('mtimestamp10').innerHTML = mtimestamp1;
      // document.getElementById('timestamp101').innerHTML = timestamp1;
      $( "#mcode2" ).focus();
     
     }else if(input1 == 'misc'){
      document.getElementById("msection").innerHTML +="<table id=\"table1\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform2\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode2\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
      // document.getElementById('timestamp11').innerHTML = timestamp1;
      // document.getElementById('timestamp111').innerHTML = timestamp1;
      $( "#mcode2" ).focus();
    
    }else if(input1 == 'revshell'){
      document.getElementById("msection").innerHTML += "<table id=\"table1\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform2\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode2\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
      document.getElementById('mtimestamp13').innerHTML = mtimestamp1;
      // document.getElementById('timestamp71').innerHTML = timestamp1;
      $( "#mcode2" ).focus();
    }else{
      document.getElementById("m-section").innerHTML +="<table id=\"table1\"><tr><td><span class=\"\"><span id=\"mtimestamp12\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform2\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode2\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
      document.getElementById('mtimestamp12').innerHTML = mtimestamp1;
      // document.getElementById('timestamp121').innerHTML = timestamp1;
      $( "#mcode2" ).focus();
      
     }
  };
//Function two

function function02M(){
  $("#mform2").submit(function(e) {
    e.preventDefault();
  });
    var input2 = $('#mcode2').val();
    var today2 = new Date();
    var mtimestamp2 = today2.getHours() + ":" + today2.getMinutes();
    $('#mcode2').blur();
   if(input2 == 'whoami'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform3\"><input class=\"about-s-form\" type=\"text\" id=\"mcode3\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>"); 
    document.getElementById('mtimestamp6').innerHTML = mtimestamp2;
    // document.getElementById('timestamp61').innerHTML = timestamp1;
    $( "#mcode3" ).focus();

    }else if(input2 == 'ls'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td><form id=\"mform3\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode3\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp7').innerHTML = mtimestamp2;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode3" ).focus();
  
   }else if(input2 == 'expertise'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Social Engineering</p><p class=\"m-catex-p2\">Anti-Phishing</p><p class=\"m-catex-p3\">Incident Response</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Penetration Testing</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Vulnerability Assessment</p><p class=\"m-catex-p9\">Scripting and Development</p><p class=\"m-catex-p10\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform3\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode3\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp8').innerHTML = mtimestamp2;
    // document.getElementById('timestamp81').innerHTML = timestamp1;
    $( "#mcode3" ).focus();

   }else if(input2 == 'contact'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"m-catcon-p1\"><a href=\"mailto:trevordeonmpofu@gmail.com\">Google</a></p><p class=\"m-catcon-p2\"><a href=\"https://twitter.com/DeonMpofu?ref_src=twsrc%5Etfw\">Twitter</a></p><p class=\"m-catcon-p3\"><a href=\"https://bw.linkedin.com/in/deon-trevor-mpofu?trk=profile-badge\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform3\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode3\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp9').innerHTML =mtimestamp2;
    // document.getElementById('timestamp91').innerHTML = timestamp1;
    $( "#mcode3" ).focus();
  
   }else if(input2 == 'blog'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id= \"table1 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform3\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode3\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>");
    setTimeout(function(){ 
        window.open( 
              "https://blog.syncpundit.ml/", "_blank");
    },5000);
    
    document.getElementById('mtimestamp10').innerHTML = mtimestamp2;
    // document.getElementById('timestamp101').innerHTML = timestamp1;
    $( "#mcode3" ).focus();
   
   }else if(input2 == 'misc'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform3\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode3\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>");
    // document.getElementById('timestamp11').innerHTML = timestamp1;
    // document.getElementById('timestamp111').innerHTML = timestamp1;
    $( "#mcode3" ).focus();
  
  }else if(input2 == 'revshell'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform3\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode3\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr><table>");
    document.getElementById('mtimestamp13').innerHTML = mtimestamp2;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode3" ).focus();
  }else{
    document.getElementById("m-section").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"mtimestamp12\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform3\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode3\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr><table>");
    document.getElementById('mtimestamp12').innerHTML = mtimestamp2;
    // document.getElementById('timestamp121').innerHTML = timestamp1;
    $( "#mcode3" ).focus();
    
   }
};

//Function three

function function03M(){
  $("#mform3").submit(function(e) {
    e.preventDefault();
  });
    var input3 = $('#mcode3').val();
    var today3 = new Date();
    var mtimestamp3 = today3.getHours() + ":" + today3.getMinutes();
    $('#mcode3').blur();
    
    // console.log($('#toptable1').height());
    // console.log($('#codin').height())
    // if($('#codin').height() > 185 ){
    //   $('#toptable1').hide();
    // }
    if(input3 == 'whoami'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform4\"><input class=\"about-s-form\" type=\"text\" id=\"mcode4\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>"); 
      document.getElementById('mtimestamp6').innerHTML = mtimestamp3;
      // document.getElementById('timestamp61').innerHTML = timestamp1;
      $( "#mcode4" ).focus();
  
      }else if(input3 == 'ls'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td><form id=\"mform4\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode4\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>");
      document.getElementById('mtimestamp7').innerHTML = mtimestamp3;
      // document.getElementById('timestamp71').innerHTML = timestamp1;
      $( "#mcode4" ).focus();
    
     }else if(input3 == 'expertise'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Social Engineering</p><p class=\"m-catex-p2\">Anti-Phishing</p><p class=\"m-catex-p3\">Incident Response</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Penetration Testing</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Vulnerability Assessment</p><p class=\"m-catex-p9\">Scripting and Development</p><p class=\"m-catex-p10\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform4\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode4\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>");
      document.getElementById('mtimestamp8').innerHTML = mtimestamp3;
      // document.getElementById('timestamp81').innerHTML = timestamp1;
      $( "#mcode4" ).focus();
  
     }else if(input3 == 'contact'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"m-catcon-p1\"><a href=\"mailto:trevordeonmpofu@gmail.com\">Google</a></p><p class=\"m-catcon-p2\"><a href=\"https://twitter.com/DeonMpofu?ref_src=twsrc%5Etfw\">Twitter</a></p><p class=\"m-catcon-p3\"><a href=\"https://bw.linkedin.com/in/deon-trevor-mpofu?trk=profile-badge\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform4\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode4\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>");
      document.getElementById('mtimestamp9').innerHTML =mtimestamp3;
      // document.getElementById('timestamp91').innerHTML = timestamp1;
      $( "#mcode4" ).focus();
    
     }else if(input3 == 'blog'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id= \"table1 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform4\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode4\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>");
      setTimeout(function(){ 
          window.open( 
                "https://blog.syncpundit.ml/", "_blank");
      },5000);
      
      document.getElementById('mtimestamp10').innerHTML = mtimestamp3;
      // document.getElementById('timestamp101').innerHTML = timestamp1;
      $( "#mcode4" ).focus();
     
     }else if(input3 == 'misc'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform4\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode4\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>");
      // document.getElementById('timestamp11').innerHTML = timestamp1;
      // document.getElementById('timestamp111').innerHTML = timestamp1;
      $( "#mcode4" ).focus();
    
    }else if(input3 == 'revshell'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform4\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode4\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr><table>");
      document.getElementById('mtimestamp13').innerHTML = mtimestamp3;
      // document.getElementById('timestamp71').innerHTML = timestamp1;
      $( "#mcode4" ).focus();
    }else{
      document.getElementById("m-section").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"mtimestamp12\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform4\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode4\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr><table>");
      document.getElementById('mtimestamp12').innerHTML = mtimestamp3;
      // document.getElementById('timestamp121').innerHTML = timestamp1;
      $( "#mcode4" ).focus();
      
     }
  };

//Function Four

function function04M(){
  $("#mform4").submit(function(e) {
    e.preventDefault();
  });
    var input4 = $('#mcode4').val();
    var today4 = new Date();
    var mtimestamp4 = today4.getHours() + ":" + today4.getMinutes();
    $('#mcode4').blur();
    
    // console.log($('#toptable1').height());
    // console.log($('#codin').height())
    // if($('#codin').height() > 300 ){
    //   $('#toptable2').hide();
    // }
    if(input4 == 'whoami'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform5\"><input class=\"about-s-form\" type=\"text\" id=\"mcode5\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>"); 
      document.getElementById('mtimestamp6').innerHTML = mtimestamp4;
      // document.getElementById('timestamp61').innerHTML = timestamp1;
      $( "#mcode5" ).focus();
  
      }else if(input4 == 'ls'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td><form id=\"mform5\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode5\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>");
      document.getElementById('mtimestamp7').innerHTML = mtimestamp4;
      // document.getElementById('timestamp71').innerHTML = timestamp1;
      $( "#mcode5" ).focus();
    
     }else if(input4 == 'expertise'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Social Engineering</p><p class=\"m-catex-p2\">Anti-Phishing</p><p class=\"m-catex-p3\">Incident Response</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Penetration Testing</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Vulnerability Assessment</p><p class=\"m-catex-p9\">Scripting and Development</p><p class=\"m-catex-p10\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform5\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode5\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>");
      document.getElementById('mtimestamp8').innerHTML = mtimestamp4;
      // document.getElementById('timestamp81').innerHTML = timestamp1;
      $( "#mcode5" ).focus();
  
     }else if(input4 == 'contact'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"m-catcon-p1\"><a href=\"mailto:trevordeonmpofu@gmail.com\">Google</a></p><p class=\"m-catcon-p2\"><a href=\"https://twitter.com/DeonMpofu?ref_src=twsrc%5Etfw\">Twitter</a></p><p class=\"m-catcon-p3\"><a href=\"https://bw.linkedin.com/in/deon-trevor-mpofu?trk=profile-badge\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform5\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode5\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>");
      document.getElementById('mtimestamp9').innerHTML =mtimestamp4;
      // document.getElementById('timestamp91').innerHTML = timestamp1;
      $( "#mcode5" ).focus();
    
     }else if(input4 == 'blog'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id= \"table1 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform5\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode5\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>");
      setTimeout(function(){ 
          window.open( 
                "https://blog.syncpundit.ml/", "_blank");
      },5000);
      
      document.getElementById('mtimestamp10').innerHTML = mtimestamp4;
      // document.getElementById('timestamp101').innerHTML = timestamp1;
      $( "#mcode5" ).focus();
     
     }else if(input4 == 'misc'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform5\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode5\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>");
      // document.getElementById('timestamp11').innerHTML = timestamp1;
      // document.getElementById('timestamp111').innerHTML = timestamp1;
      $( "#mcode5" ).focus();
    
    }else if(input4 == 'revshell'){
      document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform5\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode5\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr><table>");
      document.getElementById('mtimestamp13').innerHTML = mtimestamp4;
      // document.getElementById('timestamp71').innerHTML = timestamp1;
      $( "#mcode5" ).focus();
    }else{
      document.getElementById("m-section").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"mtimestamp12\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform5\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode5\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr><table>");
      document.getElementById('mtimestamp12').innerHTML = mtimestamp4;
      // document.getElementById('timestamp121').innerHTML = timestamp1;
      $( "#mcode5" ).focus();
      
     }
  };

//Function Five

function function05M(){
  $("#mform6").submit(function(e) {
    e.preventDefault();
  });
    var input5 = $('#mcode6').val();
    var today5 = new Date();
    var mtimestamp5 = today5.getHours() + ":" + today5.getMinutes();
    $('#mcode6').blur();

    
    // console.log($('#toptable1').height());
    // console.log($('#codin').height())
    // if($('#codin').height() > 450 ){
    //   $('#toptable2').hide();
    //   $('#section1').hide();
    // }
    // if($('#codin').height() > 300 ){
    //   $('#toptable2').hide();
    // }
    if(input5 == 'whoami'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform6\"><input class=\"about-s-form\" type=\"text\" id=\"mcode6\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>"); 
    document.getElementById('mtimestamp6').innerHTML = mtimestam51;
    // document.getElementById('timestamp61').innerHTML = timestamp1;
    $( "#mcode6" ).focus();

    }else if(input5 == 'ls'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform6\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode6\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp7').innerHTML = mtimestamp5;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode6" ).focus();
  
   }else if(input5 == 'expertise'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Social Engineering</p><p class=\"m-catex-p2\">Anti-Phishing</p><p class=\"m-catex-p3\">Incident Response</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Penetration Testing</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Vulnerability Assessment</p><p class=\"m-catex-p9\">Scripting and Development</p><p class=\"m-catex-p10\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform6\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode6\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp8').innerHTML = mtimestamp5;
    // document.getElementById('timestamp81').innerHTML = timestamp1;
    $( "#mcode6" ).focus();

   }else if(input5 == 'contact'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"catcon-p1\"><a href=\"mailto:trevordeonmpofu@gmail.com\">Google</a></p><p class=\"catcon-p2\"><a href=\"https://twitter.com/DeonMpofu?ref_src=twsrc%5Etfw\">Twitter</a></p><p class=\"catcon-p3\"><a href=\"https://bw.linkedin.com/in/deon-trevor-mpofu?trk=profile-badge\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform6\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode6\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp9').innerHTML = mtimestamp5;
    // document.getElementById('timestamp91').innerHTML = timestamp1;
    $( "#mcode6" ).focus();
  
   }else if(input5 == 'blog'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id= \"table1 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"timestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform6\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode6\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
    setTimeout(function(){ 
        window.open( 
              "https://blog.syncpundit.ml/", "_blank");
    },5000);
    
    document.getElementById('mtimestamp10').innerHTML = mtimestamp5;
    // document.getElementById('timestamp101').innerHTML = timestamp1;
    $( "#mcode6" ).focus();
   
   }else if(input5 == 'misc'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><tr/><tr><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform6\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode6\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
    // document.getElementById('mtimestamp11').innerHTML = mtimestamp1;
    // document.getElementById('timestamp111').innerHTML = timestamp1;
    $( "#mcode6" ).focus();
  
  }else if(input5 == 'revshell'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"timestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform6\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode6\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp13').innerHTML = mtimestamp5;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode6" ).focus();
  }else{
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"timestamp13\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform6\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode6\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp12').innerHTML = mtimestamp5;
    // document.getElementById('timestamp121').innerHTML = timestamp1;
    $( "#mcode6" ).focus();
    
   }
};

//Function six

function function06M(){
  $("#mform6").submit(function(e) {
    e.preventDefault();
  });
    var input6 = $('#mcode6').val();
    var today6 = new Date();
    var mtimestamp6 = today6.getHours() + ":" + today6.getMinutes();
    $('#mcode6').blur();

    
    // console.log($('#toptable2').height());
    // console.log($('#codin').height())
    // if($('#codin').height() > 450 ){
    //   $('#toptable2').hide();
    //   $('#section1').hide();
    //   $('#section2').hide();
    // }
    // if($('#codin').height() > 300 ){
    //   $('#toptable2').hide();
    // }
    if(input6 == 'whoami'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform7\"><input class=\"about-s-form\" type=\"text\" id=\"mcode7\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>"); 
    document.getElementById('mtimestamp6').innerHTML = mtimestamp6;
    // document.getElementById('timestamp61').innerHTML = timestamp1;
    $( "#mcode7" ).focus();

    }else if(input6 == 'ls'){
    document.getElementById("section").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform7\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode7\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp7').innerHTML = mtimestamp6;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode7" ).focus();
  
   }else if(input6 == 'expertise'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Social Engineering</p><p class=\"m-catex-p2\">Anti-Phishing</p><p class=\"m-catex-p3\">Incident Response</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Penetration Testing</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Vulnerability Assessment</p><p class=\"m-catex-p9\">Scripting and Development</p><p class=\"m-catex-p10\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform7\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode7\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp8').innerHTML = mtimestamp6;
    // document.getElementById('timestamp81').innerHTML = timestamp1;
    $( "#mcode7" ).focus();

   }else if(input6 == 'contact'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"catcon-p1\"><a href=\"mailto:trevordeonmpofu@gmail.com\">Google</a></p><p class=\"catcon-p2\"><a href=\"https://twitter.com/DeonMpofu?ref_src=twsrc%5Etfw\">Twitter</a></p><p class=\"catcon-p3\"><a href=\"https://bw.linkedin.com/in/deon-trevor-mpofu?trk=profile-badge\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform7\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode7\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp9').innerHTML = mtimestamp6;
    // document.getElementById('timestamp91').innerHTML = timestamp1;
    $( "#mcode7" ).focus();
  
   }else if(input6 == 'blog'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id= \"table1 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"timestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform7\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode7\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
    setTimeout(function(){ 
        window.open( 
              "https://blog.syncpundit.ml/", "_blank");
    },5000);
    
    document.getElementById('mtimestamp10').innerHTML = mtimestamp6;
    // document.getElementById('timestamp101').innerHTML = timestamp1;
    $( "#mcode7" ).focus();
   
   }else if(input6 == 'misc'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><tr/><tr><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform7\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode7\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
    // document.getElementById('mtimestamp11').innerHTML = mtimestamp1;
    // document.getElementById('timestamp111').innerHTML = timestamp1;
    $( "#mcode7" ).focus();
  
  }else if(input6 == 'revshell'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"timestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform7\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode7\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp13').innerHTML = mtimestamp6;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode7" ).focus();
  }else{
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"timestamp13\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform7\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode7\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp12').innerHTML = mtimestamp6;
    // document.getElementById('timestamp121').innerHTML = timestamp1;
    $( "#mcode7" ).focus();
    
   }
};

//Function seven

function function07M(){
  $("#mform7").submit(function(e) {
    e.preventDefault();
  });
    var input7 = $('#mcode7').val();
    var today7 = new Date();
    var mtimestamp7 = today7.getHours() + ":" + today7.getMinutes();
    $('#mcode7').blur();
    
    // console.log($('#toptable2').height());
    // console.log($('#codin').height())
    // if($('#codin').height() > 300 ){
    //   $('#toptable2').hide();
    // }
    if(input7 == 'whoami'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform8\"><input class=\"about-s-form\" type=\"text\" id=\"mcode8\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>"); 
    document.getElementById('mtimestamp6').innerHTML = mtimestamp7;
    // document.getElementById('timestamp61').innerHTML = timestamp1;
    $( "#mcode8" ).focus();

    }else if(input7 == 'ls'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform8\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode8\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp7').innerHTML = mtimestamp7;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode8" ).focus();
  
   }else if(input7 == 'expertise'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Social Engineering</p><p class=\"m-catex-p2\">Anti-Phishing</p><p class=\"m-catex-p3\">Incident Response</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Penetration Testing</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Vulnerability Assessment</p><p class=\"m-catex-p9\">Scripting and Development</p><p class=\"m-catex-p10\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform8\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode8\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp8').innerHTML = mtimestamp7;
    // document.getElementById('timestamp81').innerHTML = timestamp1;
    $( "#mcode8" ).focus();

   }else if(input7 == 'contact'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"catcon-p1\"><a href=\"mailto:trevordeonmpofu@gmail.com\">Google</a></p><p class=\"catcon-p2\"><a href=\"https://twitter.com/DeonMpofu?ref_src=twsrc%5Etfw\">Twitter</a></p><p class=\"catcon-p3\"><a href=\"https://bw.linkedin.com/in/deon-trevor-mpofu?trk=profile-badge\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform8\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode8\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp9').innerHTML = mtimestamp7;
    // document.getElementById('timestamp91').innerHTML = timestamp1;
    $( "#mcode8" ).focus();
  
   }else if(input7 == 'blog'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id= \"table1 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"timestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform8\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode8\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
    setTimeout(function(){ 
        window.open( 
              "https://blog.syncpundit.ml/", "_blank");
    },5000);
    
    document.getElementById('mtimestamp10').innerHTML = mtimestamp7;
    // document.getElementById('timestamp101').innerHTML = timestamp1;
    $( "#mcode8" ).focus();
   
   }else if(input7 == 'misc'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><tr/><tr><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform8\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode8\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
    // document.getElementById('mtimestamp11').innerHTML = mtimestamp1;
    // document.getElementById('timestamp111').innerHTML = timestamp1;
    $( "#mcode8" ).focus();
  
  }else if(input7 == 'revshell'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"timestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform8\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode8\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp13').innerHTML = mtimestamp7;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode8" ).focus();
  }else{
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"timestamp13\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform8\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode8\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp12').innerHTML = mtimestamp7;
    // document.getElementById('timestamp121').innerHTML = timestamp1;
    $( "#mcode8" ).focus();
    
   }
};
//Function eight

function function08M(){
  $("#mform8").submit(function(e) {
    e.preventDefault();
  });
    var input8 = $('#mcode8').val();
    var today8 = new Date();
    var mtimestamp8 = today8.getHours() + ":" + today8.getMinutes();
    $('#mcode8').blur();
    if(input8 == 'whoami'){
    document.getElementById("msection").insertAdjacentHTML("afterend<table id=\"table1\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input class=\"about-s-form\" type=\"text\" id=\"mcode9\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>"); 
    document.getElementById('mtimestamp6').innerHTML = mtimestamp8;
    // document.getElementById('timestamp61').innerHTML = timestamp1;
    $( "#mcode9" ).focus();

    }else if(input8 == 'ls'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode9\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp7').innerHTML = mtimestamp8;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode9" ).focus();
  
   }else if(input8 == 'expertise'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Social Engineering</p><p class=\"m-catex-p2\">Anti-Phishing</p><p class=\"m-catex-p3\">Incident Response</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Penetration Testing</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Vulnerability Assessment</p><p class=\"m-catex-p9\">Scripting and Development</p><p class=\"m-catex-p10\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp8').innerHTML = mtimestamp8;
    // document.getElementById('timestamp81').innerHTML = timestamp1;
    $( "#mcode9" ).focus();

   }else if(input8 == 'contact'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"catcon-p1\"><a href=\"mailto:trevordeonmpofu@gmail.com\">Google</a></p><p class=\"catcon-p2\"><a href=\"https://twitter.com/DeonMpofu?ref_src=twsrc%5Etfw\">Twitter</a></p><p class=\"catcon-p3\"><a href=\"https://bw.linkedin.com/in/deon-trevor-mpofu?trk=profile-badge\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp9').innerHTML = mtimestamp8;
    // document.getElementById('timestamp91').innerHTML = timestamp1;
    $( "#mcode9" ).focus();
  
   }else if(input8 == 'blog'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id= \"table1 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"timestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    setTimeout(function(){ 
        window.open( 
              "https://blog.syncpundit.ml/", "_blank");
    },5000);
    
    document.getElementById('mtimestamp10').innerHTML = mtimestamp8;
    // document.getElementById('timestamp101').innerHTML = timestamp1;
    $( "#mcode9" ).focus();
   
   }else if(input8 == 'misc'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><tr/><tr><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td><td><form action=\"\" id=\"mform9\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    // document.getElementById('mtimestamp11').innerHTML = mtimestamp1;
    // document.getElementById('timestamp111').innerHTML = timestamp1;
    $( "#mcode9" ).focus();
  
  }else if(input8 == 'revshell'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"timestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode9\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp13').innerHTML = mtimestamp8;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode9" ).focus();
  }else{
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"timestamp13\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode9\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp12').innerHTML = mtimestamp8;
    // document.getElementById('timestamp121').innerHTML = timestamp1;
    $( "#mcode9" ).focus();
    
   }
};
//Function nine

function function09M(){
  $("#mform9").submit(function(e) {
    e.preventDefault();
  });
    var input9 = $('#mcode9').val();
    var today9 = new Date();
    var mtimestamp9 = today9.getHours() + ":" + today9.getMinutes();
    $('#mcode9').blur();
    if(input9 == 'whoami'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input class=\"about-s-form\" type=\"text\" id=\"mcode9\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>"); 
    document.getElementById('mtimestamp6').innerHTML = mtimestamp9;
    // document.getElementById('timestamp61').innerHTML = timestamp1;
    $( "#mcode9" ).focus();

    }else if(input9 == 'ls'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode9\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp7').innerHTML = mtimestamp9;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode9" ).focus();
  
   }else if(input9 == 'expertise'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span><span id=\"timestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Social Engineering</p><p class=\"m-catex-p2\">Anti-Phishing</p><p class=\"m-catex-p3\">Incident Response</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Penetration Testing</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Vulnerability Assessment</p><p class=\"m-catex-p9\">Scripting and Development</p><p class=\"m-catex-p10\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp8').innerHTML = mtimestamp9;
    // document.getElementById('timestamp81').innerHTML = timestamp1;
    $( "#mcode9" ).focus();

   }else if(input9 == 'contact'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"catcon-p1\"><a href=\"mailto:trevordeonmpofu@gmail.com\">Google</a></p><p class=\"catcon-p2\"><a href=\"https://twitter.com/DeonMpofu?ref_src=twsrc%5Etfw\">Twitter</a></p><p class=\"catcon-p3\"><a href=\"https://bw.linkedin.com/in/deon-trevor-mpofu?trk=profile-badge\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp9').innerHTML = mtimestamp9;
    // document.getElementById('timestamp91').innerHTML = timestamp1;
    $( "#mcode9" ).focus();
  
   }else if(input9 == 'blog'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id= \"table1 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"timestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    setTimeout(function(){ 
        window.open( 
              "https://blog.syncpundit.ml/", "_blank");
    },5000);
    
    document.getElementById('mtimestamp10').innerHTML = mtimestamp9;
    // document.getElementById('timestamp101').innerHTML = timestamp1;
    $( "#mcode9" ).focus();
   
   }else if(input9 == 'misc'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><tr/><tr><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    // document.getElementById('mtimestamp11').innerHTML = mtimestamp1;
    // document.getElementById('timestamp111').innerHTML = timestamp1;
    $( "#mcode9" ).focus();
  
  }else if(input9 == 'revshell'){
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"timestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode9\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp13').innerHTML = mtimestamp9;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode9" ).focus();
  }else{
    document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"table1\"><tr><td><span class=\"\"><span id=\"timestamp13\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode9\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp12').innerHTML = mtimestamp9;
    // document.getElementById('timestamp121').innerHTML = timestamp1;
    $( "#mcode9" ).focus();
    
   }
};