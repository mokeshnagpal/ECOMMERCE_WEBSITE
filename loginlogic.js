function reveal()
{
   
  document.querySelector('#fp').type='text';
  let a=document.getElementById('eye');
  a.style.display='none';
  let b=document.getElementById('eyeclose');
  b.style.display='inline-block';
  document.getElementById("space").value="&nbsp;";
}

function hide()
{
   
  document.querySelector('#fp').type='password';
  let a=document.getElementById('eyeclose');
  a.style.display='none';
  let b=document.getElementById('eye');
  b.style.display='inline-block';
  document.getElementById("space").value="";
}

function openweb()
{
  if(1)//password matches with the database
    window.open("file:///Z:/PROJECTS/WEBSITE/WEBSITE/SITE/site.html","_self");
  else
    window.open("file:///Z:/PROJECTS/WEBSITE/WEBSITE/LOGIN%20PAGE/login.html","_self");
}