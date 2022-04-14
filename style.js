var options=[
  {
  
   bgcolor: "hsl(222, 26%, 31%)" ,
   textcolor: "hsl(0, 0%, 100%)",
   numbersbg:  "hsl(30, 25%, 89%)" ,
   numberscolor:  "hsl(221, 14%, 31%)",
   numbersshadowcolor:  "hsl(28, 16%, 65%)",
  delbg: "hsl(225, 21%, 49%)",

   delshadow:  "hsl(224, 28%, 35%)",
    equalsbg:  "hsl(6, 63%, 50%)" ,

   equalsshadow: "hsl(6, 70%, 34%)" ,
   innerbg: "hsl(223, 31%, 20%)" ,
   screenbg: "hsl(224, 36%, 15%)",
   equalscolor:"white",

},
  {
  
   bgcolor: "hsl(0, 0%, 90%)" ,
   numbersbg:  "hsl(45, 7%, 89%)" ,
   numberscolor:  "hsl(60, 10%, 19%)",
   textcolor:  "hsl(60, 10%, 19%)",
   numbersshadowcolor:  "hsl(35, 11%, 61%)",
   delbg:  " hsl(185, 42%, 37%)",
   delshadow:  "hsl(185, 58%, 25%)",
   equalsbg:  "hsl(25, 98%, 40%)" ,
   equalsshadow: "hsl(25, 99%, 27%)" ,
   equalscolor:"white",
   innerbg: "hsl(0, 5%, 81%)" ,
   screenbg: "hsl(0, 0%, 93%)",

},
  {
  
   bgcolor: "hsl(268, 75%, 9%)" ,
  textcolor:  "hsl(52, 100%, 62%)",
  numbersbg:  "hsl(268, 47%, 21%)" ,
   numberscolor:  "hsl(52, 100%, 62%)",
   numbersshadowcolor:  "hsl(290, 70%, 36%)",
   delbg:  "hsl(281, 89%, 26%)",
   delshadow:  "hsl(285, 91%, 52%)",
      equalsbg:  "hsl(176, 100%, 44%)" ,
   equalsshadow: "hsl(177, 92%, 70%)" ,
   innerbg: "hsl(268, 71%, 12%)" ,
   screenbg: "hsl(268, 71%, 12%)",
   equalscolor:"white",

},

]


var switchbars=document.querySelectorAll('.switchbar')
switchbars.forEach((bar,index)=>{
  
  bar.addEventListener('click',(e)=>{
    switchbars.forEach((ba,ind)=>{
      ba.innerHTML=''
      if(ind===index) ba.innerHTML='<div class="active" ></div>'

    })
    e.target.innerHTML='<div class="active" ></div>'
  
 var reset=options[index] 
var rootEle=document.documentElement.style
Object.keys(reset).forEach((key,i)=>{
  rootEle.setProperty(`--${key}`,Object.values(reset)[i])
  localStorage.setItem('prefered',index)
})


  })
})
  
if(localStorage.getItem('prefered')){
  switchbars[localStorage.getItem('prefered')].click()
}
