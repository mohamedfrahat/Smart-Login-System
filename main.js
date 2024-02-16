
var SignName = document.getElementById('SignName');
var Signemail = document.getElementById('Signemail')
var Signpassword = document.getElementById('Signpassword')
var email = document.getElementById('email')
var password = document.getElementById('password')



var userlist =[];
if(localStorage.getItem('list')){
    userlist=JSON.parse(localStorage.getItem('list'));
}
document.getElementById('SignUpBtn').addEventListener('click',addNewUser );
document.getElementById('SignInBtn').addEventListener('click',userlogin );

function userlogin(){
        
    if( usersearch(email.value) && password.value==relatedpass)
   {
    // window.open('welcompage.html','_self')
    localStorage.setItem('my',relateduser);
    // window.open('welcompage.html')
    window.open('welcompage.html','_self')

   }
   else{
    document.getElementById('loginfalid').classList.replace('d-none','d-block')
   }

    claerform();
    
}

function addNewUser()
{
    

    
    
    if(validation())
    {
       
  
        if(usersearch(Signemail.value))
        {
          
         document.getElementById('exist').classList.replace('d-none','d-block');
         document.getElementById('Success').classList.replace('d-block','d-none');
         document.getElementById('falid').classList.add('d-block','d-none');
            
     
         claerform();

        }
        else{

            var User ={
                Username:SignName.value,
                Useremail:Signemail.value,
                Userpassword:Signpassword.value
            }
        
            userlist.push(User);
          
         saveEmail();
        

         document.getElementById('Success').classList.replace('d-none','d-block');
         document.getElementById('exist').classList.replace('d-block','d-none');
         document.getElementById('falid').classList.add('d-block','d-none');
     
         claerform();
        }
    }

    else{

        document.getElementById('falid').classList.replace('d-none','d-block');
        document.getElementById('Success').classList.replace('d-block','d-none');
        document.getElementById('exist').classList.add('d-block','d-none');
        

    }
   
   
    
}

function validation()
{
    var regx =/^[\w\.-]+@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*(\.[a-zA-Z]{2,})$/;
    
    if(regx.test(Signemail.value)){
        return true;
    }
    else
    {
        return false;
    }
}

function claerform(){
    SignName.value='';
    Signemail.value='';
    Signpassword.value='';

}
function saveEmail()
{
    localStorage.setItem('list' ,JSON.stringify(userlist));

}
var relatedpass ='';
var relateduser ='';
function usersearch(serechvalue){
    for(var i=0;i<userlist.length;i++)
    {
        if(userlist[i].Useremail==serechvalue)
        {
            relatedpass =userlist[i].Userpassword;
            relateduser =userlist[i].Username;
            return true;
        }
        

      
    }
    return false;
    

 



}

var signup =document.getElementById('signup');

signup.addEventListener('click', function (eventInfo) {

    document.getElementById('signINPage').classList.add('d-none');
    document.getElementById('signUPPage').classList.replace( 'd-none','d-block');
    
})