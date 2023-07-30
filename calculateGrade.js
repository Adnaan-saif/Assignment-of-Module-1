
function calculateGrade(marks){
    let studentGrade;
    switch (true) {
        case (marks<=100 && marks>=90) :
            studentGrade = ('A')
        break;
        case (marks<=89 && marks>=80) :
            studentGrade = ('B')
        break;
        case (marks<=79 && marks>=70) :
            studentGrade = ('C')
        break;
        case (marks<=69 && marks>=60) :
            studentGrade = ('D')
        break;
        default :
            studentGrade = ('F')
        break;
    }
    return studentGrade;
}
let marks = Math.floor(Math.random() * 90) + 10;
let result = calculateGrade(marks);
console.log(`The grade for the score ${marks} is ${result}`);