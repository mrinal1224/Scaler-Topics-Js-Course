var myScore = 78

if(myScore > 90){
       console.log('Yayyy got my Bicycle')
}

else{
       console.log('Oops didnt get it this time!')
}


let arr = [30 , 45 , 95]




function getGrade (score){
       if(score >90 ){
              console.log('The grade is A')
          }
          
          else if(score >=70 && score<=89){
              console.log('The Grade is B')
          
          }
          
          else if(score >=60 && score<=69){
              console.log('The Grade is C')
          
          }
          
          else if(score >=40 && score<=59){
              console.log('The Grade is D')
          
          }
          
          else{
              console.log('The Grade is F')
          }
}

for(let i=0 ; i<arr.length ; i++){
       getGrade(arr[i])
}

