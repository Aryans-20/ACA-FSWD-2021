const btn=document.getElementById("2");
const t1=document.getElementById("Name");
const t2=document.getElementById("token");
const t3=document.getElementById("data");
var w;
btn.onclick=function()
{
    fetch('http://localhost:12345/get_token')
  .then(response=>response.json()).then(data=>{
      const t=document.getElementById("token");
      t.value=data.token;
  });
}
const btn2=document.getElementById("1");
btn2.onclick=function(){
    var a,b,c;
    a=document.getElementById("Name").value;
    b=document.getElementById("data").value;
    c=document.getElementById("token").value;
    var entry={
        username: a,
        data: b,
        token: c,
    };
    fetch('http://localhost:12345/register',{
        method:"POST",
        body:JSON.stringify(entry),
            headers: {
                "Content-type": "application/json",
            },
    }).then((response)=>(response.json())).then((ans)=>{
        if(ans.error!=undefined)
        alert(ans.error);
        else
        alert("Registration Succesful");
    });
};
const btn3=document.getElementById("3");
btn3.onclick=function(){
    var a,entry;
    a=document.getElementById("token").value;
    entry= {
        token: a,
    };
    fetch('http://localhost:12345/get_data',{
    method:"POST",
    body:JSON.stringify(entry),
    headers: {"Content-type": "application/json",},    
    }).then((response=>(response.json()))).then((ans)=>{
        if(ans.error==undefined)
        {t1.value=ans.username;
        t3.value=ans.data;}
        else
        alert(ans.error);
    });
    };
