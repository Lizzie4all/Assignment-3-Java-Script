var student = ["IT Student IN UJHUB"];
console.log(student);

var student = [
    {
        name: "Emmanuel Elizabeth",
        age: 25,
        address: "Faringada",
        tribe: "Ibibio",
        gender: "female",
        Height: 0.55,
        department:"CSC",
        level: 400,
        grade: [60,70,80,90,100]
    },
    {
        name:"kaslong Kevin",
        age: 21,
        address:"Twad",
        tribe:"Yoruba",
        gender:"male",
        Height:0.60,
        department:"CSC",
        level:200,
        grade: [60,70,80,90,100]
    },
    {
        name:"Mark Adams",
        age: 20,
        address:"Rukuba Road",
        tribe:"Idoma",
        gender:"male",
        Height:0.65,
        department:"CSC",
        level:300,
        grade: [50,70,80,90,100]
    },
    {
        name:"Oyekale Tosin",
        age: 22,
        address:"Salama Hostel",
        tribe:"Yuroba",
        gender:"female",
        Height:"0.50",
        department:"CSC",
        level:400,
        grade: [30,40,80,90,100]
    },
    {
        name:"Susan Owoicho",
        age: 25,
        address:"Salama Hostel",
        tribe:"Idoma",
        gender:"female",
        Height:0.65,
        department:"CSC",
        level:300,
        grade: [30,40,60,90,100]
    },
    {
        name:"Yada Martins",
        age: 23,
        address:"Village Hostel",
        tribe:"^Kagoro",
        gender:"male",
        Height:0.56,
        department:"CSC",
        level:300,
        grade: [30,40,60,80,100]
    },
    {
        name:"Ifeoma Ibedu",
        age: 23,
        address:"Angwa Rukuba",
        tribe:"Igbo",
        gender:"female",
        Height:0.56,
        department:"CSC",
        level:300,
        grade: [30,40,50,90,100]
    },
    {
        name:"Peter Temitope Asalu",
        age: 22,
        address:"Celebridge",
        tribe:"Yagba",
        gender:"male",
        Height:0.50,
        department:"CSC",
        level:300,
        grade: [30,40,60,70,100]
    },
    {
        name:"Awari Yohanna Duada",
        age: 22,
        address:"Angwa Rukuba",
        tribe:"Afizare",
        gender:"male",
        Height:0.50,
        department:"CSC",
        level:300,
        grade: [30,40,60,80,90]
    },
    {
        name:"Josephine Sunday",
        age: 20,
        address:"Odus",
        tribe:"Eggon",
        gender:"female",
        Height:0.50,
        department:"CSC",
        level:300,
        grade: [30,50,50,90,100]
    },
    {
        name:"Nanbal Moses Kundam",
        age: 23,
        address:"Federal locust",
        tribe:"Mupun",
        gender:"male",
        Height:0.50,
        department:"CSC",
        level:300,
        grade: [30,40,60,100,100]
    },
    {
        name:"Victoria Bok",
        age: 22,
        address:"Oduns",
        tribe:"Berom",
        gender:"female",
        Height:0.50,
        department:"CSC",
        level:300,
        grade: [30,40,80,90,100]
    },
    {
        name:"Yusuf Paul Osanga",
        age: 25,
        address:"Rayfield",
        tribe:"Berom",
        gender:"male",
        Height:0.70,
        department:"CSC",
        level:400,
        grade: [30,70,80,90,100]
    },
    {
        name:"Bamigboye Christiana Temitope",
        age: 25,
        address:"Village Hostel",
        tribe:"Yoruba",
        gender:"female",
        Height:0.63,
        department:"CSC",
        level:300,
        grade: [30,60,80,90,100]
    },
    {
        name:"Job Gift Elejo",
        age: 22,
        address:"Village Hostel",
        tribe:"Igala",
        gender:"female",
        Height:0.50,
        department:"CSC",
        level:300,
        grade: [30,40,50,90,100]
    },
    {
        name:"Moses Deborah Kibba",
        age: 23,
        address:"Ring road",
        tribe:"Berom",
        gender:"female",
        Height:0.55,
        department:"CSC",
        level:300,
        grade: [30,40,80,80,100]
    },
    {
        name:"Joy Ohue Osedebamen",
        age: 24,
        address:"Oduns",
        tribe:"Idoma",
        gender:"female",
        Height:0.52,
        department:"CSC",
        level:300,
        grade: [30,40,60,90,100]
    },
    {
        name:"Ponfa Micheal",
        age: 22,
        address:"Oduns",
        tribe:"Berom",
        gender:"male",
        Height:0.54,
        department:"CSC",
        level:300,
        grade: [30,40,80,90,100]
    },
    {
        name:"Mabas Maryam",
        age: 20,
        address:"PTS, Jos",
        tribe:"Challa",
        gender:"female",
        Height:0.65,
        department:"CSC",
        level:400,
        grade: [30,40,80,90,100]
    },
    {
        name:"Uzaifat Ibrahim",
        age: 24,
        address:"Dodo street Jos",
        tribe:"Magwavul",
        gender:"female",
        Height:0.52,
        department:"CSC",
        level:300,
        grade: [30,40,80,90,100]
    }
    {
        name:"Stephen Nanrest",
        age: 23,
        address:"Ring Road",
        tribe:"Magwavul",
        gender:"female",
        
        Height:0.52,
        department:"CSC",
        level:300,
        grade: [30,40,80,90,100]
    }
];

a = 0;
var mates = Student.filter(function(value) {
    if (a < values.Height) {
        a = values.Height;
    }
});

//get te full details of the person with max height
var result = Student.filter(function(data) {
    if (data.Height == a) {
        return data;
    }
});

console.log(result)
function avg(arr) {
    var num = 0;
    for (var index = 0; index < arr.length; index++) {
        num = num + arr[index];
    }
    return num / arr.length;
}

var b = 0;
var v;
Student.forEach(function(item, index, data){
    if (b < avg (item.grade)) {
        b = avg(item.grade);
        v = index;
        // console.log(data[index]);
    }
});
console.log(Student[v]);

