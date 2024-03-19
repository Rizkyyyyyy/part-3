


const datas = [

{
    name: 'rizky ramdhani',
    stack: 'js',
    age: 44,
},
{
    name: 'rizky',
    stack: 'react',
    age: 17,
},
{
    name: 'ramdhani',
    stack: 'php',
    age: 76,
},
{
    name: 'gea',
    stack: 'c++',
    age: 23,
},
]

datas
.filter((x) => x.age > 25)
.sort((a,b) => a.age - b.age)
.map((values) => console.log(values))

