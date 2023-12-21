
function menu(){
    const nav2=document.getElementById("nav2")
const menuIcon=document.getElementById("menuIcon")



if(nav2.style.display=="block"){
    nav2.style.display="none"
}else{
    nav2.style.display="block"
}

nav2.addEventListener("click",()=>{
    nav2.style.display="none"
})

}


function sendEmail(){

    let senderName=""+document.getElementById("senderName").value;
    let senderMail=""+document.getElementById("senderEmail").value;
    let msg=""+document.getElementById("senderMsg").value;
   
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "shailendrapawar980@gmail.com",
        Password: "16FF841E8852C96D3D37DC4E0B38C87D5BAC",
        To: 'shailendrapawar980@gmail.com',
        From: `${senderMail}`,
        Subject: "This is the subject",
        Body:`Sender name:${senderName} <br><br>`+ msg

    }).then(
        message => alert("mail sent successfully..!!!")
    );
}


var scrollFunc=function(){
    let icon =document.getElementById("contactIcon")
    var y=window.scrollY;
    if(y>=800){

        icon.style.display="grid"
    }
    else{
        icon.style.display="none"
    }
}

window.addEventListener("scroll",scrollFunc)
