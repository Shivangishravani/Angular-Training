//1.Basic Types:
let studentAge:number=21;
let studentName:string="Shivangi Shravani";
let isEmployee:boolean=false;
let studentMArks:number[]=[89,87,83,75];
let parentsInfo:[string,number]=["Shivangi Gurumurthy",1234567890];
enum WeekDays{Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday};

//2.Functions:
function add(x:number,y:number):number{
    return x+y;
}

function capitalize(x:string):string{
    return x.charAt(0).toUpperCase()+x.slice(1).toLocaleLowerCase();
}

//3.Interfaces:
interface Person{
    name:string,
    age:number,
    email:string
}

//4.Classes:
class Car{
    make:string;
    model:string;
    year:number;
    displayInfo(){
        console.log("CAR DETAILS");
        console.log("Made by:"+this.make);
        console.log("The Model is:"+this.model);
        console.log("Year:"+this.year);
    }
}

//5.Generics:
function reverseArray(x:any[]){
    return x.reverse();
}


//Testing:
//1.Basic Types:
console.log("Number:"+studentAge);
console.log("String:"+studentName);
console.log("Boolean:"+isEmployee);
console.log("Array of Numbers:"+studentMArks);
console.log("Tuple:"+parentsInfo);
console.log("Enum:"+WeekDays.Friday);

//2.Functions:
console.log("Add of 1,2:"+add(1,2));
console.log("Capitalize HelloWorld : "+capitalize("HelloWorld"));

//3.Interfaces:
let p:Person={
    name:"Shravani",
    age:21,
    email:"shivangishravani88@gmail.com"
};
console.log("Person Details:");
console.log(p.name,p.age,p.email);

//4.Classes:
let c=new Car();
c.make="Karl Benz";
c.model="Mercedes-Benz";
c.year=1901;
c.displayInfo();

//5.Generics:
console.log("ReverseArray of [1,23,true]"+reverseArray([1,23,true]));