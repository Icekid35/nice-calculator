var allbuttons=document.querySelectorAll('button')
var screen=document.querySelector('.screen')
var value=[0]
var firstnum=[]
var secondnum
var divider=''
allbuttons.forEach(button=>{
  button.addEventListener('click',(e)=>{
switch(e.target.innerText.toString().toLowerCase()){
  case 'del':
        if (value[0]==='0') {
          return 
        }
        value.pop()
         if(value.length<1)value.push(0)
       screen.innerText=numberWithCommas(value.join(''))

        break;
      case 'reset':
        value=[]
        firstnum=[]
        if(value.length<1)value.push(0)
        screen.innerText=numberWithCommas(value.join(''))

        break;
        case '/':
          calculate('/')
          break;
          case 'x':
            calculate('*')
            break;
            case '+':
              calculate('+')
              break;
              case '-':
                calculate('-')
                break;
               case '=':
                 if (divider!='') {
                   calculate('')
                 }
            
                 
                 break;
                 
               default:
               if (value[0]===0) {
                 value=[]
               }
               if (e.target.innerText=='.'){
                 if(value.length<1){
                 value.push(0 +e.target.innerText)}else{
                   value.push(e.target.innerText)
                   
                 }
               }else{
               value.push(parseInt(e.target.innerText))
               }
screen.innerText=numberWithCommas(value.join(''))
               break;
              
            
          
}    

  })
})

function calculate(now){
  if(value[0]===0)return
  if(divider==''){
   
            switch (now) {
        case '/':
          if (firstnum.length>0) {
            value=[parseInt(firstnum.join(''))/parseInt(value.join(''))]
          }
          firstnum=value
          
           if(value.length<1)value.push(0)
          screen.innerText=numberWithCommas(value.join(''))

          value=[0]
          break;  
          
         
        case '-':
          if (firstnum.length>0) {
            value=[parseInt(firstnum.join(''))-parseInt(value.join(''))]
          }
          firstnum=value
   
           if(value.length<1)value.push(0)
          screen.innerText=numberWithCommas(value.join(''))

          value=[0]
          break;
        case '+':
          if (firstnum.length>0) {
            value=[parseInt(firstnum.join(''))+parseInt(value.join(''))]
          }
          firstnum=value
          
           if(value.length<1)value.push(0)
          screen.innerText=numberWithCommas(value.join(''))

          value=[0]
          break;
        case '*':
          if (firstnum.length>0) {
            value=[parseInt(firstnum.join(''))*parseInt(value.join(''))]
          }
          firstnum=value
           if(value.length<1)value.push(0)
          screen.innerText=numberWithCommas(value.join(''))

          value=[0]
          break;
          default:
         break ;
  }

          divider=now
    return
  }
  switch (divider) {
        case '/':
          if (firstnum.length>0) {
            value=[parseInt(firstnum.join(''))/parseInt(value.join(''))]
          }
          firstnum=value
       
           if(value.length<1)value.push(0)
          screen.innerText=numberWithCommas(value.join(''))

          value=[0]
          break;  
          
         
        case '-':
          if (firstnum.length>0) {
            value=[parseInt(firstnum.join(''))-parseInt(value.join(''))]
          }
          firstnum=value
   
           if(value.length<1)value.push(0)
          screen.innerText=numberWithCommas(value.join(''))

          value=[0]
          break;
        case '+':
          if (firstnum.length>0) {
            value=[parseInt(firstnum.join(''))+parseInt(value.join(''))]
          }
          firstnum=value
          
           if(value.length<1)value.push(0)
          screen.innerText=numberWithCommas(value.join(''))

          value=[0]
          break;
        case '*':
          if (firstnum.length>0) {
            value=[parseInt(firstnum.join(''))*parseInt(value.join(''))]
          }
          firstnum=value
           if(value.length<1)value.push(0)
          screen.innerText=numberWithCommas(value.join(''))

          value=[0]
          break;
          default:
       break   ;
  }
  divider=now
}

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
