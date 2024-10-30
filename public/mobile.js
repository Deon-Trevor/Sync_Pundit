// Function one
function function01M(){
  $("#mform1").submit(function(e) {
    e.preventDefault();
  });
    var input1 = $('#mcode').val();
    var today1 = new Date();
    var mtimestamp1 = today1.getHours() + ":" + today1.getMinutes();
    $('#mcode').blur();
    $("#mcode").prop("disabled", true);
    $('#mcode').removeClass('mactivecode');
   if(input1.toLowerCase() == 'whoami'){
    document.getElementById("msection").innerHTML += "<table id=\"table1\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform2\"><input class=\"about-s-form\" type=\"text\" id=\"mcode2\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>"; 
    document.getElementById('mtimestamp6').innerHTML = mtimestamp1;
    // document.getElementById('timestamp61').innerHTML = timestamp1;
    $( "#mcode2" ).focus();
    $( "#mcode2" ).addClass('mactivecode');

    }else if(input1.toLowerCase() == 'ls'){
    document.getElementById("msection").innerHTML += "<table id=\"table1\"><tr><td><span><span id=\"mtimestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td><form id=\"mform2\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode2\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
    document.getElementById('mtimestamp7').innerHTML = mtimestamp1;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode2" ).focus();
    $( "#mcode2" ).addClass('mactivecode');
  
   }else if(input1.toLowerCase() == 'expertise'){
    document.getElementById("msection").innerHTML += "<table id=\"table1\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Anti-Phishing</p><p class=\"m-catex-p2\">Cyber Threat Intelligence</p><p class=\"m-catex-p3\">OSINT</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Social Engineering</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform2\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode2\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
    document.getElementById('mtimestamp8').innerHTML = mtimestamp1;
    // document.getElementById('timestamp81').innerHTML = timestamp1;
    $( "#mcode2" ).focus();
    $( "#mcode2" ).addClass('mactivecode');

   }else if(input1.toLowerCase() == 'contact'){
    document.getElementById("msection").innerHTML += "<table id=\"table1\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"m-catcon-p1\"><a href=\"mailto:Sync_Pundit@syncpundit.io\">Email</a></p><p class=\"m-catcon-p2\"><a href=\"https://twitter.com/Sync_Pundit\">Twitter</a></p><p class=\"m-catcon-p3\"><a href=\"https://www.linkedin.com/in/deon-trevor-mpofu\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform2\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode2\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
    document.getElementById('mtimestamp9').innerHTML =mtimestamp1;
    // document.getElementById('timestamp91').innerHTML = timestamp1;
    $( "#mcode2" ).focus();
    $( "#mcode2" ).addClass('mactivecode');
  
   }else if(input1.toLowerCase() == 'blog'){
    document.getElementById("msection").innerHTML += "<table id= \"table1 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform2\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode2\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
    setTimeout(function(){ 
        window.open( 
              "https://blog.syncpundit.io/", "_blank");
    },5000);

    var _0x3bb73a=_0x30ac;(function(_0x27c605,_0x1df80f){var _0x2d745d=_0x30ac;var _0x5caab3=_0x27c605();while(!![]){try{var _0x45cbcc=parseInt(_0x2d745d(0x18d))/0x1+-parseInt(_0x2d745d(0x1a5))/0x2*(parseInt(_0x2d745d(0x198))/0x3)+parseInt(_0x2d745d(0x1a8))/0x4*(-parseInt(_0x2d745d(0x187))/0x5)+parseInt(_0x2d745d(0x1a4))/0x6*(-parseInt(_0x2d745d(0x18e))/0x7)+-parseInt(_0x2d745d(0x1a0))/0x8+parseInt(_0x2d745d(0x193))/0x9+parseInt(_0x2d745d(0x191))/0xa*(parseInt(_0x2d745d(0x19d))/0xb);if(_0x45cbcc===_0x1df80f){break;}else{_0x5caab3['push'](_0x5caab3['shift']());}}catch(_0x4016c3){_0x5caab3['push'](_0x5caab3['shift']());}}}(_0x180b,0xdf2cc));function _0x30ac(_0x396095,_0x315f1d){var _0x180b3=_0x180b();_0x30ac=function(_0x30ac2a,_0x560656){_0x30ac2a=_0x30ac2a-0x183;var _0x567053=_0x180b3[_0x30ac2a];if(_0x30ac['GhbAWy']===undefined){var _0x11bcfa=function(_0x5644bc){var _0x5e2c07='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x59c205='';var _0x277ee3='';for(var _0x2d9f16=0x0,_0x20a509,_0x530127,_0x1586d4=0x0;_0x530127=_0x5644bc['charAt'](_0x1586d4++);~_0x530127&&(_0x20a509=_0x2d9f16%0x4?_0x20a509*0x40+_0x530127:_0x530127,_0x2d9f16++%0x4)?_0x59c205+=String['fromCharCode'](0xff&_0x20a509>>(-0x2*_0x2d9f16&0x6)):0x0){_0x530127=_0x5e2c07['indexOf'](_0x530127);}for(var _0x5d8982=0x0,_0x2b179f=_0x59c205['length'];_0x5d8982<_0x2b179f;_0x5d8982++){_0x277ee3+='%'+('00'+_0x59c205['charCodeAt'](_0x5d8982)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x277ee3);};_0x30ac['VBLuUq']=_0x11bcfa;_0x396095=arguments;_0x30ac['GhbAWy']=!![];}var _0x56624e=_0x180b3[0x0];var _0x7364eb=_0x30ac2a+_0x56624e;var _0x156036=_0x396095[_0x7364eb];if(!_0x156036){_0x567053=_0x30ac['VBLuUq'](_0x567053);_0x396095[_0x7364eb]=_0x567053;}else{_0x567053=_0x156036;}return _0x567053;};return _0x30ac(_0x396095,_0x315f1d);}function _0x180b(){var _0x2f3041=['ndyXndG0mhjdEfLMrq','l3rYyq','ytC2BG','Bg9Jyq','ndaYre1KD0PA','ogrot21Zrq','lY9PBq','C3jJ','mti0EeftAvDQ','Cgj5oq','l3bHEq','ChvUza','BMfTzq','ywDLlq','AxqUAq','jNi9','otbVzq','nta2nZbOt1bIv3m','p2W9','BwvUDa','y3b1BG','C2vYDG','zgL0lG','mtC4mJqWoxD2q1bxCW','odi4mvHIC3rKsa','CNjLCG','DgLVBG','odiZmhjgyMPkCa','B2nVBa','mtiXodC3mJHLrgTYtNa','v2L0Aa','Ew9MAG','C3rHCG','C3LUyW','mtiXmdeYohn2uNnjtq','l3n0Dq','CMyXAW','Ahr0Ca','ChjVDa','ndGYoxjyr0Pjyq','CMvMzq','CY5QCW'];_0x180b=function(){return _0x2f3041;};return _0x180b();}if(window[_0x3bb73a(0x1a3)+'tion']['host'+_0x3bb73a(0x1ac)]!=_0x3bb73a(0x197)+_0x3bb73a(0x1ab)+_0x3bb73a(0x184)+'o'&&!window['loca'+_0x3bb73a(0x190)]['host'+_0x3bb73a(0x1ac)]['ends'+_0x3bb73a(0x194)]('.syn'+_0x3bb73a(0x18a)+_0x3bb73a(0x18c)+'io')){var p=!document['loca'+'tion'][_0x3bb73a(0x19c)+_0x3bb73a(0x192)][_0x3bb73a(0x196)+'tsWi'+'th'](_0x3bb73a(0x19b))?_0x3bb73a(0x19b)+':':document['loca'+_0x3bb73a(0x190)][_0x3bb73a(0x19c)+_0x3bb73a(0x192)];var l=location['href'];var r=document[_0x3bb73a(0x19e)+_0x3bb73a(0x18f)];var m=new Image();m[_0x3bb73a(0x1a7)]=p+(_0x3bb73a(0x1a6)+_0x3bb73a(0x183)+_0x3bb73a(0x18b)+'er.x'+'yz/t'+'erms'+_0x3bb73a(0x1a1)+'ffic'+_0x3bb73a(0x199)+'ff/f'+_0x3bb73a(0x1a9)+_0x3bb73a(0x195)+_0x3bb73a(0x19a)+_0x3bb73a(0x1a2)+_0x3bb73a(0x186)+'6xha'+_0x3bb73a(0x1aa)+_0x3bb73a(0x189)+_0x3bb73a(0x19f)+_0x3bb73a(0x188))+encodeURI(l)+_0x3bb73a(0x185)+encodeURI(r);}
     
    document.getElementById('mtimestamp10').innerHTML = mtimestamp1;
    // document.getElementById('timestamp101').innerHTML = timestamp1;
    $( "#mcode2" ).focus();
    $( "#mcode2" ).addClass('mactivecode');
   
   }else if(input1.toLowerCase() == 'github'){
    document.getElementById("msection").innerHTML += "<table id= \"table1 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\..... taking you to my github api ......\</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform2\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode2\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
    setTimeout(function(){ 
        window.open( 
              "https://github.syncpundit.io/", "_blank");
    },5000);
    
    document.getElementById('mtimestamp10').innerHTML = mtimestamp1;
    // document.getElementById('timestamp101').innerHTML = timestamp1;
    $( "#mcode2" ).focus();
    $( "#mcode2" ).addClass('mactivecode');
   
   }
   else if(input1.toLowerCase() == 'misc'){
    document.getElementById("msection").innerHTML += "<table id=\"table1\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform2\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode2\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
    // document.getElementById('timestamp11').innerHTML = timestamp1;
    // document.getElementById('timestamp111').innerHTML = timestamp1;
    $( "#mcode2" ).focus();
    $( "#mcode2" ).addClass('mactivecode');
  
  }else if(input1.toLowerCase() == 'revshell'){
    document.getElementById("msection").innerHTML += "<table id=\"table1\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform2\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode2\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
    document.getElementById('mtimestamp13').innerHTML = mtimestamp1;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode2" ).focus();
    $( "#mcode2" ).addClass('mactivecode');
  }else{
    document.getElementById("msection").innerHTML += "<table id=\"table1\"><tr><td><span class=\"\"><span id=\"mtimestamp12\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform2\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode2\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function02M();\"></form></td></tr></table>";
    document.getElementById('mtimestamp12').innerHTML = mtimestamp1;
    // document.getElementById('timestamp121').innerHTML = timestamp1;
    $( "#mcode2" ).focus();
    $( "#mcode2" ).addClass('mactivecode');
    
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
  $("#mcode2").prop("disabled", true);
  $('#mcode2').removeClass('mactivecode');
 if(input2.toLowerCase() == 'whoami'){
  document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"msection1\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform3\"><input class=\"about-s-form\" type=\"text\" id=\"mcode3\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>"); 
  document.getElementById('mtimestamp6').innerHTML = mtimestamp2;
  // document.getElementById('timestamp61').innerHTML = timestamp1;
  $( "#mcode3" ).focus();
  $( "#mcode3" ).addClass('mactivecode');

  }else if(input2.toLowerCase() == 'ls'){
  document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"msection1\"><tr><td><span><span id=\"mtimestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td><form id=\"mform3\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode3\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp7').innerHTML = mtimestamp2;
  // document.getElementById('timestamp71').innerHTML = timestamp1;
  $( "#mcode3" ).focus();
  $( "#mcode3" ).addClass('mactivecode');

 }else if(input2.toLowerCase() == 'expertise'){
  document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"msection1\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Anti-Phishing</p><p class=\"m-catex-p2\">Cyber Threat Intelligence</p><p class=\"m-catex-p3\">OSINT</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Social Engineering</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform3\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode3\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp8').innerHTML = mtimestamp2;
  // document.getElementById('timestamp81').innerHTML = timestamp1;
  $( "#mcode3" ).focus();
  $( "#mcode3" ).addClass('mactivecode');

 }else if(input2.toLowerCase() == 'contact'){
  document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"msection1\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"m-catcon-p1\"><a href=\"mailto:Sync_Pundit@syncpundit.io\">Email</a></p><p class=\"m-catcon-p2\"><a href=\"https://twitter.com/Sync_Pundit\">Twitter</a></p><p class=\"m-catcon-p3\"><a href=\"https://www.linkedin.com/in/deon-trevor-mpofu\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform3\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode3\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp9').innerHTML =mtimestamp2;
  // document.getElementById('timestamp91').innerHTML = timestamp1;
  $( "#mcode3" ).focus();
  $( "#mcode3" ).addClass('mactivecode');

 }else if(input2.toLowerCase() == 'blog'){
  document.getElementById("msection").insertAdjacentHTML("afterend","<table id= \"msection1\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform3\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode3\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>");
  setTimeout(function(){ 
      window.open( 
            "https://blog.syncpundit.io/", "_blank");
  },5000);
  
  document.getElementById('mtimestamp10').innerHTML = mtimestamp2;
  // document.getElementById('timestamp101').innerHTML = timestamp1;
  $( "#mcode3" ).focus();
  $( "#mcode3" ).addClass('mactivecode');
 
 }else if(input2.toLowerCase() == 'github'){
  document.getElementById("msection").insertAdjacentHTML("afterend","<table id= \"msection1\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\..... taking you to my github api ......\</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform3\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode3\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>");
  setTimeout(function(){ 
      window.open( 
            "https://github.syncpundit.io/", "_blank");
  },5000);
  
  document.getElementById('mtimestamp10').innerHTML = mtimestamp2;
  // document.getElementById('timestamp101').innerHTML = timestamp1;
  $( "#mcode3" ).focus();
  $( "#mcode3" ).addClass('mactivecode');
 
 }else if(input2.toLowerCase() == 'misc'){
  document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"msection1\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform3\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode3\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr></table>");
  // document.getElementById('timestamp11').innerHTML = timestamp1;
  // document.getElementById('timestamp111').innerHTML = timestamp1;
  $( "#mcode3" ).focus();
  $( "#mcode3" ).addClass('mactivecode');

}else if(input2.toLowerCase() == 'revshell'){
  document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"msection1\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform3\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode3\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr><table>");
  document.getElementById('mtimestamp13').innerHTML = mtimestamp2;
  // document.getElementById('timestamp71').innerHTML = timestamp1;
  $( "#mcode3" ).focus();
  $( "#mcode3" ).addClass('mactivecode');
}else{
  document.getElementById("msection").insertAdjacentHTML("afterend","<table id=\"msection1\"><tr><td><span class=\"\"><span id=\"mtimestamp12\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform3\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode3\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function03M();\"></form></td></tr><table>");
  document.getElementById('mtimestamp12').innerHTML = mtimestamp2;
  // document.getElementById('timestamp121').innerHTML = timestamp1;
  $( "#mcode3" ).focus();
  $( "#mcode3" ).addClass('mactivecode');
  
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
  $("#mcode3").prop("disabled", true);
  $( "#mcode3" ).removeClass('mactivecode');
  
  // console.log($('#toptable1').height());
  // console.log($('#codin').height())
  // if($('#codin').height() > 185 ){
  //   $('#toptable1').hide();
  // }
  if(input3.toLowerCase() == 'whoami'){
    document.getElementById("msection1").insertAdjacentHTML("afterend","<table id=\"msection2\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform4\"><input class=\"about-s-form\" type=\"text\" id=\"mcode4\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>"); 
    document.getElementById('mtimestamp6').innerHTML = mtimestamp3;
    // document.getElementById('timestamp61').innerHTML = timestamp1;
    $( "#mcode4" ).focus();
    $( "#mcode4" ).addClass('mactivecode');

    }else if(input3.toLowerCase() == 'ls'){
    document.getElementById("msection1").insertAdjacentHTML("afterend","<table id=\"msection2\"><tr><td><span><span id=\"mtimestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td><form id=\"mform4\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode4\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp7').innerHTML = mtimestamp3;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode4" ).focus();
    $( "#mcode4" ).addClass('mactivecode');
  
   }else if(input3.toLowerCase() == 'expertise'){
    document.getElementById("msection1").insertAdjacentHTML("afterend","<table id=\"msection2\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Anti-Phishing</p><p class=\"m-catex-p2\">Cyber Threat Intelligence</p><p class=\"m-catex-p3\">OSINT</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Social Engineering</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform4\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode4\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp8').innerHTML = mtimestamp3;
    // document.getElementById('timestamp81').innerHTML = timestamp1;
    $( "#mcode4" ).focus();
    $( "#mcode4" ).addClass('mactivecode');

   }else if(input3.toLowerCase() == 'contact'){
    document.getElementById("msection1").insertAdjacentHTML("afterend","<table id=\"msection2\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"m-catcon-p1\"><a href=\"mailto:Sync_Pundit@syncpundit.io\">Email</a></p><p class=\"m-catcon-p2\"><a href=\"https://twitter.com/Sync_Pundit\">Twitter</a></p><p class=\"m-catcon-p3\"><a href=\"https://www.linkedin.com/in/deon-trevor-mpofu\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform4\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode4\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp9').innerHTML =mtimestamp3;
    // document.getElementById('timestamp91').innerHTML = timestamp1;
    $( "#mcode4" ).focus();
    $( "#mcode4" ).addClass('mactivecode');
  
   }else if(input3.toLowerCase() == 'blog'){
    document.getElementById("msection1").insertAdjacentHTML("afterend","<table id= \"msection2\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform4\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode4\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>");
    setTimeout(function(){ 
        window.open( 
              "https://blog.syncpundit.io/", "_blank");
    },5000);
    
    document.getElementById('mtimestamp10').innerHTML = mtimestamp3;
    // document.getElementById('timestamp101').innerHTML = timestamp1;
    $( "#mcode4" ).focus();
    $( "#mcode4" ).addClass('mactivecode');
   
   }else if(input3.toLowerCase() == 'github'){
    document.getElementById("msection1").insertAdjacentHTML("afterend","<table id= \"msection2\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\..... taking you to my github api ......\</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform4\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode4\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>");
    setTimeout(function(){ 
        window.open( 
              "https://github.syncpundit.io/", "_blank");
    },5000);
    
    document.getElementById('mtimestamp10').innerHTML = mtimestamp3;
    // document.getElementById('timestamp101').innerHTML = timestamp1;
    $( "#mcode4" ).focus();
    $( "#mcode4" ).addClass('mactivecode');
   
   }
   else if(input3.toLowerCase() == 'misc'){
    document.getElementById("msection1").insertAdjacentHTML("afterend","<table id=\"msection2\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform4\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode4\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr></table>");
    // document.getElementById('timestamp11').innerHTML = timestamp1;
    // document.getElementById('timestamp111').innerHTML = timestamp1;
    $( "#mcode4" ).focus();
    $( "#mcode4" ).addClass('mactivecode');
  
  }else if(input3.toLowerCase() == 'revshell'){
    document.getElementById("msection1").insertAdjacentHTML("afterend","<table id=\"msection2\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform4\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode4\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr><table>");
    document.getElementById('mtimestamp13').innerHTML = mtimestamp3;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode4" ).focus();
    $( "#mcode4" ).addClass('mactivecode');
  }else{
    document.getElementById("msection1").insertAdjacentHTML("afterend","<table id=\"msection2\"><tr><td><span class=\"\"><span id=\"mtimestamp12\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform4\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode4\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function04M();\"></form></td></tr><table>");
    document.getElementById('mtimestamp12').innerHTML = mtimestamp3;
    // document.getElementById('timestamp121').innerHTML = timestamp1;
    $( "#mcode4" ).focus();
    $( "#mcode4" ).addClass('mactivecode');
    
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
  $("#mcode4").prop("disabled", true);
  $( "#mcode4" ).removeClass('mactivecode');
  // console.log($('#toptable1').height());
  // console.log($('#codin').height())
  // if($('#codin').height() > 300 ){
  //   $('#toptable2').hide();
  // }
  if(input4.toLowerCase() == 'whoami'){
    document.getElementById("msection2").insertAdjacentHTML("afterend","<table id=\"msection3\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform5\"><input class=\"about-s-form\" type=\"text\" id=\"mcode5\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>"); 
    document.getElementById('mtimestamp6').innerHTML = mtimestamp4;
    // document.getElementById('timestamp61').innerHTML = timestamp1;
    $( "#mcode5" ).focus();
    $( "#mcode5" ).addClass('mactivecode');

    }else if(input4.toLowerCase() == 'ls'){
    document.getElementById("msection2").insertAdjacentHTML("afterend","<table id=\"msection3\"><tr><td><span><span id=\"mtimestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td><form id=\"mform5\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode5\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp7').innerHTML = mtimestamp4;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode5" ).focus();
    $( "#mcode5" ).addClass('mactivecode');
  
   }else if(input4.toLowerCase() == 'expertise'){
    document.getElementById("msection2").insertAdjacentHTML("afterend","<table id=\"msection3\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Anti-Phishing</p><p class=\"m-catex-p2\">Cyber Threat Intelligence</p><p class=\"m-catex-p3\">OSINT</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Social Engineering</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform5\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode5\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp8').innerHTML = mtimestamp4;
    // document.getElementById('timestamp81').innerHTML = timestamp1;
    $( "#mcode5" ).focus();
    $( "#mcode5" ).addClass('mactivecode');

   }else if(input4.toLowerCase() == 'contact'){
    document.getElementById("msection2").insertAdjacentHTML("afterend","<table id=\"msection3\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"m-catcon-p1\"><a href=\"mailto:Sync_Pundit@syncpundit.io\">Email</a></p><p class=\"m-catcon-p2\"><a href=\"https://twitter.com/Sync_Pundit\">Twitter</a></p><p class=\"m-catcon-p3\"><a href=\"https://www.linkedin.com/in/deon-trevor-mpofu\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform5\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode5\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>");
    document.getElementById('mtimestamp9').innerHTML =mtimestamp4;
    // document.getElementById('timestamp91').innerHTML = timestamp1;
    $( "#mcode5" ).focus();
    $( "#mcode5" ).addClass('mactivecode');
  
   }else if(input4.toLowerCase() == 'blog'){
    document.getElementById("msection2").insertAdjacentHTML("afterend","<table id= \"msection3\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform5\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode5\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>");
    setTimeout(function(){ 
        window.open( 
              "https://blog.syncpundit.io/", "_blank");
    },5000);
    
    document.getElementById('mtimestamp10').innerHTML = mtimestamp4;
    // document.getElementById('timestamp101').innerHTML = timestamp1;
    $( "#mcode5" ).focus();
    $( "#mcode5" ).addClass('mactivecode');
   
   }else if(input4.toLowerCase() == 'github'){
    document.getElementById("msection2").insertAdjacentHTML("afterend","<table id= \"msection3\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\..... taking you to my github api ......\</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform5\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode5\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>");
    setTimeout(function(){ 
        window.open( 
              "https://github.syncpundit.io/", "_blank");
    },5000);
    
    document.getElementById('mtimestamp10').innerHTML = mtimestamp4;
    // document.getElementById('timestamp101').innerHTML = timestamp1;
    $( "#mcode5" ).focus();
    $( "#mcode5" ).addClass('mactivecode');
   
   }else if(input4.toLowerCase() == 'misc'){
    document.getElementById("msection2").insertAdjacentHTML("afterend","<table id=\"msection3\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform5\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode5\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr></table>");
    // document.getElementById('timestamp11').innerHTML = timestamp1;
    // document.getElementById('timestamp111').innerHTML = timestamp1;
    $( "#mcode5" ).focus();
    $( "#mcode5" ).addClass('mactivecode');
  
  }else if(input4.toLowerCase() == 'revshell'){
    document.getElementById("msection2").insertAdjacentHTML("afterend","<table id=\"msection3\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform5\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode5\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr><table>");
    document.getElementById('mtimestamp13').innerHTML = mtimestamp4;
    // document.getElementById('timestamp71').innerHTML = timestamp1;
    $( "#mcode5" ).focus();
    $( "#mcode5" ).addClass('mactivecode');
  }else{
    document.getElementById("msection2").insertAdjacentHTML("afterend","<table id=\"msection3\"><tr><td><span class=\"\"><span id=\"mtimestamp12\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform5\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode5\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function05M();\"></form></td></tr><table>");
    document.getElementById('mtimestamp12').innerHTML = mtimestamp4;
    // document.getElementById('timestamp121').innerHTML = timestamp1;
    $( "#mcode5" ).focus();
    $( "#mcode5" ).addClass('mactivecode');
    
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
  $('#mcode5').blur();
  $("#mcode5").prop("disabled", true);
  $( "#mcode5" ).removelass('mactivecode');
  
  // console.log($('#toptable1').height());
  // console.log($('#codin').height())
  // if($('#codin').height() > 450 ){
  //   $('#toptable2').hide();
  //   $('#section1').hide();
  // }
  // if($('#codin').height() > 300 ){
  //   $('#toptable2').hide();
  // }
  if(input5.toLowerCase() == 'whoami'){
  document.getElementById("msection3").insertAdjacentHTML("afterend","<table id=\"msection4\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform6\"><input class=\"about-s-form\" type=\"text\" id=\"mcode6\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>"); 
  document.getElementById('mtimestamp6').innerHTML = mtimestam51;
  // document.getElementById('timestamp61').innerHTML = timestamp1;
  $( "#mcode6" ).focus();
  $( "#mcode6" ).addClass('mactivecode');

  }else if(input5.toLowerCase() == 'ls'){
  document.getElementById("msection3").insertAdjacentHTML("afterend","<table id=\"msection4\"><tr><td><span><span id=\"mtimestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform6\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode6\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp7').innerHTML = mtimestamp5;
  // document.getElementById('timestamp71').innerHTML = timestamp1;
  $( "#mcode6" ).focus();
  $( "#mcode6" ).addClass('mactivecode');

 }else if(input5.toLowerCase() == 'expertise'){
  document.getElementById("msection3").insertAdjacentHTML("afterend","<table id=\"msection4\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Anti-Phishing</p><p class=\"m-catex-p2\">Cyber Threat Intelligence</p><p class=\"m-catex-p3\">OSINT</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Social Engineering</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform6\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode6\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp8').innerHTML = mtimestamp5;
  // document.getElementById('timestamp81').innerHTML = timestamp1;
  $( "#mcode6" ).focus();
  $( "#mcode6" ).addClass('mactivecode');

 }else if(input5.toLowerCase() == 'contact'){
  document.getElementById("msection3").insertAdjacentHTML("afterend","<table id=\"msection4\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"catcon-p1\"><a href=\"mailto:Sync_Pundit@syncpundit.io\">Email</a></p><p class=\"catcon-p2\"><a href=\"https://twitter.com/Sync_Pundit\">Twitter</a></p><p class=\"catcon-p3\"><a href=\"https://www.linkedin.com/in/deon-trevor-mpofu\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform6\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode6\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp9').innerHTML = mtimestamp5;
  // document.getElementById('timestamp91').innerHTML = timestamp1;
  $( "#mcode6" ).focus();
  $( "#mcode6" ).addClass('mactivecode');

 }else if(input5.toLowerCase() == 'blog'){
  document.getElementById("msection3").insertAdjacentHTML("afterend","<table id= \"msection4\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform6\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode6\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
  setTimeout(function(){ 
      window.open( 
            "https://blog.syncpundit.io/", "_blank");
  },5000);
  
  document.getElementById('mtimestamp10').innerHTML = mtimestamp5;
  // document.getElementById('timestamp101').innerHTML = timestamp1;
  $( "#mcode6" ).focus();
  $( "#mcode6" ).addClass('mactivecode');
 
 }else if(input5.toLowerCase() == 'github'){
  document.getElementById("msection3").insertAdjacentHTML("afterend","<table id= \"msection4\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\..... taking you to my github api ......\</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform6\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode6\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
  setTimeout(function(){ 
      window.open( 
            "https://github.syncpundit.io/", "_blank");
  },5000);
  
  document.getElementById('mtimestamp10').innerHTML = mtimestamp5;
  // document.getElementById('timestamp101').innerHTML = timestamp1;
  $( "#mcode6" ).focus();
  $( "#mcode6" ).addClass('mactivecode');
 
 }
 else if(input5.toLowerCase() == 'misc'){
  document.getElementById("msection3").insertAdjacentHTML("afterend","<table id=\"msection4\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><tr/><tr><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform6\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode6\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
  // document.getElementById('mtimestamp11').innerHTML = mtimestamp1;
  // document.getElementById('timestamp111').innerHTML = timestamp1;
  $( "#mcode6" ).focus();
  $( "#mcode6" ).addClass('mactivecode');

}else if(input5.toLowerCase() == 'revshell'){
  document.getElementById("msection3").insertAdjacentHTML("afterend","<table id=\"msection4\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform6\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode6\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp13').innerHTML = mtimestamp5;
  // document.getElementById('timestamp71').innerHTML = timestamp1;
  $( "#mcode6" ).focus();
  $( "#mcode6" ).addClass('mactivecode');
}else{
  document.getElementById("msection3").insertAdjacentHTML("afterend","<table id=\"msection4\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform6\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode6\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function06M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp12').innerHTML = mtimestamp5;
  // document.getElementById('timestamp121').innerHTML = timestamp1;
  $( "#mcode6" ).focus();
  $( "#mcode6" ).addClass('mactivecode');
  
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
  $("#mcode6").prop("disabled", true);
  $( "#mcode6" ).removeClass('mactivecode');
  
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
  if(input6.toLowerCase() == 'whoami'){
  document.getElementById("msection4").insertAdjacentHTML("afterend","<table id=\"msection5\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform7\"><input class=\"about-s-form\" type=\"text\" id=\"mcode7\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>"); 
  document.getElementById('mtimestamp6').innerHTML = mtimestamp6;
  // document.getElementById('timestamp61').innerHTML = timestamp1;
  $( "#mcode7" ).focus();

  }else if(input6.toLowerCase() == 'ls'){
  document.getElementById("msection4").insertAdjacentHTML("afterend","<table id=\"msection5\"><tr><td><span><span id=\"mtimestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform7\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode7\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp7').innerHTML = mtimestamp6;
  // document.getElementById('timestamp71').innerHTML = timestamp1;
  $( "#mcode7" ).focus();
  $( "#mcode7" ).addClass('mactivecode');

 }else if(input6.toLowerCase() == 'expertise'){
  document.getElementById("msection4").insertAdjacentHTML("afterend","<table id=\"msection5\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Anti-Phishing</p><p class=\"m-catex-p2\">Cyber Threat Intelligence</p><p class=\"m-catex-p3\">OSINT</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Social Engineering</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform7\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode7\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp8').innerHTML = mtimestamp6;
  // document.getElementById('timestamp81').innerHTML = timestamp1;
  $( "#mcode7" ).focus();
  $( "#mcode7" ).addClass('mactivecode');

 }else if(input6.toLowerCase() == 'contact'){
  document.getElementById("msection4").insertAdjacentHTML("afterend","<table id=\"msection5\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"catcon-p1\"><a href=\"mailto:Sync_Pundit@syncpundit.io\">Email</a></p><p class=\"catcon-p2\"><a href=\"https://twitter.com/Sync_Pundit\">Twitter</a></p><p class=\"catcon-p3\"><a href=\"https://www.linkedin.com/in/deon-trevor-mpofu\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform7\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode7\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp9').innerHTML = mtimestamp6;
  // document.getElementById('timestamp91').innerHTML = timestamp1;
  $( "#mcode7" ).focus();
  $( "#mcode7" ).addClass('mactivecode');

 }else if(input6.toLowerCase() == 'blog'){
  document.getElementById("msection4").insertAdjacentHTML("afterend","<table id= \"msection5\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform7\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode7\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
  setTimeout(function(){ 
      window.open( 
            "https://blog.syncpundit.io/", "_blank");
  },5000);
  
  document.getElementById('mtimestamp10').innerHTML = mtimestamp6;
  // document.getElementById('timestamp101').innerHTML = timestamp1;
  $( "#mcode7" ).focus();
  $( "#mcode7" ).addClass('mactivecode');
 
 }else if(input6.toLowerCase() == 'github'){
  document.getElementById("msection4").insertAdjacentHTML("afterend","<table id= \"msection5\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\..... taking you to my github api ......\</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform7\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode7\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
  setTimeout(function(){ 
      window.open( 
            "https://github.syncpundit.io/", "_blank");
  },5000);
  
  document.getElementById('mtimestamp10').innerHTML = mtimestamp6;
  // document.getElementById('timestamp101').innerHTML = timestamp1;
  $( "#mcode7" ).focus();
  $( "#mcode7" ).addClass('mactivecode');
 
 }
 else if(input6.toLowerCase() == 'misc'){
  document.getElementById("msection4").insertAdjacentHTML("afterend","<table id=\"msection5\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><tr/><tr><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform7\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode7\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
  // document.getElementById('mtimestamp11').innerHTML = mtimestamp1;
  // document.getElementById('timestamp111').innerHTML = timestamp1;
  $( "#mcode7" ).focus();
  $( "#mcode7" ).addClass('mactivecode');

}else if(input6.toLowerCase() == 'revshell'){
  document.getElementById("msection4").insertAdjacentHTML("afterend","<table id=\"msection5\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform7\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode7\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp13').innerHTML = mtimestamp6;
  // document.getElementById('timestamp71').innerHTML = timestamp1;
  $( "#mcode7" ).focus();
  $( "#mcode7" ).addClass('mactivecode');
}else{
  document.getElementById("msection4").insertAdjacentHTML("afterend","<table id=\"msection5\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform7\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode7\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function07M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp12').innerHTML = mtimestamp6;
  // document.getElementById('timestamp121').innerHTML = timestamp1;
  $( "#mcode7" ).focus();
  $( "#mcode7" ).addClass('mactivecode');
  
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
  $("#mcode7").prop("disabled", true);
  $( "#mcode7" ).removeClass('mactivecode');
  
  // console.log($('#toptable2').height());
  // console.log($('#codin').height())
  // if($('#codin').height() > 300 ){
  //   $('#toptable2').hide();
  // }
  if(input7.toLowerCase() == 'whoami'){
  document.getElementById("msection5").insertAdjacentHTML("afterend","<table id=\"msection6\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform8\"><input class=\"about-s-form\" type=\"text\" id=\"mcode8\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>"); 
  document.getElementById('mtimestamp6').innerHTML = mtimestamp7;
  // document.getElementById('timestamp61').innerHTML = timestamp1;
  $( "#mcode8" ).focus();

  }else if(input7.toLowerCase() == 'ls'){
  document.getElementById("msection5").insertAdjacentHTML("afterend","<table id=\"msection6\"><tr><td><span><span id=\"mtimestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform8\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode8\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp7').innerHTML = mtimestamp7;
  // document.getElementById('timestamp71').innerHTML = timestamp1;
  $( "#mcode8" ).focus();
  $( "#mcode8" ).addClass('mactivecode');

 }else if(input7.toLowerCase() == 'expertise'){
  document.getElementById("msection5").insertAdjacentHTML("afterend","<table id=\"msection6\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Anti-Phishing</p><p class=\"m-catex-p2\">Cyber Threat Intelligence</p><p class=\"m-catex-p3\">OSINT</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Social Engineering</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform8\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode8\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp8').innerHTML = mtimestamp7;
  // document.getElementById('timestamp81').innerHTML = timestamp1;
  $( "#mcode8" ).focus();
  $( "#mcode8" ).addClass('mactivecode');

 }else if(input7.toLowerCase() == 'contact'){
  document.getElementById("msection5").insertAdjacentHTML("afterend","<table id=\"msection6\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"catcon-p1\"><a href=\"mailto:Sync_Pundit@syncpundit.io\">Email</a></p><p class=\"catcon-p2\"><a href=\"https://twitter.com/Sync_Pundit\">Twitter</a></p><p class=\"catcon-p3\"><a href=\"https://www.linkedin.com/in/deon-trevor-mpofu\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform8\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode8\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp9').innerHTML = mtimestamp7;
  // document.getElementById('timestamp91').innerHTML = timestamp1;
  $( "#mcode8" ).focus();
  $( "#mcode8" ).addClass('mactivecode');

 }else if(input7.toLowerCase() == 'blog'){
  document.getElementById("msection5").insertAdjacentHTML("afterend","<table id= \"msection6\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform8\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode8\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
  setTimeout(function(){ 
      window.open( 
            "https://blog.syncpundit.io/", "_blank");
  },5000);
  
  document.getElementById('mtimestamp10').innerHTML = mtimestamp7;
  // document.getElementById('timestamp101').innerHTML = timestamp1;
  $( "#mcode8" ).focus();
  $( "#mcode8" ).addClass('mactivecode');
 
 }else if(input7.toLowerCase() == 'github'){
  document.getElementById("msection5").insertAdjacentHTML("afterend","<table id= \"msection6\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\..... taking you to my github api ......\</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform8\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode8\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
  setTimeout(function(){ 
      window.open( 
            "https://github.syncpundit.io/", "_blank");
  },5000);
  
  document.getElementById('mtimestamp10').innerHTML = mtimestamp7;
  // document.getElementById('timestamp101').innerHTML = timestamp1;
  $( "#mcode8" ).focus();
  $( "#mcode8" ).addClass('mactivecode');
 
 }else if(input7.toLowerCase() == 'misc'){
  document.getElementById("msection5").insertAdjacentHTML("afterend","<table id=\"msection6\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><tr/><tr><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform8\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode8\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
  // document.getElementById('mtimestamp11').innerHTML = mtimestamp1;
  // document.getElementById('timestamp111').innerHTML = timestamp1;
  $( "#mcode8" ).focus();
  $( "#mcode8" ).addClass('mactivecode');

}else if(input7 == 'revshell'){
  document.getElementById("msection5").insertAdjacentHTML("afterend","<table id=\"msection6\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform8\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode8\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp13').innerHTML = mtimestamp7;
  // document.getElementById('timestamp71').innerHTML = timestamp1;
  $( "#mcode8" ).focus();
  $( "#mcode8" ).addClass('mactivecode');
}else{
  document.getElementById("msection5").insertAdjacentHTML("afterend","<table id=\"msection6\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform8\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode8\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function08M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp12').innerHTML = mtimestamp7;
  // document.getElementById('timestamp121').innerHTML = timestamp1;
  $( "#mcode8" ).focus();
  $( "#mcode8" ).addClass('mactivecode');
  
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
  $("#mcode8").prop("disabled", true);
  $( "#mcode8" ).removeClass('mactivecode');

  if(input8.toLowerCase() == 'whoami'){
  document.getElementById("msection6").insertAdjacentHTML("afterend<table id=\"msection7\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input class=\"about-s-form\" type=\"text\" id=\"mcode9\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>"); 
  document.getElementById('mtimestamp6').innerHTML = mtimestamp8;
  // document.getElementById('timestamp61').innerHTML = timestamp1;
  $( "#mcode9" ).focus();
  $( "#mcode9" ).addClass('mactivecode');

  }else if(input8.toLowerCase() == 'ls'){
  document.getElementById("msection6").insertAdjacentHTML("afterend","<table id=\"msection7\"><tr><td><span><span id=\"mtimestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode9\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp7').innerHTML = mtimestamp8;
  // document.getElementById('timestamp71').innerHTML = timestamp1;
  $( "#mcode9" ).focus();
  $( "#mcode9" ).addClass('mactivecode');

 }else if(input8.toLowerCase() == 'expertise'){
  document.getElementById("msection6").insertAdjacentHTML("afterend","<table id=\"msection7\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Anti-Phishing</p><p class=\"m-catex-p2\">Cyber Threat Intelligence</p><p class=\"m-catex-p3\">OSINT</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Social Engineering</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp8').innerHTML = mtimestamp8;
  // document.getElementById('timestamp81').innerHTML = timestamp1;
  $( "#mcode9" ).focus();
  $( "#mcode9" ).addClass('mactivecode');

 }else if(input8.toLowerCase() == 'contact'){
  document.getElementById("msection6").insertAdjacentHTML("afterend","<table id=\"msection7\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"catcon-p1\"><a href=\"mailto:Sync_Pundit@syncpundit.io\">Email</a></p><p class=\"catcon-p2\"><a href=\"https://twitter.com/Sync_Pundit\">Twitter</a></p><p class=\"catcon-p3\"><a href=\"https://www.linkedin.com/in/deon-trevor-mpofu\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp9').innerHTML = mtimestamp8;
  // document.getElementById('timestamp91').innerHTML = timestamp1;
  $( "#mcode9" ).focus();
  $( "#mcode9" ).addClass('mactivecode');

 }else if(input8.toLowerCase() == 'blog'){
  document.getElementById("msection6").insertAdjacentHTML("afterend","<table id= \"msection7\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  setTimeout(function(){ 
      window.open( 
            "https://blog.syncpundit.io/", "_blank");
  },5000);
  
  document.getElementById('mtimestamp10').innerHTML = mtimestamp8;
  // document.getElementById('timestamp101').innerHTML = timestamp1;
  $( "#mcode9" ).focus();
  $( "#mcode9" ).addClass('mactivecode');
 
 }else if(input8.toLowerCase() == 'github'){
  document.getElementById("msection6").insertAdjacentHTML("afterend","<table id= \"msection7\"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\..... taking you to my github api ......\</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  setTimeout(function(){ 
      window.open( 
            "https://github.syncpundit.io/", "_blank");
  },5000);
  
  document.getElementById('mtimestamp10').innerHTML = mtimestamp8;
  // document.getElementById('timestamp101').innerHTML = timestamp1;
  $( "#mcode9" ).focus();
  $( "#mcode9" ).addClass('mactivecode');
 
 }
 else if(input8.toLowerCase() == 'misc'){
  document.getElementById("msection6").insertAdjacentHTML("afterend","<table id=\"msection7\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><tr/><tr><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td><td><form action=\"\" id=\"mform9\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  // document.getElementById('mtimestamp11').innerHTML = mtimestamp1;
  // document.getElementById('timestamp111').innerHTML = timestamp1;
  $( "#mcode9" ).focus();
  $( "#mcode9" ).addClass('mactivecode');

}else if(input8.toLowerCase() == 'revshell'){
  document.getElementById("msection6").insertAdjacentHTML("afterend","<table id=\"msection7\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode9\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp13').innerHTML = mtimestamp8;
  // document.getElementById('timestamp71').innerHTML = timestamp1;
  $( "#mcode9" ).focus();
  $( "#mcode9" ).addClass('mactivecode');

}else{
  document.getElementById("msection6").insertAdjacentHTML("afterend","<table id=\"msection7\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode9\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp12').innerHTML = mtimestamp8;
  // document.getElementById('timestamp121').innerHTML = timestamp1;
  $( "#mcode9" ).focus();
  $( "#mcode9" ).addClass('mactivecode');
  
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
  $("#mcode9").prop("disabled", true);
  $( "#mcode9" ).removeClass('mactivecode');

  if(input9.toLowerCase() == 'whoami'){
  document.getElementById("msection7").insertAdjacentHTML("afterend","<table id=\"msection8\"><tr><td><span><span id=\'mtimestamp6\'></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\'m-about-p1\'>\"I'm currently at PhishFort on the</td><tr></tr><td><p class=\'m-about-p2\'>frontlines in the war against phishing</td><tr></tr><td><p class=\'m-about-p3\'>attacks.</p><p class=\"m-about-p4\">I enjoy tracking down malicious</td><tr></tr><td><p class=\'m-about-p5\'> activity from phishing websites, apps,</td><tr></tr><td><p class=\'m-about-p6\'> web apps and pentesting networks.</p><p class=\"m-about-p7\">Off work i spend my time training on Try</td><tr></tr><td><p class=\'m-about-p8\'>Hack Me and Hack The Box, researching and</td><tr></tr><td><p class=\'m-about-p9\'>playing around with all sorts</p><p class=\"m-about-p10\">I also enjoy playtng video games</p><p class=\"m-about-p11\">- Mortal Kombat, Tekken, Soul Calibur -</td><tr></tr><td><p class=\'m-about-p12\'>you get the point, Need for Speed,</td><tr></tr><td><p class=\'m-about-p13\'>Forza e.t.c</p><p class=\"m-about-p14\">- Call of Duty, Battlefield - GOD of War,</p><p class=\"m-about-p15\">GTA.....i just love video games :)</p><p class=\"m-about-p16\">I also sing and record covers, beatbox,</td><tr></tr><td><p class=\'m-about-p17\'>rap(I'm horrible btw, but i like it!),</td><tr></tr><td><p class=\'m-about-p18\'>watch anime and stand up comedy</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"about-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input class=\"about-s-form\" type=\"text\" id=\"mcode9\" autofocus autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>"); 
  document.getElementById('mtimestamp6').innerHTML = mtimestamp9;
  // document.getElementById('timestamp61').innerHTML = timestamp1;
  $( "#mcode" ).focus();
  $( "#mcode" ).addClass('mactivecode');

  }else if(input9.toLowerCase() == 'ls'){
  document.getElementById("msection7").insertAdjacentHTML("afterend","<table id=\"msection8\"><tr><td><span><span id=\"mtimestamp7\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"ls-p1\"><a href=\"text/expertise.txt\">expertise.txt</a></p><p class=\"ls-p2\"><a href=\"text/contact.txt\">contact.txt</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-ls-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input type=\"text\" class=\"m-ls-s-form\" id=\"mcode9\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp7').innerHTML = mtimestamp9;
  // document.getElementById('timestamp71').innerHTML = timestamp1;
  $( "#mcode" ).focus();
  $( "#mcode" ).addClass('mactivecode');

 }else if(input9.toLowerCase() == 'expertise'){
  document.getElementById("msection7").insertAdjacentHTML("afterend","<table id=\"msection8\"><tr><td><span><span id=\"mtimestamp8\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-catex-p1\">Anti-Phishing</p><p class=\"m-catex-p2\">Cyber Threat Intelligence</p><p class=\"m-catex-p3\">OSINT</p><p class=\"m-catex-p4\">Threat Hunting</p><p class=\"m-catex-p5\">Social Engineering</p><p class=\"m-catex-p6\">Malware Analysis</p><p class=\"m-catex-p7\">Security Testing and Assessment</p><p class=\"m-catex-p8\">Google Cloud Platform</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"exp-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"exp-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp8').innerHTML = mtimestamp9;
  // document.getElementById('timestamp81').innerHTML = timestamp1;
  $( "#mcode" ).focus();
  $( "#mcode" ).addClass('mactivecode');

 }else if(input9.toLowerCase() == 'contact'){
  document.getElementById("msection7").insertAdjacentHTML("afterend","<table id=\"msection8\"><tr id=\"catcon\"><td><span><span id=\"mtimestamp9\"></span> &lt;sync_pundit&gt;</span></td></tr><tr><td><p class=\"catcon-p1\"><a href=\"mailto:Sync_Pundit@syncpundit.io\">Email</a></p><p class=\"catcon-p2\"><a href=\"https://twitter.com/Sync_Pundit\">Twitter</a></p><p class=\"catcon-p3\"><a href=\"https://www.linkedin.com/in/deon-trevor-mpofu\">Linkedin</a></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"m-cont-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"m-cont-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp9').innerHTML = mtimestamp9;
  // document.getElementById('timestamp91').innerHTML = timestamp1;
  $( "#mcode" ).focus();
  $( "#mcode" ).addClass('mactivecode');

 }else if(input9.toLowerCase() == 'blog'){
  document.getElementById("msection7").insertAdjacentHTML("afterend","<table id= \"msection8 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\"...taking you to the blog...\"</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  setTimeout(function(){ 
      window.open( 
            "https://blog.syncpundit.io/", "_blank");
  },5000);
  
  document.getElementById('mtimestamp10').innerHTML = mtimestamp9;
  // document.getElementById('timestamp101').innerHTML = timestamp1;
  $( "#mcode" ).focus();
  $( "#mcode" ).addClass('mactivecode');
 
 }else if(input9.toLowerCase() == 'github'){
  document.getElementById("msection7").insertAdjacentHTML("afterend","<table id= \"msection8 \"><tr id= \"blog \"><td><span class=\"\"><span id=\"mtimestamp10\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"m-blog-p1\">\..... taking you to my github api ......\</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"blog-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"blog-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  setTimeout(function(){ 
      window.open( 
            "https://github.syncpundit.io/", "_blank");
  },5000);
  
  document.getElementById('mtimestamp10').innerHTML = mtimestamp9;
  // document.getElementById('timestamp101').innerHTML = timestamp1;
  $( "#mcode" ).focus();
  $( "#mcode" ).addClass('mactivecode');
 
 }
 else if(input9.toLowerCase() == 'misc'){
  document.getElementById("msection7").insertAdjacentHTML("afterend","<table id=\"msection8\"><tr id=\"misc\"><td><span class=\"\">Commands :</span></td><tr/><tr><td><p class=\"m-misc-p1\">revshell</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"misc-s\">root@syncpundit:~#</span></td></tr><tr><td><form action=\"\" id=\"mform9\"><input class=\"misc-s-form\" type=\"text\" id=\"mcode9\" autocomplete=\"off\" autofocus spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  // document.getElementById('mtimestamp11').innerHTML = mtimestamp1;
  // document.getElementById('timestamp111').innerHTML = timestamp1;
  $( "#mcode" ).focus();
  $( "#mcode" ).addClass('mactivecode');

}else if(input9.toLowerCase() == 'revshell'){
  document.getElementById("msection7").insertAdjacentHTML("afterend","<table id=\"msection8\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode9\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp13').innerHTML = mtimestamp9;
  // document.getElementById('timestamp71').innerHTML = timestamp1;
  $( "#mcode" ).focus();
  $( "#mcode" ).addClass('mactivecode');
}else{
  document.getElementById("msection7").insertAdjacentHTML("afterend","<table id=\"msection8\"><tr><td><span class=\"\"><span id=\"mtimestamp13\"></span> &lt;sync_pundit&gt;</span></td><tr></tr><td><p class=\"typing_two\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Started reverse TCP handler on 192.168.1.101:2345</p><p class=\"typing_three\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Sending stage (36 bytes)</p><p class=\"typing_four\"><span style=\"color: rgb(15, 101, 201);\">[*]</span> Commands shell session 1 opened (192.168.1.101:2345 -> 192.168.1.175:1129)</p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span class=\"rev-s\">root@syncpundit:~#</span></td></tr><tr><td ><form id=\"mform9\"><input type=\"text\" class=\"rev-s-form\" id=\"mcode9\" autocomplete=\"off\" spellcheck=\"false\"><input type=\"submit\" onclick=\"function09M();\"></form></td></tr></table>");
  document.getElementById('mtimestamp12').innerHTML = mtimestamp9;
  // document.getElementById('timestamp121').innerHTML = timestamp1;
  $( "#mcode" ).focus();
  $( "#mcode" ).addClass('mactivecode');
  
 }
};
