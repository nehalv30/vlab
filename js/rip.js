var canvas = document.querySelector("canvas");
var c=canvas.getContext("2d");
var x1=130
,y1=170
,x2=375
,y2=50
,x3=620
,y3=170
,x4=252.5
,y4=370
,x5=497.5
,y5=370;
var ccc=2


var coordinates=[[x1,y1],[x2,y2],[x3,y3],[x4,y4],[x5,y5]];
c.lineWidth = 3;
var nodes=["A","B","C","D","E"];

function lee(x,y,a,b,col){     //to make line
    c.strokeStyle=col;
    c.beginPath();
    c.moveTo(x,y);
    c.lineTo(a,b);
    c.stroke();
}
function my(col,x,y){         //to make circle
    c.beginPath();
    c.strokeStyle=col
    c.arc(x,y,30,0,Math.PI*2,false);
    c.stroke();
}
function sleep(milliseconds) {         
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function linesec(x,y,a,b){
    lee(x,y,a,b,"blue");
setTimeout(lee,2000,x,y,a,b,"black");
}
function node(x,y){
    my("red",x,y);
setTimeout(my,7000,"black",x,y);
}

function line(x,y,a,b){
    lee(x,y,a,b,"red");
setTimeout(lee,7000,x,y,a,b,"black");
}


function Text(w,x,y){
    c.font = "bold 17px Verdana";
    c.fillStyle="Orange";
    c.fillText(w,x,y);
}

function circlee(){    //to make all the nodes
    c.fillStyle="black";
    c.font= "bold 20px Verdana"
    c.beginPath();
    c.arc(x1,y1,30,0,Math.PI*2,false);
    c.fillText("A",x1-17,y1+5);
    c.stroke();

    c.beginPath();
    c.arc(x2,y2,30,0,Math.PI*2,false);
    c.fillText("B",x2-7,y2-3);
    c.stroke();

    c.beginPath();
    c.arc(x3,y3,30,0,Math.PI*2,false);
    c.fillText("C",x3+3,y3+6);
    c.stroke();

    c.beginPath();
    c.arc(x4,y4,30,0,Math.PI*2,false);
    c.fillText("D",x4-13,y4+11);
    c.stroke();

    c.beginPath();
    c.arc(x5,y5,30,0,Math.PI*2,false);
    c.fillText("E",x5-1,y5+11);
    c.stroke();
}
function alpha(alp){
    alp=alp.toLowerCase();
    switch(alp){
        case "a":
            alp=0;
            break;
        case "b":
            alp=1
            break
        case "c":
            alp=2;
            break;
        case "d":
            alp=3
            break
        case "e":
            alp=4;
            break;
    }
    return alp;
}

var atable={
    dist:[],
    nextn:[]
}
var btable={
    dist:[],
    nextn:[]
}
var ctable={
    dist:[],
    nextn:[]
}
var dtable={
    dist:[],
    nextn:[]
}
var etable={
    dist:[],
    nextn:[]
}

var am;
var ama;
var mat;
function t(){

    atable.dist=[]
    atable.nextn=[]
    btable.dist=[]
    btable.nextn=[]
    ctable.dist=[]
    ctable.nextn=[]
    dtable.dist=[]
    dtable.nextn=[]
    etable.dist=[]
    etable.nextn=[]

   
    
    atable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=am[0][0]);
    atable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=am[0][1]);
    atable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=am[0][2]);
    atable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=am[0][3]);
    atable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(7) > td:nth-child(2) > input").value=am[0][4]);
    atable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=ama[0][0]);
    atable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=ama[0][1]);
    atable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=ama[0][2]);
    atable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=ama[0][3]);
    atable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(7) > td:nth-child(3) > input").value=ama[0][4]);
    
    btable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=am[1][0]);
    btable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=am[1][1]);
    btable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=am[1][2]);
    btable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=am[1][3]);
    btable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(2) > tbody > tr:nth-child(7) > td:nth-child(2) > input").value=am[1][4]);
    btable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=ama[1][0]);
    btable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=ama[1][1]);
    btable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=ama[1][2]);
    btable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=ama[1][3]);
    btable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(2) > tbody > tr:nth-child(7) > td:nth-child(3) > input").value=ama[1][4]);
    
    ctable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=am[2][0]);
    ctable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=am[2][1]);
    ctable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=am[2][2]);
    ctable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=am[2][3]);
    ctable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(7) > td:nth-child(2) > input").value=am[2][4]);
    ctable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=ama[2][0]);
    ctable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=ama[2][1]);
    ctable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=ama[2][2]);
    ctable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=ama[2][3]);
    ctable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(7) > td:nth-child(3) > input").value=ama[2][4]);
    
    dtable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=am[3][0]);
    dtable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=am[3][1]);
    dtable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=am[3][2]);
    dtable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=am[3][3]);
    dtable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(4) > tbody > tr:nth-child(7) > td:nth-child(2) > input").value=am[3][4]);
    dtable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=ama[3][0]);
    dtable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=ama[3][1]);
    dtable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=ama[3][2]);
    dtable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=ama[3][3]);
    dtable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(4) > tbody > tr:nth-child(7) > td:nth-child(3) > input").value=ama[3][4]);
   
    etable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=am[4][0]);
    etable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=am[4][1]);
    etable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=am[4][2]);
    etable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=am[4][3]);
    etable.dist.push(document.querySelector("body > div:nth-child(3) > table:nth-child(5) > tbody > tr:nth-child(7) > td:nth-child(2) > input").value=am[4][4]);
    etable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=ama[4][0]);
    etable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=ama[4][1]);
    etable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=ama[4][2]);
    etable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=ama[4][3]);
    etable.nextn.push(document.querySelector("body > div:nth-child(3) > table:nth-child(5) > tbody > tr:nth-child(7) > td:nth-child(3) > input").value=ama[4][4]);
    }
