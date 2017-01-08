function Human(name, age, sex, height, weight){
    this.name= name;
    this.age= age;
    this.sex= sex;
    this.height= height;
    this.weight= weight; 
};

function  Worker () {
    this.work='IT';
    this.salary=1000000;
    this.work=function(){
        console.log('I like to work');
    };
};

function Student () {
    this.school='university';
    this.scholarship=1000;
    this.watchTVseries= function(){
        console.log('I like to watch TV series');
    };
};

Worker.prototype = new Human('Peter', 30, 'male', 196, 90);
Student.prototype = new Human('Anna', 20, 'female', 170, 60);

var newWorker = new Worker();
console.log('Name:', newWorker.name);
console.log('Age:', newWorker.age + " years old");
console.log('Sex:', newWorker.sex);
console.log('Height:', newWorker.height + "sm");
console.log('Weight:', newWorker.weight + "kg");
newWorker.work();

var newStudent = new Student();
console.log('Name:', newStudent.name );
console.log('Age:', newStudent.age + " years old");
console.log('Sex:', newStudent.sex);
console.log('Height:', newStudent.height + "sm");
console.log('Weight:', newStudent.weight + "kg");
newStudent.watchTVseries();