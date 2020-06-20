
function check(){
    var a = document.getElementsByName('q1'); 
              
    for(i = 0; i < a.length; i++) { 
        if(a[i].checked) {
        a1=a[i].value;        }
    } 
    var b = document.getElementsByName('q2'); 
              
    for(i = 0; i < b.length; i++) { 
        if(b[i].checked) {
        a2=b[i].value;        }
    } 
   
    var c = document.getElementsByName('q3'); 
              
    for(i = 0; i < c.length; i++) { 
        if(c[i].checked) {
        a3=c[i].value;        }
    } 
   
    var d = document.getElementsByName('q4'); 
              
    for(i = 0; i < d.length; i++) { 
        if(d[i].checked) {
        a4=d[i].value;        }
    } 

    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);

    
   var score=0
   if(a1=="Network"){
       score=score+1
   }
   if(a2=="Router"){
    score=score+1
       
   }
 if(a3=="OSPF"){
    score=score+1

   }
   if(a4=="True"){
    score=score+1
       
   }

   alert("Your score is "+score);
   alert("Correct answers are "+"Q1 "+"Netwrork "+"Q2 "+"Router "+"Q3 "+"OSPF "+"Q4 "+"True");
    

}