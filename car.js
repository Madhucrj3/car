const AddCar=document.getElementById("AddCar");
class car{
    speed;
    light;
    constructor(speed,light)
    {
        this.speed=speed;
        this.light=light;
    }
    increment=()=>{
        if(this.light==="green")
        {
           ++this.speed;
        }
        else
        console.log("start the car");
    }
    decrement=()=>{
        if(this.light==="green" && this.speed>0){
            --this.speed;
        }
        else
        console.log("start the car");
    }
    start=()=>{
           this.light="green";
           this.speed=10;
    }
    stop=()=>{
        this.light="red";
        this.speed=0;
    }
    createUI=(curr)=>{
        let div1=document.getElementById("cars");
        let div2=document.createElement("div");
        div2.setAttribute("class","car-cont")
        let div3=document.createElement("div");
        let div6=document.createElement('div');
        let p1=document.createElement('p');
        div6.setAttribute("class","currlight");
        div6.setAttribute("id","light"+curr);
        div3.appendChild(div6);
        p1.setAttribute("id","speed"+curr);
        p1.setAttribute("class","speed");
        p1.appendChild(document.createTextNode(this.speed+" kmph"));
        div3.appendChild(p1);
        div2.appendChild(div3);
        let div4=document.createElement("div");
        let btn1=document.createElement("button");
        btn1.innerHTML = "+";
        btn1.setAttribute("id","inc"+curr);
        btn1.setAttribute("class","incr");
        btn1.addEventListener("click",(e)=>{
            // console.log("hello");
            this.increment();
            document.getElementById("speed"+e.target.id.substring(3)).innerHTML=this.speed +" kmph";
        })
        div4.appendChild(btn1);
        let btn2=document.createElement("button");
        btn2.innerHTML = "-";
        btn2.setAttribute("id","dec"+curr);
        btn2.setAttribute("class","decr");
        btn2.addEventListener("click",(e)=>{
            this.decrement();
            document.getElementById("speed"+e.target.id.substring(3)).innerHTML=this.speed +" kmph";
        })
        div4.appendChild(btn2);
        div2.appendChild(div4);
        let div5=document.createElement("div");
        let btn3=document.createElement("button");
        btn3.innerHTML = "Start";
        btn3.setAttribute("id","start"+curr);
        btn3.setAttribute("class","startcar");
        btn3.addEventListener("click",(e)=>{
            this.start();
            document.getElementById("stop"+e.target.id.substring(5)).disabled=false;
            document.getElementById("inc"+e.target.id.substring(5)).disabled=false;
            document.getElementById("dec"+e.target.id.substring(5)).disabled=false;
            document.getElementById("light"+e.target.id.substring(5)).style.backgroundColor="green";
            document.getElementById("speed"+e.target.id.substring(5)).innerHTML=this.speed +" kmph";
        })
        div5.appendChild(btn3);
        let btn4=document.createElement("button");
        btn4.innerHTML = "Stop";
        btn4.setAttribute("id","stop"+curr);
        btn4.setAttribute("class","stopcar");
        btn4.addEventListener("click",(e)=>{
            this.stop();
            document.getElementById("light"+e.target.id.substring(4)).style.backgroundColor="red";
            document.getElementById("speed"+e.target.id.substring(4)).innerHTML=this.speed +" kmph";
            document.getElementById("stop"+e.target.id.substring(4)).disabled=true;
            document.getElementById("inc"+e.target.id.substring(4)).disabled=true;
            document.getElementById("dec"+e.target.id.substring(4)).disabled=true;
        })
        div5.appendChild(btn4);
        div2.appendChild(div5);
        div1.appendChild(div2);
    }
}
let curr=1;
let car1=new car(10,"green");
car1.createUI(curr);
AddCar.addEventListener("click",()=>{
    curr++;
    // let vari="car"+curr;
    let car2=new car(10,"green");
    car2.createUI(curr);
})