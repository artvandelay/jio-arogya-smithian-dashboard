(function(){
  var HASH='558e201d45051f491e66b8e72411f605705a0c6056768f60f7e149dc4ab07c65';
  if(sessionStorage.getItem('_a')==='1'){document.getElementById('_gate').remove();document.getElementById('_content').style.display='';return;}
  var g=document.getElementById('_gate');
  g.style.display='flex';
  function go(){
    var pw=document.getElementById('_pw').value;
    crypto.subtle.digest('SHA-256',new TextEncoder().encode(pw)).then(function(buf){
      var hex=Array.from(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,'0')}).join('');
      if(hex===HASH){sessionStorage.setItem('_a','1');g.remove();document.getElementById('_content').style.display='';}
      else{document.getElementById('_err').style.display='block';document.getElementById('_pw').value='';document.getElementById('_pw').focus();}
    });
  }
  document.getElementById('_go').addEventListener('click',go);
  document.getElementById('_pw').addEventListener('keydown',function(e){if(e.key==='Enter')go();});
})();
