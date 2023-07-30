MenuFooter();

function OpenPopMenu() {
  var xLine = "";

    xLine += '<div style="height: 50px;">';
    //xLine += '<div class="container" style="width:100%;padding:5px;height:50px;">';
    //xLine += '<div style="width:95px;float: left;text-align: center;"><img src="'+ sessionStorage.getItem("LinePicture") +'" class="Profile-img" style="margin-top:-10px;"></div>';
    //xLine += '<div class="Profile-title"><b>'+ sessionStorage.getItem("EmpName_Newyear") +'</b><br>'+ sessionStorage.getItem("LineName") +'</div>';
    //xLine += '</div></div><div class="clr"></div>';
    xLine += '<div style="height: 60px;background-color: #0056ff; width:100%; padding-top:10px;">';
    xLine += '<div style="height: 50px; margin:auto; width:100%;">';
    xLine += '<center><div style="color:#fff; font-size:16px;font-weight: 600;padding-top:8px;">กิจกรรมวันแม่ ประจำปี 2566</div></center>';
    //xLine += '<div style="width:30%; float: left; text-align: center;height: 50px; margin-right:3%;"><img src="./img/coin.png" style="width:50px;"></div>';
    //xLine += '<div style="width:67%; float: right; text-align: left; padding-left:10px; height: 50px; font-size:20px; color:#fff; padding-top:5px;"><b>'+ addCommas(sessionStorage.getItem("ThisPoint")) +'</b><div style="font-size:12px;margin-top:-8px;color:#fff;"><b>PRU Point</b></div></div>';
    xLine += '</div>';
    xLine += '</div><div class="clr" style="height:3px;"></div>';


    xLine += '<div class="clr"></div>';
    xLine += '<div style="max-width:280px; margin:10px auto 15px 25px; width:100%;">';
    xLine += '<div class="clr" style="height: 15px;"></div>';
    xLine += '<div class="icon-left"><img src="./img/icon-01.png" style="width:50px;"></div>';
    xLine += '<div class="icon-right" onclick="ClickLink(1)">ดูภาพที่ส่งประกวด<div class="icon-text" style="line-height:1.2;">เพื่อน ๆ สามารถดูภาพที่ส่งเข้าร่วมประกวดได้ทุกภาพที่นี่</div></div>';
    xLine += '<div class="icon-left"><img src="./img/icon-02.png" style="width:50px;"></div>';
    xLine += '<div class="icon-right" onclick="ClickLink(2)">ผลโหวตล่าสุด<div class="icon-text" style="line-height:1.2;">มาดูกันว่าเพื่อน ๆ ของเราได้รับการโหวตเท่าไรแล้ว จะได้รางวัลหรือเปล่าน้า</div></div>';
    xLine += '<div class="icon-left"><img src="./img/icon-03.png" style="width:50px;"></div>';
    xLine += '<div class="icon-right" onclick="ClickLink(3)">ส่งภาพประกวดของคุณ<div class="icon-text" style="line-height:1.2;">ง่ายๆ ไม่กี่ขั้นตอนคุณก็ส่งภาพประกวด และพร้อมให้เพื่อนๆ ช่วยกันโหวตกันเลย</div></div>';
    xLine += '<div class="clr"></div>';
    xLine += '</div>';

    xLine += '<div style="margin-top:0px;margin-left:35px;">';
    xLine += '<div class="menu-box1" onclick="window.location.href=\'home.html\';">';
    xLine += '<div class="menu-box-img1"><img src="./img/icon-menu1.png" style="width:35px;"></div>';
    xLine += '<div class="menu-box-text1" style="color:#000000;">หน้าแรก</div></div>';
    xLine += '<div class="menu-box1" onclick="window.location.href=\'viewall.html\';">';
    xLine += '<div class="menu-box-img1"><img src="./img/icon-menu2.png" style="width:35px;"></div>';
    xLine += '<div class="menu-box-text1" style="color:#000000;">สายงาน</div></div>';
    xLine += '<div class="menu-box1" onclick="window.location.href=\'rule.html\';">';
    xLine += '<div class="menu-box-img1"><img src="./img/icon-menu3.png" style="width:35px;"></div>';
    xLine += '<div class="menu-box-text1" style="color:#000000;">รายละเอียด</div></div>';
    xLine += '<div class="menu-box1" onclick="window.location.href=\'rule.html\';">';
    xLine += '<div class="menu-box-img1"><img src="./img/icon-menu4.png" style="width:35px;"></div>';
    xLine += '<div class="menu-box-text1" style="color:#000000;">ชวนเพื่อน</div></div>';
    xLine += '</div></div>';

    xLine += '<div class="clr" style="height:10px;"></div>';
    xLine += '<center><div class="btn-t2" onclick="CloseMenu()" style="background-color:#fff;">Close Menu</div></center>';


    xLine += '<div class="clr" style="height:25px;"> </div>';
    $("#MenuSociety").html(xLine); 
    document.getElementById('menu').style.display='block';
  
}



function MenuFooter() {
  var str = "";
  str += '<div class="footer-top"><div class="container">';
  str += '<div class="row"><div class="col-lg-4 col-md-6 footer-newsletter">';
  //str += '<div class="font13" style="color:#ffffff;"><b>เมนูสำหรับเลือกใช้งาน</b></div>';
  //str += '<p>ไม่ว่าจะเป็นเรื่องที่ต้องการความช่วยเหลือ หรือการสนับสนุนจากผู้บริหาร คุณสามารถส่งเรื่องราวของคุณที่นี่</p>';

  str += '<div style="margin-top:0px;margin-left:30px;">';

  str += '<div class="menu-box1" onclick="window.location.href=\'home.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icon-menu1.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">หน้าแรก</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'timeline.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icon-menu2.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">กำหนดการ</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'rule.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icon-menu3.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">รายละเอียด</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'rule.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icon-menu4.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">บอกต่อเพื่อน</div></div>';
/*
  str += '<div class="menu-box1" onclick="window.location.href=\'telfriend.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icon-friends.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">บอกเพื่อน</div></div>';
*/
  str += '</div>';


  //str += '<form action="" method="post"><input type="email" name="email"><input type="submit" value="ส่งเรื่องราว">';
  //str += '</form></div></div></div></div>';
  str += '</div></div></div></div>';
  str += '<div class="container d-md-flex py-4"><div class="mr-md-auto text-center text-md-left">';
  str += '<div class="copyright">@<span>LINE Retail Society</span></div></div></div>';
  $("#DisplayFooter").html(str);  
}






function ClickLink(x) {
  if(x==1) {
    location.href = "allpic.html";
  } else if(x==2) { 
    location.href = "ranking.html";
  } else if(x==3) { 
    location.href = "photo.html";
  }
}


function numberWithCommas(num) {
  var valueString=num; //can be 1500.0 or 1500.00 
  var amount=parseFloat(valueString).toFixed(2);
  return formattedString= amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function addCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}





function CloseMenu() {
  document.getElementById('menu').style.display='none';
}

