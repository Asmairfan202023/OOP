#! /usr/bin/env node
import inquirer from "inquirer"
class Student {
    name :string
    constructor(n:string){
        this.name = n
    }
}


class Person{
    students:Student[] = []
    addStudent(obj:Student){
        this.students.push(obj)
    }
}
const persons = new Person()

const programStart = async(person :Person)=>{
    do{
    console.log("welcome!");
    const ans = await inquirer.prompt({
        name: "select",
        type:"list",
        message : "What would you like to interact with?",
        choices: ["staff", "student", "exit"]
    })

    if (ans.select == "staff"){
        console.log("You approach the staff room. Please feel free to ask any question");
    }
    else if (ans.select ==="student"){
        const ans = await inquirer.prompt({
            name:"student",
            type: "input",
            message: "Enter the student name you wish to engage with"
        })
    
        const student = persons.students.find(val =>val.name ==ans.student) 
    if (!student){
        const name = new Student(ans.student);
        person.addStudent(name);
        console.log(`Hello! I am ${name.name}. Nice to meet you`);
        console.log ("New student added successfully");
        console.log ("Current student list");
        console.log (persons.students);
    }else  {
        console.log(`Hello I am ${Student.name}Nice to see you again`);
        console.log("Existing students list");
        console.log (person.students);
    } 
 }
  else if (ans.select =="exit"){
        console.log("Exiting the program......");
        process.exit();
    }
}while(true)

}
 
    programStart(persons);
    