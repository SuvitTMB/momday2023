var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });


$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Mom2023")==null) { location.href = "index.html"; }
  //alert(sessionStorage.getItem("EmpName"));
  Connect_DB();
  $('#imageFile').change(function(evt) {
     var files = evt.target.files;
     var file = files[0];
     if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview').src = e.target.result;
            ResizeImage();
            //alert(document.getElementById('preview').src);
        };
        reader.readAsDataURL(file);
    }
  });
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
  dbCheckProfile = firebase.firestore().collection("CheckProfile");
  dbMomDay2023 = firebase.firestore().collection("Songkarn");
  CheckProfile();
}


var EidProfile = "";
var EidSongkarn = "";
var Checkimg = "";
function CheckProfile() {
  dbCheckProfile.where('lineID','==',sessionStorage.getItem("LineID"))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidProfile = doc.id;
      document.getElementById("txtUnderRH").value = doc.data().empGroup;
      document.getElementById("txtAddress").value = doc.data().empAddress;  
      document.getElementById("txtPhone").value = doc.data().empPhone;  
    });
  });
  dbMomDay2023.where('LineID','==',sessionStorage.getItem("LineID"))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidSongkarn = doc.id;
      Checkimg = doc.data().SendImg;
      sessionStorage.setItem("UploadSongkarn", doc.data().SendImg);
      document.getElementById("txtDetail").value = doc.data().SendMemo;
      $("#outputImg").html('<img src="'+doc.data().SendImg+'" style="width:100%; max-width: 400px;">');
      $("#lastsubmit").html('<div style="font-size:11px;color:#777;padding-top:6px;">บันทึกรายการล่าสุด '+doc.data().Senddate+'</div>');
      document.getElementById('LinkPage').style.display='block';

      //console.log(sessionStorage.getItem("UploadSongkarn"));
      //document.getElementById('ShowImgFile').style.display='block';
    });
/*

    if(EidSongkarn!="" && Checkimg!='') {
      //alert("Checking");
      //alert(doc.data().SendImg);
      //document.getElementById('id02').style.display='block';
      document.getElementById('id02').style.display='none';
      document.getElementById('ShowUploadFile').style.display='block';
      document.getElementById('ShowImgFile').style.display='none';
    } else {
      //alert(sessionStorage.getItem("UploadSongkarn"));
      if(sessionStorage.getItem("UploadSongkarn")=="") {
        document.getElementById('id02').style.display='block';
      }
      document.getElementById('ShowUploadFile').style.display='none';
      document.getElementById('ShowImgFile').style.display='block';
      document.getElementById('DeleteImgFile').style.display='block';
    }
*/

    //if(EidSongkarn!="" && Checkimg!='') {
    if(Checkimg!='') {
      //alert(EidSongkarn+"\n"+Checkimg);
      //alert("ระบบได้ทำการบันทึกภาพประกวดของคุณเรียบร้อยแล้ว");
      document.getElementById('ShowUploadFile').style.display='none';
      document.getElementById('ShowImgFile').style.display='block';
      document.getElementById('DeleteImgFile').style.display='block';
      //document.getElementById('ShowUploadFile').style.display='none';
      //document.getElementById('ShowImgFile').style.display='block';
    } else {
      document.getElementById('id02').style.display='block';
      document.getElementById('ShowUploadFile').style.display='block';
      document.getElementById('ShowImgFile').style.display='none';
      document.getElementById('DeleteImgFile').style.display='none';
    }


  });
}


function DeleteImgFile() {
  //sessionStorage.getItem("UploadSongkarn")
  Checkimg = "";
  sessionStorage.setItem("UploadSongkarn", "");
  //alert("Blank="+sessionStorage.getItem("UploadSongkarn"));
  //document.getElementById('imageFile') ="";
  //console.log("sssss="+document.getElementById('imageFile'));
  document.getElementById('ShowUploadFile').style.display='block';
  document.getElementById('ShowImgFile').style.display='none';
  document.getElementById('DeleteImgFile').style.display='none';
}


