"use strict";

//creat array allEmp
const allEmp =[];

//creat function Employ
function Employ (ID, fName, department, level, pic){
    this.employeeId = ID;
    this.fName = fName;
    this.department = department;
    this.level = level;
    this.photo = pic;
    allEmp.push(this)
}


let empLevel = ["Junior", "Mid-Senior", "Senior"];


let salary;

Employ.prototype.salary= function () {
(this.level.toLowerCase()==="senior")?  this.salary=
getRndInteger(1500,2000):
(this.level.toLowerCase()==="mid-senior")?  this.salary=
getRndInteger(1000,1500):
this.salary=getRndInteger(500,1000) 


allEmp.push(this.salary*0.075);
return this.salary;

}


const ghazi = new Employ ("1000", "Ghazi Samer", "Administration", "Senior","assets/emp photos/Ghazi.jpg");
const lana = new Employ ("1001", "Lana Ali", "Finance", "Senior","assets/emp photos/Lana.jpg");
const tamara = new Employ ("1002", "Tamara Ayoub", "Marketing", "Senior","assets/emp photos/Tamara.jpg");
const safi = new Employ ("1003", "Safi Walid", "Administration", "Mid-Senior","assets/emp photos/Safi.jpg");
const omar = new Employ ("1004", "Omar Zaid", "Development", "Senior","assets/emp photos/Omar.jpg");
const rana = new Employ ("1005", "Rana Saleh", "Development", "Junior","assets/emp photos/Rana.jpg");
const hadi = new Employ ("1006", "Hadi Ahmad", "Finance", "Mid-Senior","assets/emp photos/Hadi.jpg");






  //for cards task (10)

  Employ.prototype.employeeCard = function() {
    
 

    if( this.department.toLowerCase()==="administration"){ 
  
  
      const sect = document.getElementById("administration");
      const divEl = document.createElement('div');
      sect.appendChild(divEl);
      let image=document.createElement("img");
      image.src=this.photo;
      divEl.appendChild(image);
      image.style.width="160px";
      const node = document.createTextNode (`Name: ${this.fName}  , ID : ${this.employeeId}  ,
      Department : ${this.department} , Level : ${this.level}  , Salary : ${this.salary()} `);
      divEl.appendChild(node);
  
      divEl.style.margin= '5px';
      divEl.style.padding= '5px';
      divEl.style.backgroundColor = '#f1f7c1';
      divEl.style.height ='250px';
      divEl.style.width ='160px';
      divEl.style.border =' 5px solid #2943f0';
      
  
      } else if (this.department.toLowerCase()==="finance"){
  
      const sect = document.getElementById("finance");
      const divEl = document.createElement('div');
      sect.appendChild(divEl);
      let image=document.createElement("img");
      image.src=this.photo;
      divEl.appendChild(image);
      image.style.width="160px";
      const node = document.createTextNode (`Name: ${this.fName} , ID : ${this.employeeId}  ,
      Department : ${this.department} , Level : ${this.level}  , Salary : ${this.salary()} `);
      divEl.appendChild(node);
      

      divEl.style.margin= '5px';
      divEl.style.padding= '5px';
      divEl.style.backgroundColor = '#c9f2f1';
      divEl.style.height ='250px';
      divEl.style.width ='160px';
      divEl.style.border =' 5px solid #2943f0';
    
  
      } else if (this.department.toLowerCase() ==='marketing'){
  
        const sect = document.getElementById("marketing");
        const divEl = document.createElement('div');
        sect.appendChild(divEl);
        let image=document.createElement("img");
        image.src=this.photo;
        divEl.appendChild(image);
        image.style.width="160px";
        const node = document.createTextNode (`Name: ${this.fName} , ID : ${this.employeeId}  ,
        Department : ${this.department} , Level : ${this.level}  , Salary : ${this.salary()} `);
        divEl.appendChild(node);
  
        divEl.style.margin= '5px';
      divEl.style.padding= '5px';
      divEl.style.backgroundColor = '#ebf7fc';
      divEl.style.height ='250px';
      divEl.style.width ='160px';
      divEl.style.border =' 5px solid #2943f0';


      } else if (this.department.toLowerCase() ==='development'){
  
        const sect = document.getElementById("development");
        const divEl = document.createElement('div');
        sect.appendChild(divEl);
        let image=document.createElement("img");
        image.src=this.photo;
        divEl.appendChild(image);
        image.style.width="160px";
        const node = document.createTextNode (`Name: ${this.fName} , ID : ${this.employeeId}  ,
        Department : ${this.department} , Level : ${this.level}  , Salary : ${this.salary()} `);
        divEl.appendChild(node);
        
        
      divEl.style.margin= '5px';
      divEl.style.padding= '5px';
      divEl.style.backgroundColor = '#86d9fc';
      divEl.style.height ='250px';
      divEl.style.width ='160px';
      divEl.style.border =' 5px solid #2943f0';
}
   
  }
  
  function printEmplinfo () {

  for(let i = 0 ; i < allEmp.length ; i++ ){

    allEmp[i].employeeCard();
   
   
  }}
  
  printEmplinfo ();
  
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }