$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Mom2023")==null) { location.href = "index.html"; }
  document.getElementById('id01').style.display='block';
});

function CloseAll() {
  document.getElementById('id01').style.display='none';
}


