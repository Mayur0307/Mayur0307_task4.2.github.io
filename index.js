function validate(){
    flag1=0;
    flag2=0;
    flag3=0;
    flag4=0;
    
    name(document.getElementById("name").value);
    reg(document.getElementById("regno").value);
    mail(document.getElementById("email").value);
    num(document.getElementById("phoneno").value);
    
    var originalvalue1 = document.getElementById("name").value;
    var originalvalue2 = document.getElementById("regno").value;
    var originalvalue3 = document.getElementById("dob").value;
    var originalvalue4 = document.getElementById("prog").value;
    var originalvalue5 = document.getElementById("email").value;
    var originalvalue6 = document.getElementById("phoneno").value;

    if(flag1==1 || flag2==1 || flag3==1 || flag4==1){
        swal("Form Not Submitted!!", "You gave wrong information!", "warning");
    }
    else{
        swal("Form Submitted!", "Thank you for giving information!", "success");
        console.log(originalvalue1);
        console.log(originalvalue2);
        console.log(originalvalue3);
        console.log(originalvalue4);
        console.log(originalvalue5);
        console.log(originalvalue6);
    }
}

function name(name)
{
    n=name.length;
    flag=1;
    for(i=0;i<n;i++){
        c=name.charAt(i);
        if(!((c>='A' && c<='Z') || (c>='a' && c<='z') || c==' '))
        flag=0;
    } 
    if(flag==0){
        alert("Name should contain only alphabets");
        flag1=1;
    }
}

function reg(regno){
    flag=1;
    for(i=0;i<regno.length;i++){
        c=regno.charAt(i);
        if(!((c>='A' && c<='Z') || (c>='a' && c<='z') || (c>='0' && c<='9')))
        flag=0;
    }
    if(flag==0){
        alert("Register Number should conatin only alphabets and numbers");
        flag2=1;
    }
}

function mail(email){
    atp=email.indexOf("@");
    dotp=email.lastIndexOf(".");
    if (atp<1 || dotp<atp+2 || dotp+2>=email.length){
        alert("Enter a valid E-mail ID");
        flag3=1;
    }
}

function num(phoneno){

    if(phoneno.length<10){
        alert("Enter a valid Phone Number");
        flag4=1;
    }    
}