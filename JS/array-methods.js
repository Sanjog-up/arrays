//? array methods

//! hof
// loop
// arr.forEach(callback)

let number = [23, 45, 75, 3, 4,];
const callback = (value, index, array) => {
    console.log(value, index, array);
};
number.forEach(callback);
const result = number.forEach((value, index,) => {
    console.log(index)
    number[index] = value * 2;
});
console.log(number);

//console.log (result);

//? map x => y
const double = number.map((value) => {
    return value * 2;
});
console.log(number, double);



//? filter
const even = number.filter(value => value % 2 === 0);
console.log(even);
const odd = number.filter(value => value % 2 !== 0);
console.log(odd);

const value = number.filter((number, i) => number % 2 === 0 );
console.log(value);

//! reduce
let sum = number.reduce((acc, value) => {
    return(acc += value);
}, 0);
console.log(sum);

//findIndex
// every
// some
//...
const student = [
    {
        name: "Ram",
        marks = [37, 78, 78],
        // avg_marks:
    },
    {
        name: "Hari",
        marks: [14, 46, 37],

    },
];

// calculate_avg
// {name, marks} => {name, marks, avg_avg}
// {name, marks } => {name, marks, avg_avg}
                        const stu_with_avg = student.map((student) => {
                        const avg_marks = student.marks.reduce((acc, mark) =>{
                            return (acc = mark + avg_marks);
                        });
                        const avg = total_marks / student.marks.length;
                        return {
                            name : student.name,
                            marks : student.marks,
                            avg_marks : avg,
                        };
                    });
                    console.log(stu_with_avg);

                    const passed_stu = stu_with_avg.filter((stu) =>{
if (stu.avg_marks >= 50) {
    return stu;
}
                    });
                    const passed_stu = stu_with_avg.filter((stu) => stu.avg_mark >= 50);
                    console.log(passes_stu);
// name-avg ['ram-59.6', sita-50.2]
// {} => ``
const passed = passed_stu.map((stu => {
    return `${stu.name}-${stu.avg_mark}`;
}));
console.log(passed);

// calculate_avg
// {name, marks } => {name, marks,avg_avg}
const stu_with_avg = student.map((student) => {
    const total_marks = student.marks.reduce((acc, mark) => {
    return (acc = mark + acc);
});
const avg = total_marks / student.marks.length;
return {
    name: student.name,
    marks: student.marks,
    avg_mark: avg,
};
});

const cal_avg = (marks) => {
const total_marks = student.marks.reduce((acc, mark) => {
    return (acc = mark + acc);
});
const avg = total_marks / marks.length;
return avg;
};

                    //
                    // 60 >
