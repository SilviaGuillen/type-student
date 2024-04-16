type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'| '*';
//number, string, undefined

type Student = {
    firstname: string;
    lastname: string;
    age: number;
    grades: Grade[];
}

const students: Student[]=[{
    firstname:"Lucy",
    lastname:"Cooper",
    age:12,
    grades:[1,2,3,4,5,6]
},
    {
        firstname: "Bob",
        lastname: "Sponge",
        age:11,
        grades: ["A",3,1,"B","*",2]
    },
    {
        firstname: "Maria",
        lastname:"Kennedy",
        age:11,
        grades:[1,1,3,"*",2,"C"]

    }
    ]



function printStudents(student:Student) : void {
    console.log(student.firstname + " " + student.lastname + " " + student.age);
    console.log("======================================");
    console.log(student.grades.toString())
}
printStudents(students[1]);

function printAllStudents(students: Student[]): void {
    console.log("List of Students:");
    students.forEach((student, index) => {
        console.log(`\nStudent ${index + 1}:`);
        printStudents(student);
    });}
printAllStudents(students);






