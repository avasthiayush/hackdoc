

const heading = 'Stay Home Stay Safe !';
let i = 0;

const typing = () => {
    if(i < heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;
         setTimeout(typing, 100);
    }
}
typing();


mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

/* Getting name of Hospital.*/
document.getElementById("clicksearch").addEventListener("click",function()
{
     let val=document.getElementById("search").value;
     
});

const update = document.querySelector('#update1_hospitalbed')

 update.addEventListener('click',  => {
   fetch('/dashboard/update/hospital_beds', {
     method: 'put',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(),
   })

})










