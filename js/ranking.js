var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xClickMenu = "";


$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Mom2023")==null) { location.href = "index.html"; }
  //document.getElementById('id01').style.display='block';
  Connect_DB();
});


function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    databaseURL: "https://file-upload-6f4fc.firebaseio.com",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  dbSongkarn = firebase.firestore().collection("Songkarn");
  loadData();
  //SelectMeunu();
  //CheckProfile();
}


function loadData() {
  var i = 0;
  var count = 0;
  var xTopVote = "";
  var dataSet = "";
  var dataSrc = [];
  //dbSongkarn.where('SendUnderRH','==', xClickMenu)
  dbSongkarn
  .orderBy('ClickLike','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      i = (i+1);
      count++;
      xEmpMember = "";
      xTimegetBox = "";
      var xNewText = "";
      //xNewText += '<div style="color:#0056ff;font-size:11px;"><div>'+doc.data().EmpName+' ('+doc.data().EmpID+')</div>';
      xNewText += '<div>';
      xNewText += '<div style="width:50px;float: left;"><img src="'+ doc.data().LinePicture +'" onerror="javascript:imgError(this)" class="chart-profilt" title="'+ doc.data().LineName +'"></div>';
      xNewText += '<div style="min-width:120px;float: left;color:#0056ff;padding-top:3px;"><b>'+ doc.data().EmpName +'</b>';
      xNewText += '<div style="font-size:12px;margin-top:-4px; font-weight:600;color:#777;">Like : '+doc.data().ClickLike+' | View : '+ doc.data().ClickView +' |  ข้อความ : '+doc.data().ClickMemo+'</div></div>';
      xNewText += '</div><div class="clr"></div>';
      if(count<=6) {
        xTopVote += '<div style="max-width:300px; margin:10px auto; height:140px;overflow: hidden;position:">';
        xTopVote += '<div class="effect-text"><img src="'+doc.data().SendImg+'" style="height:150px;" onerror="javascript:imgError1(this)"/>';
        xTopVote += '<div class="top-right">โหวตอันดับ : '+ count +'</div>';
        xTopVote += '<div class="bottom-left">';
        xTopVote += '<div style="width:20%;float:left;"><img src="'+ doc.data().LinePicture +'" onerror="javascript:imgError(this)" class="chart-profilt"></div>';
        xTopVote += '<div style="width:50%;float:left;text-align:left;line-height:1.1;padding-top:7px;">'+doc.data().EmpName+'<br>คะแนนโหวต : <b>'+doc.data().ClickLike+' โหวต</b></div>';
        xTopVote += '<div style="width:30%;float:left;"><div class="btn-t1" onclick="ClickID('+i+',\''+ doc.id +'\')">โหวตเลย</div></div>';
        xTopVote += '</div><div class="clr"></div>';
        xTopVote += '</div>';
        xTopVote += '</div>';
      }
      dataSet = [xNewText, "<div class='btn-t1' style='max-width:60px;margin-top:0px;' id="+i+">โหวต</div>", doc.id, i];
      dataSrc.push(dataSet);
    }); 

    dTable=$('#ex-table').DataTable({
      "bDestroy": true,    
      data: dataSrc,
      columns: [
        //{ title: "EmpID", className: "txt-center" },
        { title: "ผู้ส่งภาพประกวด" },
        { title: "รายการ", className: "txt-center" },
        ],
        dom: 'lfrtipB',
        buttons: [
            //'copy', 'excelFlash', 'excel', 'pdf', 'print'
        ],
          lengthMenu: [[50, 100, 200, -1], [50, 100, 200, "All"]],
          columnDefs: [ { type: 'number', 'targets': [0] } ],
          order: [[ 1, 'desc']]
        //dom: 'Bfrtip', buttons: [ 'copy', 'csv', 'excel', 'pdf', 'print' ]
      });   
      $('#ex-table tbody').on( 'click', 'tr', function () {
        var data = dTable.row( $(this).parents('tr') ).data();
        if(count!=0) {
            ClickID(dTable.row( this ).data()[2],dTable.row( this ).data()[2]);
        }
        //console.log(dTable.row( this ).data()[6]);
      });
      if(sessionStorage.getItem("Vote2023")==null) { 
        $("#ShowTopVote").html(xTopVote);
        document.getElementById('id01').style.display='block';
        sessionStorage.setItem("Vote2023", "Mom2023");
      }
      //$("#ShowTopVote").html(xTopVote);
      //document.getElementById('id01').style.display='block';
  });
  $('#ex-table').DataTable().destroy();
  $("#ex-table tbody").remove();
}


function ClickID(x,id) {
  location.href = "viewpage.html?gid="+id+"";
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
}


function NewDate() {
  var today = new Date();
  var day = today.getDate() + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";
  var ampm = hour >= 12 ? 'PM' : 'AM';
  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);
  dateString = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm;
}


function ConvrtDate(str) {
  var date = new Date(str),
  mnth = ("0" + (date.getMonth() + 1)).slice(-2),
  day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()+543].join("/");
}


function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}


function imgError(image) {
    image.onerror = "";
    image.src = "./img/box.jpg";
    return true;
}

function imgError1(image) {
    image.onerror = "";
    image.src = "./img/mom-rule.jpg";
    return true;
}
