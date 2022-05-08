var li_list=document.querySelectorAll('.zt ul li')

 var divtext=document.getElementById('yy')
 



for(var i=0;li_list.length>i;i++){
    console.log(li_list[i]);
   li_list[i].onclick=function () {
       divtext.style.display='block'
   var p33= document.createElement('p3')
   
    p33.innerHTML=this.innerHTML
    divtext.appendChild(p33)
    p33.style.display='block'
  var strong=  p33.querySelector('strong')
  strong.style.display='block'
  strong.style.color='olive'
    p33.style.marginTop='10px'
  console.log(p33);
   }
       
   }