function ResizeImage() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var filesToUploads = document.getElementById('imageFile').files;
        var file = filesToUploads[0];
        //alert(filesToUploads[0]);
        if (file) {
             var reader = new FileReader();
            // Set the image once loaded into file reader
            reader.onload = function(e) {
 
                var img = document.createElement("img");
                img.src = e.target.result;
 
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
 
                var MAX_WIDTH = 400;
                var MAX_HEIGHT = 400;
                var width = img.width;
                var height = img.height;
 
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);
 
                dataurl = canvas.toDataURL(file.type);
                document.getElementById('output').src = dataurl;
            }
            reader.readAsDataURL(file);
 
            //NewDate();
            var sCampRound = "Momday2023";
            var DateTimeStamp = Math.round(Date.now() / 1000);
            var ImgName = sCampRound+"-"+sessionStorage.getItem("EmpID_Mom2023")+"-"+DateTimeStamp;
            var uploadTask = firebase.storage().ref('Momday2023/'+ImgName).put(file);
            var storage = firebase.storage().ref('Momday2023/'+ImgName);
            var upload = storage.put(file);

            //document.getElementById('MyATKUPloading').src = dataurl;

            upload.on(
              "state_changed",
              function progress(snapshot) {
                //var percentage =
                //(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              },

              function error() {
                alert("error uploading file");
              },

              function complete() {
                uploadTask.snapshot.ref.getDownloadURL().then(function(url) {
                  sessionStorage.setItem("UploadSongkarn", url);
               }
                );
              }
            );
        }
     } else {
        alert('The File APIs are not fully supported in this browser.');
    }
    //alert(sessionStorage.getItem("UploadSongkarn"));
}


var sCheckBottom = 0;
var simageFile = "";
var stxtDetail = "";
var stxtUnderRH = "";
var stxtAddress = "";
var stxtPhone = "";

function ClickSongkarn() {
  sCheckBottom = 0;
  simageFile = sessionStorage.getItem("UploadSongkarn");
  stxtDetail = document.getElementById("txtDetail").value;
  stxtUnderRH = document.getElementById("txtUnderRH").value;
  stxtAddress = document.getElementById("txtAddress").value;
  stxtPhone = document.getElementById("txtPhone").value;
  if(imageFile !== null && imageFile !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtDetail !== null && stxtDetail !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtUnderRH !== null && stxtUnderRH !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtAddress !== null && stxtAddress !== '') { sCheckBottom = sCheckBottom+1; }
  if(sCheckBottom==4) {
    SaveSongkarn();
  } else {
    alert("คุณยังขาดข้อมูลที่ต้องกรอกอีก = "+(4-sCheckBottom)+" รายการ");
  }
}


function SaveSongkarn() {
  NewDate();
  var TimeStampDate = Math.round(Date.now() / 1000);
  if(EidSongkarn=="") {
    dbMomDay2023.add({
      LineID : sessionStorage.getItem("LineID"),
      LineName : sessionStorage.getItem("LineName"),
      LinePicture : sessionStorage.getItem("LinePicture"),
      EmpID : sessionStorage.getItem("EmpID_Mom2023"),
      EmpName : sessionStorage.getItem("EmpName_Mom2023"),
      SendImg : sessionStorage.getItem("UploadSongkarn"),
      SendMemo : document.getElementById("txtDetail").value,
      SendUnderRH : document.getElementById("txtUnderRH").value,
      SendAddress : document.getElementById("txtAddress").value,
      SendPhone : document.getElementById("txtPhone").value,
      ClickLike : 0,
      ClickMemo : 0,
      ClickView : 0,
      TimeStampDate : TimeStampDate,
      Senddate : dateString
    });
  } else {
    dbMomDay2023.doc(EidSongkarn).update({
      LinePicture : sessionStorage.getItem("LinePicture"),
      SendMemo : document.getElementById("txtDetail").value,
      SendUnderRH : document.getElementById("txtUnderRH").value,
      SendAddress : document.getElementById("txtAddress").value,
      SendPhone : document.getElementById("txtPhone").value,
      SendImg : sessionStorage.getItem("UploadSongkarn"),
      Senddate : dateString
    });
  }
  dbCheckProfile.doc(EidProfile).update({
    linePicture : sessionStorage.getItem("LinePicture"),
    empGroup : document.getElementById("txtUnderRH").value,
    empAddress : document.getElementById("txtAddress").value,
    empPhone : document.getElementById("txtPhone").value
  });
  if(Checkimg!="") {
    sessionStorage.setItem("UploadSongkarn", Checkimg);
  }
  document.getElementById("txtDetail").value = document.getElementById("txtDetail").value;
  CheckProfile();
  alert("ระบบได้ทำการบันทึกภาพประกวดของคุณเรียบร้อยแล้ว");
  //document.getElementById('id01').style.display='block';
}



function gotoPage() {
  location.href = "viewpage.html?gid="+EidSongkarn+"";
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display='none';
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



