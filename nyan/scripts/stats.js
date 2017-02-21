function getValue(NameOfValue){
    if (document.cookie.length > 0) {
    begin = document.cookie.indexOf(NameOfValue+"=");
    if (begin != -1) {
      begin += NameOfValue.length+1;
      end = document.cookie.indexOf(";", begin);
      if (end == -1) end = document.cookie.length;
        return unescape(document.cookie.substring(begin, end));
    }
  }
  return null;
}

function setValue(NameOfValue, value, expiredays) {
var ExpireDate = new Date ();
ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
document.cookie = NameOfValue + "=" + escape(value) +
((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
}

function remValue (NameOfValue) {
  if (getValue(NameOfValue)) {
    document.cookie = NameOfValue + "=" +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

function popitup500(url) {
  newwindow = window.open(url, 'Store', 'height=500,width=500');
  if (window.focus) {
    newwindow.focus()
  }
  return false;
}

function loadOn() {

  var score_original = eval(getValue('score_original'));
  if (!score_original) {
      var score_original = "0";
  }
  var score_gb = eval(getValue('score_gb'));
  if (!score_gb) {
      var score_gb = "0";
  }
  var score_technyancolor = eval(getValue('score_technyancolor'));
  if (!score_technyancolor) {
      var score_technyancolor = "0";
  }
  var score_jazz = eval(getValue('score_jazz'));
  if (!score_jazz) {
      var score_jazz = "0";
  }
  var score_mexinyan = eval(getValue('score_mexinyan'));
  if (!score_mexinyan) {
      var score_mexinyan = "0";
  }
  var score_j5 = eval(getValue('score_j5'));
  if (!score_j5) {
      var score_j5 = "0";
  }
  var score_nyaninja = eval(getValue('score_nyaninja'));
  if (!score_nyaninja) {
      var score_nyaninja = "0";
  }
  var score_pirate = eval(getValue('score_pirate'));
  if (!score_pirate) {
      var score_pirate = "0";
  }
  var score_elevator = eval(getValue('score_elevator'));
  if (!score_elevator) {
      var score_elevator = "0";
  }
  var score_zombie = eval(getValue('score_zombie'));
  if (!score_zombie) {
      var score_zombie = "0";
  }
  var score_mummy = eval(getValue('score_mummy'));
  if (!score_mummy) {
      var score_mummy = "0";
  }
  var score_pumpkin = eval(getValue('score_pumpkin'));
  if (!score_pumpkin) {
      var score_pumpkin = "0";
  }
  var score_jamaicnyan = eval(getValue('score_jamaicnyan'));
  if (!score_jamaicnyan) {
      var score_jamaicnyan = "0";
  }
  var score_america = eval(getValue('score_america'));
  if (!score_america) {
      var score_america = "0";
  }
  var score_retro = eval(getValue('score_retro'));
  if (!score_retro) {
      var score_retro = "0";
  }
  var score_vday = eval(getValue('score_vday'));
  if (!score_vday) {
      var score_vday = "0";
  }
  var score_sad = eval(getValue('score_sad'));
  if (!score_sad) {
      var score_sad = "0";
  }
  var score_tacnayn = eval(getValue('score_tacnayn'));
  if (!score_tacnayn) {
      var score_tacnayn = "0";
  }
  var score_dub = eval(getValue('score_dub'));
  if (!score_dub) {
      var score_dub = "0";
  }
  var score_slomo = eval(getValue('score_slomo'));
  if (!score_slomo) {
      var score_slomo = "0";
  }
  var score_xmas = eval(getValue('score_xmas'));
  if (!score_xmas) {
      var score_xmas = "0";
  }
  var score_newyear = eval(getValue('score_newyear'));
  if (!score_newyear) {
      var score_newyear = "0";
  }
  var score_fiesta = eval(getValue('score_fiesta'));
  if (!score_fiesta) {
      var score_fiesta = "0";
  }
  var score_easter = eval(getValue('score_easter'));
  if (!score_easter) {
      var score_easter = "0";
  }
  var score_bday = eval(getValue('score_bday'));
  if (!score_bday) {
      var score_bday = "0";
  }
  var score_paddy = eval(getValue('score_paddy'));
  if (!score_paddy) {
      var score_paddy = "0";
  }
  var score_breakfast = eval(getValue('score_breakfast'));
  if (!score_breakfast) {
      var score_breakfast = "0";
  }
  var score_melon = eval(getValue('score_melon'));
  if (!score_melon) {
      var score_melon = "0";
  }
  var score_star = eval(getValue('score_star'));
  if (!score_star) {
      var score_star = "0";
  }
  var score_balloon = eval(getValue('score_balloon'));
  if (!score_balloon) {
      var score_balloon = "0";
  }
  var score_daft = eval(getValue('score_daft'));
  if (!score_daft) {
      var score_daft = "0";
  }
  var score_daft = eval(getValue('score_daft'));
  if (!score_daft) {
      var score_daft = "0";
  }

  document.getElementById('1').innerHTML = 'Original:<div style="float:right;display:inline-block;"> ' + score_original + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_original\')">reset</a>';
  document.getElementById('2').innerHTML = 'Gameboy:<div style="float:right;display:inline-block;"> ' + score_gb + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_gb\')">reset</a>';
  document.getElementById('3').innerHTML = 'Technyancolor:<div style="float:right;display:inline-block;"> ' + score_technyancolor + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_technyancolor\')">reset</a>';
  document.getElementById('4').innerHTML = 'Jazz:<div style="float:right;display:inline-block;"> ' + score_jazz + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_jazz\')">reset</a>';
  document.getElementById('5').innerHTML = 'Mexinyan:<div style="float:right;display:inline-block;"> ' + score_mexinyan + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_mexinyan\')">reset</a>';
  document.getElementById('6').innerHTML = 'Jacksnyan 5:<div style="float:right;display:inline-block;"> ' + score_j5 + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_j5\')">reset</a>';
  document.getElementById('8').innerHTML = 'Nyaninja:<div style="float:right;display:inline-block;"> ' + score_nyaninja + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_nyaninja\')">reset</a>';
  document.getElementById('9').innerHTML = 'Pirate:<div style="float:right;display:inline-block;"> ' + score_pirate + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_pirate\')">reset</a>';
  document.getElementById('10').innerHTML = 'Elevator:<div style="float:right;display:inline-block;"> ' + score_elevator + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_elevator\')">reset</a>';
  document.getElementById('11').innerHTML = 'Zombie:<div style="float:right;display:inline-block;"> ' + score_zombie + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_zombie\')">reset</a>';
  document.getElementById('12').innerHTML = 'jamaicnyan:<div style="float:right;display:inline-block;"> ' + score_jamaicnyan + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_jamaicnyan\')">reset</a>';
  document.getElementById('13').innerHTML = 'Americnyan:<div style="float:right;display:inline-block;"> ' + score_america + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_america\')">reset</a>';
  document.getElementById('14').innerHTML = 'Retro:<div style="float:right;display:inline-block;"> ' + score_retro + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_retro\')">reset</a>';
  document.getElementById('15').innerHTML = 'Valentnyan:<div style="float:right;display:inline-block;"> ' + score_vday + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_vday\')">reset</a>';
  document.getElementById('17').innerHTML = 'Sad cat:<div style="float:right;display:inline-block;"> ' + score_sad + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_sad\')">reset</a>';
  document.getElementById('18').innerHTML = 'Tacnayn:<div style="float:right;display:inline-block;"> ' + score_tacnayn + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_tacnayn\')">reset</a>';
  document.getElementById('19').innerHTML = 'Dubstep:<div style="float:right;display:inline-block;"> ' + score_dub + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_dub\')">reset</a>';
  document.getElementById('20').innerHTML = 'Slomo:<div style="float:right;display:inline-block;"> ' + score_slomo + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_slomo\')">reset</a>';
  document.getElementById('21').innerHTML = 'Xmas:<div style="float:right;display:inline-block;"> ' + score_xmas + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_xmas\')">reset</a>';
  document.getElementById('22').innerHTML = 'Nyanyear:<div style="float:right;display:inline-block;"> ' + score_newyear + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_newyear\')">reset</a>';
  document.getElementById('23').innerHTML = 'Fiesta Dog:<div style="float:right;display:inline-block;"> ' + score_fiesta + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_fiesta\')">reset</a>';
  document.getElementById('24').innerHTML = 'Easter:<div style="float:right;display:inline-block;"> ' + score_easter + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_easter\')">reset</a>';
  document.getElementById('25').innerHTML = 'Bday:<div style="float:right;display:inline-block;"> ' + score_bday + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_bday\')">reset</a>';
  document.getElementById('26').innerHTML = 'St. Paddy:<div style="float:right;display:inline-block;"> ' + score_paddy + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_paddy\')">reset</a>';
  document.getElementById('27').innerHTML = 'Breakfast:<div style="float:right;display:inline-block;"> ' + score_breakfast + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_breakfast\')">reset</a>';
  document.getElementById('28').innerHTML = 'melon bird:<div style="float:right;display:inline-block;"> ' + score_melon + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_melon\')">reset</a>';
  document.getElementById('29').innerHTML = 'star sheep:<div style="float:right;display:inline-block;"> ' + score_star + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_star\')">reset</a>';
  document.getElementById('30').innerHTML = 'balloon kitty:<div style="float:right;display:inline-block;"> ' + score_balloon + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_balloon\')">reset</a>';
  document.getElementById('31').innerHTML = 'daft nyan:<div style="float:right;display:inline-block;"> ' + score_daft + '</div><a style="position:absolute;left:260;"href="#" onClick="remValue(\'score_daft\')">reset</a>';

  var achone = document.getElementById('ach1');
  var ach_1 = eval(getValue('ach_1'));
  if (!ach_1) {
    var ach_1 = "0";
  }
  if (ach_1 == '1337') {
    achone.innerHTML = '<img class="achpic" src="images/achievements/1c.png"><h4 id="ach1c"style="margin-top:0px;">One Thousnyan!</h4><p style="margin-top:-8px;">Nyan for 1000 seconds!<br><a style="color:#ff0000" href="#" onClick="popitup500(\'/web/20150525062148/http://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnyan.cat&text=I+NYANNED+FOR+1000+SECONDS+AND+UNLOCKED+THE+ACHIEVEMENT+%22ONE+THOUSNYAN%22&url=http%3A%2F%2Fnyan.cat&via=nyannyancat\')">Tweet it</a>. <a style="color:#ff0000;" href="#" onClick="popitup(\'/web/20150525062148/https://www.facebook.com/dialog/feed?app_id=345907258806762&link=/web/20150525062148/https://www.nyan.cat&picture=/web/20150525062148/http://www.nyan.cat/images/achievements/1c.png&name=ONE%20THOUSNYAN!&caption=I%20earned%20the%20achievement%20%22One%20Thousnyan%22%20by%20nyanning%201000%20seconds%20at%20nyan.cat!%20&description=Think%20you%20have%20what%20it%20takes?&redirect_uri=/web/20150525062148/http://www.nyan.cat/close.php\')">Share it on facebook!</a></p>';
    achone.style.backgroundColor = '#082a4e';
  } else {
    achone.innerHTML = '<img class="achpic" src="images/achievements/1nc.png"><h4 id="ach1c" style="margin-top:0px;">One Thousnyan!</h4><p style="margin-top:-8px;">Nyan for 1000 seconds!</p>';
    achone.style.backgroundColor = '#020b15';
  }

  var achtwo = document.getElementById('ach2');
  var ach_2 = eval(getValue('ach_2'));
  if (!ach_2) {
    var ach_2 = "0";
  }

  if (ach_2 == '1337') {
    achtwo.innerHTML = '<img class="achpic" src="images/achievements/2c.png"><h4 id="ach2c"  style="margin-top:0px;">OVER NYAN Thousnyan!</h4><p style="margin-top:-8px;">Nyan for 9001 seconds!<br><a style="color:#ff0000" href="#" onClick="popitup500(\'/web/20150525062148/http://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnyan.cat&text=I+NYANNED+FOR+9001+SECONDS+AND+UNLOCKED+THE+ACHIEVEMENT+%22OVER+NYAN+THOUSAND%22&url=http%3A%2F%2Fnyan.cat&via=nyannyancat\')">Tweet it</a>. <a style="color:#ff0000;" href="#" onClick="popitup(\'/web/20150525062148/https://www.facebook.com/dialog/feed?app_id=345907258806762&link=/web/20150525062148/https://www.nyan.cat&picture=/web/20150525062148/http://www.nyan.cat/images/achievements/2c.png&name=OVER%20NYAN%20THOUSAND!&caption=I%20earned%20the%20achievement%20%22Over%20Nyan%20Thousand%22%20by%20nyanning%209,001%20seconds%20at%20nyan.cat!%20&description=Think%20you%20have%20what%20it%20takes?&redirect_uri=/web/20150525062148/http://www.nyan.cat/close.php\')">Share it on facebook!</a></p>';
    achtwo.style.backgroundColor = '#082a4e';
  } else {
    achtwo.innerHTML = '<img class="achpic" src="images/achievements/2nc.png"><h4 id="ach2nc" style="margin-top:0px;">OVER NYAN Thousnyan!</h4><p style="margin-top:-8px;">Nyan for 9001 seconds!</p>';
    achtwo.style.backgroundColor = '#020b15';
  }

  var achthree = document.getElementById('ach3');
  var ach_3 = eval(getValue('ach_3'));
  if (!ach_3) {
      var ach_3 = "0";
  }

  if (ach_3 == '1337') {
    achthree.innerHTML = '<img class="achpic" src="images/achievements/3c.png"><h4 id="ach3c"  style="margin-top:0px;">ONE HUNDRED Thousnyan!</h4><p style="margin-top:-8px;">Nyan for 100,000 seconds!<br><a style="color:#ff0000" href="#" onClick="popitup500(\'/web/20150525062148/http://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnyan.cat&text=I+NYANNED+FOR+100,000+SECONDS+AND+UNLOCKED+THE+ACHIEVEMENT+%22ONE+HUNDRED+THOUSNYAN%22&url=http%3A%2F%2Fnyan.cat&via=nyannyancat\')">Tweet it</a>. <a style="color:#ff0000;" href="#" onClick="popitup(\'/web/20150525062148/https://www.facebook.com/dialog/feed?app_id=345907258806762&link=/web/20150525062148/https://www.nyan.cat&picture=/web/20150525062148/http://www.nyan.cat/images/achievements/3c.png&name=ONE%20HUNDRED%20THOUSNYAN!&caption=I%20earned%20the%20achievement%20%22One%20Hundred%20Thousnyan%22%20by%20nyanning%20100,000%20seconds%20at%20nyan.cat!%20&description=Think%20you%20have%20what%20it%20takes?&redirect_uri=/web/20150525062148/http://www.nyan.cat/close.php\')">Share it on facebook!</a></p>';
    achthree.style.backgroundColor = '#082a4e';
  } else {
    achthree.innerHTML = '<img class="achpic" src="images/achievements/3nc.png"><h4 id="ach3nc" style="margin-top:0px;">ONE HUNDRED Thousnyan!</h4><p style="margin-top:-8px;">Nyan for 100,000 seconds!</p>';
    achthree.style.backgroundColor = '#020b15';
  }

  var achfour = document.getElementById('ach4');
  var ach_4 = eval(getValue('ach_4'));
  if (!ach_4) {
      var ach_4 = "0";
  }

  if (ach_4 == '1337') {
    achfour.innerHTML = '<img class="achpic" src="images/achievements/4c.png"><h4 id="ach4c"  style="margin-top:0px;">FIVE HUNDRED Thousnyan!</h4><p style="margin-top:-8px;">Nyan for 500,000 seconds!<br><a style="color:#ff0000" href="#" onClick="popitup500(\'/web/20150525062148/http://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnyan.cat&text=I+NYANNED+FOR+500,000+SECONDS+AND+UNLOCKED+THE+ACHIEVEMENT+%22FIVE+HUNDRED+THOUSNYAN%22&url=http%3A%2F%2Fnyan.cat&via=nyannyancat\')">Tweet it</a>. <a style="color:#ff0000;" href="#" onClick="popitup(\'/web/20150525062148/https://www.facebook.com/dialog/feed?app_id=345907258806762&link=/web/20150525062148/https://www.nyan.cat&picture=/web/20150525062148/http://www.nyan.cat/images/achievements/4c.png&name=FIVE%20HUNDRED%20THOUSNYAN!&caption=I%20earned%20the%20achievement%20%22Five%20Hundred%20Millinyan%22%20by%20nyanning%20500,000%20seconds%20at%20nyan.cat!%20&description=Think%20you%20have%20what%20it%20takes?&redirect_uri=/web/20150525062148/http://www.nyan.cat/close.php\')">Share it on facebook!</a></p>';
    achfour.style.backgroundColor = '#082a4e';
  } else {
    achfour.innerHTML = '<img class="achpic" src="images/achievements/4nc.png"><h4 id="ach4nc" style="margin-top:0px;">FIVE HUNDRED Thousnyan!</h4><p style="margin-top:-8px;">Nyan for 500,000 seconds!</p>';
    achfour.style.backgroundColor = '#020b15';
  }

  var achfive = document.getElementById('ach5');
  var ach_5 = eval(getValue('ach_5'));
  if (!ach_5) {
      var ach_5 = "0";
  }

  if (ach_5 == '1337') {
    achfive.innerHTML = '<img class="achpic" src="images/achievements/5c.png"><h4 id="ach5c"  style="margin-top:0px;">ONE MILLINYAN!</h4><p style="margin-top:-8px;">Nyan for one million seconds!<br><a style="color:#ff0000" href="#" onClick="popitup500(\'/web/20150525062148/http://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnyan.cat&text=I+NYANNED+FOR+ONE+MILLION+SECONDS+AND+UNLOCKED+THE+ACHIEVEMENT+%22ONE+MILLINYAN%22&url=http%3A%2F%2Fnyan.cat&via=nyannyancat\')">Tweet it</a>. <a style="color:#ff0000;" href="#" onClick="popitup(\'/web/20150525062148/https://www.facebook.com/dialog/feed?app_id=345907258806762&link=/web/20150525062148/https://www.nyan.cat&picture=/web/20150525062148/http://www.nyan.cat/images/achievements/5c.png&name=ONE%20MILLINYAN!&caption=I%20earned%20the%20achievement%20%22One%20Millinyan%22%20by%20nyanning%201,000,000%20seconds%20at%20nyan.cat!%20&description=Think%20you%20have%20what%20it%20takes?&redirect_uri=/web/20150525062148/http://www.nyan.cat/close.php\')">Share it on facebook!</a></p>';
    achfive.style.backgroundColor = '#082a4e';
  } else {
    achfive.innerHTML = '<img class="achpic" src="images/achievements/5nc.png"><h4 id="ach5nc" style="margin-top:0px;">ONE MILLINYAN!</h4><p style="margin-top:-8px;">Nyan for one million seconds!</p>';
    achfive.style.backgroundColor = '#020b15';
  }

  var achsix = document.getElementById('ach6');
  var ach_6 = eval(getValue('ach_6'));
  if (!ach_6) {
      var ach_6 = "0";
  }

  if (ach_6 == '1337') {
    achsix.innerHTML = '<img class="achpic" src="images/achievements/6c.png"><h4 id="ach6c"  style="margin-top:0px;">FIVE MILLINYAN!</h4><p style="margin-top:-8px;">Nyan for five million seconds!<br><a style="color:#ff0000" href="#" onClick="popitup500(\'/web/20150525062148/http://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnyan.cat&text=I+NYANNED+FOR+FIVE+MILLION+SECONDS+AND+UNLOCKED+THE+ACHIEVEMENT+%FIVE+MILLINYAN%22&url=http%3A%2F%2Fnyan.cat&via=nyannyancat\')">Tweet it</a>. <a style="color:#ff0000;" href="#" onClick="popitup(\'/web/20150525062148/https://www.facebook.com/dialog/feed?app_id=345907258806762&link=/web/20150525062148/https://www.nyan.cat&picture=/web/20150525062148/http://www.nyan.cat/images/achievements/6c.png&name=FIVE%20MILLINYAN!&caption=I%20earned%20the%20achievement%20%22Five%20Millinyan%22%20by%20nyanning%205,000,000%20seconds%20at%20nyan.cat!%20&description=Think%20you%20have%20what%20it%20takes?&redirect_uri=/web/20150525062148/http://www.nyan.cat/close.php\')">Share it on facebook!</a></p>';
    achsix.style.backgroundColor = '#082a4e';
  } else {
    achsix.innerHTML = '<img class="achpic" src="images/achievements/6nc.png"><h4 id="ach6nc" style="margin-top:0px;">FIVE MILLINYAN!</h4><p style="margin-top:-8px;">Nyan for five million seconds!</p>';
    achsix.style.backgroundColor = '#020b15';
  }

  var achseven = document.getElementById('ach7');
  var ach_7 = eval(getValue('ach_7'));
  if (!ach_7) {
      var ach_7 = "0";
  }

  if (ach_7 == '1337') {
    achseven.innerHTML = '<img class="achpic" src="images/achievements/7c.png"><h4 id="ach7c"  style="margin-top:0px;">Missingnyan!</h4><p style="margin-top:-8px;">Find the missingnyan cat!<br><a style="color:#ff0000" href="#" onClick="popitup500(\'/web/20150525062148/http://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnyan.cat&text=I+FOUND+THE+MISSINGNYAN+CAT+AND+UNLOCKED+THE+ACHIEVEMENT+%22MISSINGNYAN%22&url=http%3A%2F%2Fnyan.cat&via=nyannyancat\')">Tweet it</a>. <a style="color:#ff0000;" href="#" onClick="popitup(\'/web/20150525062148/https://www.facebook.com/dialog/feed?app_id=345907258806762&link=/web/20150525062148/https://www.nyan.cat&picture=/web/20150525062148/http://www.nyan.cat/images/achievements/7c.png&name=MISSINGNYAN!&caption=I%20earned%20the%20achievement%20%22Missingnyan%22%20at%20nyan.cat!%20&description=Think%20you%20have%20what%20it%20takes?&redirect_uri=/web/20150525062148/http://www.nyan.cat/close.php\')">Share it on facebook!</a></p>';
    achseven.style.backgroundColor = '#082a4e';
  } else {
    achseven.innerHTML = '<img class="achpic" src="images/achievements/7nc.png"><h4 id="ach7nc" style="margin-top:0px;">Missingnyan!</h4><p style="margin-top:-8px;">Find the missingnyan cat!</p>';
    achseven.style.backgroundColor = '#020b15';
  }

  var acheight = document.getElementById('ach8');
  var ach_8 = eval(getValue('ach_8'));
  if (!ach_8) {
      var ach_8 = "0";
  }

  if (ach_8 == '1337') {
    acheight.innerHTML = '<img class="achpic" src="images/achievements/8c.png"><h4 id="ach8c"  style="margin-top:0px;">It\'s raining nyan!</h4><p style="margin-top:-8px;">Find the "level select" menu...<br><a style="color:#ff0000" href="#" onClick="popitup500(\'/web/20150525062148/http://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnyan.cat&text=I+UNLOCKED+THE+ACHIEVEMENT+%22ITS RAINING NYAN%22.+CAN+YOU%3F&url=http%3A%2F%2Fnyan.cat&via=nyannyancat\')">Tweet it</a> . <a style="color:#ff0000;" href="#" onClick="popitup(\'/web/20150525062148/https://www.facebook.com/dialog/feed?app_id=345907258806762&link=/web/20150525062148/https://www.nyan.cat&picture=/web/20150525062148/http://www.nyan.cat/images/achievements/8c.png&name=IT%27S%20RAINING%20NYAN%20!&caption=I%20earned%20the%20achievement%20%22It\%27s%20Raining%20Nyan%22%20at%20nyan.cat!%20&description=Think%20you%20have%20what%20it%20takes?&redirect_uri=/web/20150525062148/http://www.nyan.cat/close.php\')">Share it on facebook!</a></p>';
    acheight.style.backgroundColor = '#082a4e';
  } else {
    acheight.innerHTML = '<img class="achpic" src="images/achievements/8nc.png"><h4 id="ach8nc" style="margin-top:0px;">It\'s raining nyan!</h4><p style="margin-top:-8px;">Find the "level select" menu...</p>';
    acheight.style.backgroundColor = '#020b15';
  }

  var achnine = document.getElementById('ach9');
  var ach_9 = eval(getValue('ach_9'));
  if (!ach_9) {
      var ach_9 = "0";
  }

  if (ach_9 == '1337') {
    achnine.innerHTML = '<img class="achpic" src="images/achievements/9c.png"><h4 id="ach9c" style="margin-top:0px;">Nyan Fan</h4><p style="margin-top:-8px;">View every flavor!<br><a style="color:#ff0000" href="#" onClick="popitup500(\'/web/20150525062148/http://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnyan.cat&text=I+WATCHED+EVERY+FLAVOR+AND+UNLOCKED+THE+ACHIEVEMENT+%22NYAN+FAN%22&url=http%3A%2F%2Fnyan.cat&via=nyannyancat\')">Tweet it</a>. <a style="color:#ff0000;" href="#" onClick="popitup(\'/web/20150525062148/https://www.facebook.com/dialog/feed?app_id=345907258806762&link=/web/20150525062148/https://www.nyan.cat&picture=/web/20150525062148/http://www.nyan.cat/images/achievements/9c.png&name=NYAN%20FAN%20!&caption=I%20earned%20the%20achievement%20%22Nyan%20Fan%22%20by%20viewing%20every%20flavor%20at%20nyan.cat!%20&description=Think%20you%20have%20what%20it%20takes?&redirect_uri=/web/20150525062148/http://www.nyan.cat/close.php\')">Share it on facebook!</a></p>';
    achnine.style.backgroundColor = '#082a4e';
  } else {
    achnine.innerHTML = '<img class="achpic" src="images/achievements/9nc.png"><h4 id="ach9nc" style="margin-top:0px;">Nyan Fan</h4><p style="margin-top:-8px;">View every flavor!</p>';
    achnine.style.backgroundColor = '#020b15';
  }

  var achten = document.getElementById('ach10');
  var ach_10 = eval(getValue('ach_10'));
  if (!ach_10) {
      var ach_10 = "0";
  }

  if (ach_10 == '1337') {
    achten.innerHTML = '<img class="achpic" src="images/achievements/10c.png"><h4 id="ach10c" style="margin-top:0px;">Obsessed</h4><p style="margin-top:-8px;">View every flavor 100 times!</p><a style="color:#ff0000" href="#" onClick="popitup500(\'/web/20150525062148/http://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnyan.cat&text=I+WATCHED+EVERY+FLAVOR+100+TIMES+AND+UNLOCKED+THE+ACHIEVEMENT+%22OBSESSED%22&url=http%3A%2F%2Fnyan.cat&via=nyannyancat\')">Tweet it</a>. <a style="color:#ff0000;" href="#" onClick="popitup(\'/web/20150525062148/https://www.facebook.com/dialog/feed?app_id=345907258806762&link=/web/20150525062148/https://www.nyan.cat&picture=/web/20150525062148/http://www.nyan.cat/images/achievements/10c.png&name=OBSESSED!&caption=I%20earned%20the%20achievement%20%22Obsessed%22%20by%20viewing%20every%20flavor%20100%times%20at%20nyan.cat!%20&description=Think%20you%20have%20what%20it%20takes?&redirect_uri=/web/20150525062148/http://www.nyan.cat/close.php\')">Share it on facebook!</a></p>';
    achten.style.backgroundColor = '#082a4e';
  } else {
    achten.innerHTML = '<img class="achpic" src="images/achievements/10nc.png"><h4 id="ach10nc" style="margin-top:0px;">Obsessed</h4><p style="margin-top:-8px;">View every flavor 100 times!</p>';
    achten.style.backgroundColor = '#020b15';
  }

  function remValue(victim) {
    var c = confirm("Are you sure? \n You'll loose all of your progress!");
    if (c == true) {
      remValue(victim);
    }
  }
}
