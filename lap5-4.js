let users =[
    {
        name:"nguyen van a",
        age:18,
    },
    {
        name:"nguyen van b",
        age:35,
    },
    {
        name:"nguyen van c",
        age:20,
    },
    {
        name:"nguyen van d",
        age:21,
    }
]
let user=users.filter(x=> x.age<=30 && x.age>=18);
console.log(user);


