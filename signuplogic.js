function fname()
{
  let a=document.getElementById("ff").value;
  name(a);
}
function mname()
{
  let a=document.getElementById("fmn").value;
  if(a.length!=0)
  name(a);
}
function lname()
{
  let a=document.getElementById("fl").value;
  name(a);
}
function name(a)
{
  var c="",k=0,x=0;
  var y=document.getElementById("disp");
  var z=document.getElementById("out");
  for(var i=0;i<a.length;i++)
  {
  c=a.charCodeAt(i);
  if((c>=65&&c<=90)||(c>=97&&c<=122))
    k++;
  }
  if(k!=a.length||a.length==0)
  {
  x=1;
  }
  if(x==1&&z.textContent==="")
  {
  z.innerHTML="Name incorrect";
  y.style.display="inline-block";
  }
  else if(x==0&&a.length!=0&&z.textContent.indexOf("Name incorrect")!=-1)
  {
  z.innerHTML="";
  y.style.display="none";
  } 
}
function mail()
{
  let k=0;
  let c="";
  var y=document.getElementById("disp");
  var z=document.getElementById("out");
  let a=document.getElementById("fm").value;
  a=a.toLowerCase();
  for(var i=0;i<a.length;i++)
  {
  c=a.charCodeAt(i);
  if((c>=97&&c<=122)||a[i]=='_'||a[i]=='.'||a[i]=='@'||(c>=48&&c<=57))
    k++;
  }
  if(z.textContent==""&&((a.charCodeAt(0)<97||a.charCodeAt(0)>122)||k!=a.length||(a.indexOf("@gmail.com")==-1&&a.indexOf("@yandex.com")==-1&&a.indexOf("@outlook.com")==-1)&&a.indexOf("@rediff_mail.com")==-1))
  {
    z.innerHTML="Email-id incorrect";
    y.style.display="inline-block";
  }
  else if(z.textContent.indexOf("Email-id incorrect")!=-1)
  {
  z.innerHTML="";
  y.style.display="none";
  } 
}
function pass()
{
  let k=0;
  let c="";
  var y=document.getElementById("disp");
  var z=document.getElementById("out");
  let a=document.getElementById("fp").value;
  a=a.toLowerCase();
  for(var i=0;i<a.length;i++)
  {
  c=a.charCodeAt(i);
  if((c>=97&&c<=122)||c=='_'||(c>=48&&c<=57))
    k++;
  }
  if(a.length<6&&z.textContent==="")
  {
    z.innerHTML="Atleast 6 characters";
    y.style.display="inline-block";

  }
  else if(((a.charCodeAt(0)<97&&a.charCodeAt(0)>122)||a.charCodeAt(0)!='_')&&k!=a.length&&z.textContent==="")
  {
    z.innerHTML="Password incorrect";
    y.style.display="inline-block";
  }
  else if(((a.charCodeAt(0)>=97&&a.charCodeAt(0)<=122)||a.charCodeAt(0)=='_')&&k==a.length&&(z.textContent.indexOf("Password incorrect")!=-1||z.textContent.indexOf("Atleast 6 characters")!=-1))
  {
  z.innerHTML="";
  y.style.display="none";
  } 
}
function passmatch()
{
  var y=document.getElementById("disp");
  var z=document.getElementById("out");
  let a=document.getElementById("fp").value;
  let b=document.getElementById("fcp").value;
  if(a!==b &&z.textContent==="")
  {
    z.innerHTML="Password doesn't match";
    y.style.display="inline-block";
  }
  else if(a===b&&z.textContent.indexOf("Password doesn't match")!=-1)
  {
    z.innerHTML="";
  y.style.display="none";

  }
}
function reset()
{
  document.getElementById("out").innerHTML="";
}
function openweb()
{
  if(document.getElementById("out").textContent==="")
    window.open("file:///Z:/PROJECTS/WEBSITE/WEBSITE/SITE/site.html","_self");
  else
    window.open("file:///Z:/PROJECTS/WEBSITE/WEBSITE/SIGN%20UP/signup.html","_self");//same web address of signup
}