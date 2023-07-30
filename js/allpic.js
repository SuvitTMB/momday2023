var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });


$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Mom2023")==null) { location.href = "index.html"; }
  if(sessionStorage.getItem("AllMom2023")==null) { 
    document.getElementById('id01').style.display='block';
    sessionStorage.setItem("AllMom2023", "Mom2023");
  }

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
  //dbSongkarn = firebase.firestore().collection("Momday2023");
  ShowIMG();
}


function ShowIMG() {
  var str = "";
  var CountImg = 0;
  str += '<div class="grid">';
  dbSongkarn.orderBy('TimeStampDate','desc')
  //.limit(60)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      CountImg = CountImg+1;
      //str += '<figure class="effect-zoe" onclick="ViewSongkarn(\''+ doc.id +'\')">';
      str += '<figure class="effect-zoe" onclick="viewpage(\''+ doc.id +'\')">';
      str += '<div class="effect-text"><img src="'+doc.data().SendImg+'" style="height:100px;overflow: hidden;"/><div class="effect-textshow">'+doc.data().EmpName+'</div></div>';
      //str += '<figcaption><div style="font-weight: 600;font-size:11px;text-align:center;">'+doc.data().EmpName+'</div>';
      //str += '</figcaption></figure>';
      str += '</figure>';
      //CountImg++;
    });
    str += '</div>';
    $("#DisplayCountImg").html('<div class="box-sendimg">ภาพประกวดรวม '+ CountImg +' ภาพ</div>');
    $("#DisplayImg").html(str);
  });
}


var EidSongkarn = "";
function ViewSongkarn(id) {
  var str = "";
  var sClickView = 0;
  dbSongkarn.where(firebase.firestore.FieldPath.documentId(), "==", id)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      EidSongkarn = doc.id;
      sClickView = (doc.data().ClickView+1);
      str += '<div style="text-align:left;">';
      str += '<div style="text-align:center; color:#0056ff; padding:8px;">Songkran Family Happy Together </div>';
      str += '<div><img src="'+doc.data().SendImg+'" style="width:100%;"/></div>';
      str += '<div style="font-size:11px; color:#777;line-height:1.2; padding:8px 0;">'+doc.data().SendMemo+'</div>';
      str += '<div style="font-size:11px; color:#0056ff;">ส่งโดย : '+doc.data().EmpName+' | View : '+sClickView+'</div>';
      str += '</div>';
    });
    //dbSongkarn.doc(EidSongkarn).update({
    //  ClickView : sClickView
    //});
    $("#DisplaySongkarn").html(str);
  });
  document.getElementById('id01').style.display='block';
}


function viewpage(id) {
  location.href = "viewpage.html?gid="+id+"";
}

function GotoViewAll() {
  location.href = "viewall.html";
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
}
