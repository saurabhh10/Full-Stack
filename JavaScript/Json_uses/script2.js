
const student = [
    {
        name: "Saurabh",
        age: 20,
        course: "B.Tech",
        skills: ["Java", "JavaScript", "HTML"],
        project: [
            { projectname: "minorProj" },
            { projectname: "minorProj2" }
        ]
    },
              
    {
        name: "Gautam",
        age: 69,
        course: "B.Tech",
        skills: ["Java", "JavaScript", "HTML"],
        project: [
            { projectname: "minorProj" },
            { projectname: "minorProj2" }
        ]
    }
];

console.log(student);

console.log(student[0].name);
console.log(student[1].name);
console.log(student[0].skills[1]);
console.log(student[0].project[0].projectname);
console.log(student[1].project[1].projectname)

student[1].age=19;

console.log(student[0])



delete student[1].course;
console.log(student[1]);


