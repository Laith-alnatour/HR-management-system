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



let empLevel = ["Junior", "Mid-Senior", "Senior"]

/*
Employ.prototype.salary= function () {
 
    for (let i=0; i<4; i++)
 
    if (this.level === empLevel[i]){
        this.salary = Math.random()*500+(500*(i+1))
        this.salary = this.salary-(this.salary*0.075)


  return this.salary=Math.floor(this.salary)}}
  
let salary;
*/

Employ.prototype.salary= function () {
(this.level.toLowerCase()==="senior")?  this.salary=
getRndInteger(1500,2000):
(this.level.toLowerCase()==="mid-senior")?  this.salary=
getRndInteger(1000,1500):
this.salary=getRndInteger(500,1000) 


allEmp.push(this.salary*0.075);
console.log(this.salary)

return this.salary;

}



Employ.prototype.printInfo = function () { document.write(`<h3>${this.fName}: ${this.salary()} JD <br></h3>`) };



const ghazi = new Employ ("1000", "Ghazi Samer", "Administration", "Senior","");
const lana = new Employ ("1001", "Lana Ali", "Finance", "Senior","");
const tamara = new Employ ("1002", "Tamara Ayoub", "Marketing", "Senior","");
const safi = new Employ ("1003", "Safi Walid", "Administration", "Mid-Senior","");
const omar = new Employ ("1004", "Omar Zaid", "Development", "Senior","");
const rana = new Employ ("1005", "Rana Saleh", "Development", "Junior","");
const hadi = new Employ ("1006", "Hadi Ahmad", "Finance", "Mid-Senior","");



function printEmplinfo () {

for (let i=0; i<allEmp.length;i++){

    if (typeof(allEmp[i]) !== "number"){
    allEmp[i].printInfo();

 //    console.log(allEmp[i].salary,allEmp[i].fName );
    
}}}



printEmplinfo()
let salary;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


/*
test new way (may need it later)
const allUsers = [];
function Employe(idValue,nameValue,depValue,levelValue,imageValue,salaryValue){
this.id=id ;
this.name=name;
this.dep=dep;
this.level=level;
this.image=image;


allUsers.push(this);
}
let level = ["Junior", "Mid-Senior", "Senior"]

Employee.prototype.salary= function () {
    for (let i=0; i<employeesLevels.length; i++)
    if (this.level === employeesLevels[i]){
        this.salary = Math.random()*500+(500*(i+1))
        this.salary-= this.salary*0.075
        return this.salary=Math.floor(this.salary)}}

Employee.prototype.printInfo = function () { document.write(`<p>${this["Full Name"]}: ${this.salary()} JD</p>`)}






const ghazi = new User("1000","Ghazi Samer","Administration","Senior","image")	;
const lana = new User("1001","Lana Ali	","Finance","Senior","image")	;
const tamara = new User("1002","Tamara Ayoub","Marketing","Senior","image")	;
const safi = new User("1003","Safi Walid","Administration","Mid-Senior","image")	;
const omar = new User("1004","Omar Zaid","Development","Senior","image",)	;
const rana = new User("1005","Rana Saleh","Development","Junior","image")	;
const hadi = new User("1006","Hadi Ahmad","Administration","Finance","image")	;

function printEmployeesinfo () {
    for (let i=0; i<employ.length;i++){
    employ[i].printInfo()
    }}
    printEmployeesinfo()

console.log(allUsers)





*/