//case1
function f(){
    
    atable.dist=[]
    atable.nextn=[]
    btable.dist=[]
    btable.nextn=[]
    ctable.dist=[]
    ctable.nextn=[]
    dtable.dist=[]
    dtable.nextn=[]
    etable.dist=[]
    etable.nextn=[]
    c.clearRect(0,0,canvas.width,canvas.height);
    circlee();
    var counter=Math.floor((Math.random()*3)+1)
    if(counter===1){
        // console.log("color1");
        lee(x1,y1,x3,y3,"black");
        Text("1",(x1+x3)/2,(y1+y3-8)/2);
        lee(x1,y1,x5,y5,"black");
        Text("1",(x1+x5+34)/2,(y1+y5+8)/2);
        lee(x2,y2,x4,y4,"black");
        Text("2",(x2+x4+18)/2,(y2+y4-8)/2);
        lee(x4,y4,x5,y5,"black");
        Text("3",(x4+x5)/2,(y4+y5-8)/2);


        am=[
            [0,1000,1,1000,1],
            [1000,0,1000,2,1000],
            [1,1000,0,1000,1000],
            [1000,2,1000,0,3],
            [1,1000,1000,3,0]
        ]
        ama=[
            ['A','-','C','-','E'],
            ['-','B','-','D','-'],
            ['A','-','C','-','-'],
            ['-','B','-','D','E'],
            ['A','-','-','D','E']
        ]
        mat=[
            [0,0,1,0,1],
            [0,0,0,1,0],
            [1,0,0,0,0],
            [0,1,0,0,1],
            [1,0,0,1,0]
            ]
        t();
    
    }
//case 2
    else if(counter===2){
    // console.log("color2");
        lee(x1,y1,x5,y5,"black");
        Text("1",(x1+x5)/2,(y1+y5-8)/2);
        lee(x1,y1,x2,y2,"black");
        Text("2",(x1+x2)/2,(y1+y2-14)/2);
        lee(x2,y2,x5,y5,"black");
        Text("3",(x2+x5+4)/2,(y2+y5-8)/2);
        lee(x2,y2,x3,y3,"black");
        Text("4",(x2+x3)/2,(y2+y3-8)/2);
        lee(x3,y3,x4,y4,"black");
        Text("2",(x4+x3-50)/2,(y4+y3+10)/2);

        am=[
            [0,2,1000,1000,1],
            [2,0,4,1000,3],
            [1000,4,0,2,1000],
            [1000,1000,2,0,1000],
            [1,3,1000,1000,0]
        ]
        ama=[
            ['A','B','-','-','E'],
            ['A','B','C','-','E'],
            ['-','B','C','D','-'],
            ['-','-','C','D','-'],
            ['A','B','-','-','E'],
        ]
        mat=[
            [0,1,0,0,1],
            [1,0,1,0,1],
            [0,1,0,1,0],
            [0,0,1,0,0],
            [1,1,0,0,0]
        ]
        t();
    }   
//case3
    else{
        // console.log("color3");
        lee(x1,y1,x3,y3,"black");
        Text("3",(x1+x3)/2,(y1+y3-8)/2);
        lee(x1,y1,x2,y2,"black");
        Text("1",(x1+x2)/2,(y1+y2-12)/2);
        lee(x3,y3,x5,y5,"black");
        Text("1",(x3+x5+18)/2,(y3+y5-8)/2);
        lee(x2,y2,x4,y4,"black");
        Text("2",(x4+x2+14)/2,(y4+y2-8)/2);
        lee(x3,y3,x4,y4,"black");
        Text("3",(x4+x3)/2,(y4+y3-12)/2);

        am=[
            [0,1,3,1000,1000],
            [1,0,1000,2,1000],
            [3,1000,0,3,1],
            [1000,3,3,0,1000],
            [1000,1000,1,1000,0]
        ]
        ama=[
            ['A','B','C','-','-'],
            ['A','B','-','D','-'],
            ['A','-','C','D','E'],
            ['-','B','C','D','-'],
            ['-','-','C','-','E'],
        ]
        mat=[
            [0,1,1,0,0],
            [1,0,0,1,0],
            [1,0,0,1,1],
            [0,1,1,0,0],
            [0,0,1,0,0]
        ]
        t()
    }

c.stroke();
// c.strokeText();
// S();
}

circlee();

function update(){
    var a1=document.querySelector("body > div.row > div:nth-child(1) > input.input1.ss").value;
    var a2=document.querySelector("body > div.row > div:nth-child(1) > input.input2.ss").value;
    var a3=document.querySelector("body > div.row > div:nth-child(1) > input.input3.ss").value;
    var a1d=a1.toUpperCase();
    var a2d=a2.toUpperCase();    
    a1=alpha(a1);
    a2=alpha(a2);
    am[a1][a2]=parseInt(a3,10);
    am[a2][a1]=parseInt(a3,10);
    mat[a1][a2]=1;
    mat[a2][a1]=1;
    ama[a1][a2]=a2d;
    ama[a2][a1]=a1d;
    t();
    linesec(coordinates[a1][0],coordinates[a1][1],coordinates[a2][0],coordinates[a2][1]);
    Text(a3,(coordinates[a1][0]+coordinates[a2][0])/2,(coordinates[a1][1]+coordinates[a2][1]+8)/2,"orange");

}


 function fun(){
        i=0;
        w=0;
        for(i=0;i<5;i++){
            j=0
            for(j=0;j<5;j++){
                if(mat[i][j]==1){
                    k=0
                    w=parseInt(am[i][j],10);
                    for(k=0;k<5;k++){
                        ll=w+parseInt(am[j][k],10)
                        if(am[i][k]>ll){
                            am[i][k]=ll
                            // if(nodes[])
                            ama[i][k]=nodes[j];
                        }
                    }
                }
            }
        }
        t();
    if(ccc===5){
        ccc=4;
    }
    document.querySelector("body > div.row > div:nth-child(3) > button.btn.btn-light.bbb").innerHTML="Update "+ccc;
    ccc=ccc+1
    }


function dim(){
var A=atable.nextn;
var B=btable.nextn;
var C=ctable.nextn;
var D=dtable.nextn;
var E=etable.nextn;
var p=(document.querySelector("body > div.row > div:nth-child(3) > input.input4").value).toUpperCase();
var q=(document.querySelector("body > div.row > div:nth-child(3) > input.input5").value).toUpperCase();
var i=0;

while(p!=q){
    i+=1;
    if(i>5){
        break;
    }
    console.log(p,q,"start");
    if(p=="A"){
        l1=x1;
        l2=y1;
        node(x1,y1);
        if(q=="B"){
            p=A[1];
        }
        else if(q=="C"){
            p=A[2]
        }
        else if(q=="D"){
            p=A[3]
        }
        else if(q=="E"){
            p=A[4]
        }
        // console.log("a grt",p);
    }
    else if(p=="B"){
        l1=x2;
        l2=y2;
        node(x2,y2);
        if(q=="A"){
            p=B[0];
        }
        else if(q=="C"){
            p=B[2]
        }
        else if(q=="D"){
            p=B[3]
        }
        else if(q=="E"){
            p=B[4]
        }
        // console.log("b grt",p);
    }
    else if(p=="C"){
        l1=x3;
        l2=y3;
        node(x3,y3);
        if(q=="A"){
            p=C[0];
        }
        else if(q=="B"){
            p=C[1]
        }
        else if(q=="D"){
            p=C[3]
        }
        else if(q=="E"){
            p=C[4]
        }
        // console.log("c grt",p);
    }
    else if(p=="D"){
        l1=x4;
        l2=y4;
        node(x4,y4);
        if(q=="A"){
            p=D[0];
        }
        else if(q=="B"){
            p=D[1]
        }
        else if(q=="C"){
            p=D[2]
        }
        else if(q=="E"){
            p=D[4]
        }
        // console.log("d grt",p);
    }
    else if(p=="E"){
        l1=x5;
        l2=y5;
        node(x5,y5);
        if(q=="A"){
            p=E[0];
        }
        else if(q=="B"){
            p=E[1]
        }
        else if(q=="C"){
            p=E[2]
        }
        else if(q=="D"){
            p=E[3]
        }
        // console.log("e grt",p);
    }
    console.log(p,q,"end");
    if(p=="A"){
        l3=x1;
        l4=y1;
    }
    else if(p=="B"){
        l3=x2;
        l4=y2;
    }
    else if(p=="C"){
        l3=x3;
        l4=y3;
    }
    else if(p=="D"){
        l3=x4;
        l4=y4;
    }
    else if(p=="E"){
        l3=x5;
        l4=y5;
    }
    sleep(1000);
    line(l1,l2,l3,l4);
    // setTimeout(wait,2000);
    sleep(1000);
}
    if(p=="A"){
        node(x1,y1);
    }
    else if(p=="B"){
        node(x2,y2);
    }
    else if(p=="C"){
        node(x3,y3);
    }
    else if(p=="D"){
        node(x4,y4);
    }
    else if(p=="E"){
        node(x5,y5);
    }
    console.log("DONE");

}