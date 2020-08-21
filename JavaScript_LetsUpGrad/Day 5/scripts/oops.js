class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.courses=[];
    }

    login(){
        console.log(`${this.name} has logged in!!`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out!!`);
        return this;
    }
    getDetails(){
        console.log(`Name:${this.name},Age:${this.age},Email:${this.email}`);
        return this;
    }
    
}
console.log('Working with User class!!!');
let user1=new User("Tulasi",20,'tulasi@gmail.com');
let user2=new User("Prudhvi",19,'prudhvi@gmail.com');
user1.login().getDetails().logout();
user2.login().getDetails().logout();

console.log("Working with Moderator Class!!!");

class Moderator extends User{
    constructor(name,age,email,coins)
    {
        super(name,age,email);
        this.coins=coins;
    }
    addCoins(){
        this.coins++;
        console.log(`After adding a coin ${this.name} has ${this.coins} coins`);
        return this;
    }
    removeCoins(){
        this.coins--;
        console.log(`After removing a coin ${this.name} has ${this.coins} coins`);
        return this;
    }
}

let mod1=new Moderator('Tulasi',20,'tulasi@gmail.com',5);
let mod2=new Moderator('Prudhvi',19,'prudhvi@gmail.com',8);
mod1.login().addCoins().addCoins().addCoins().removeCoins().logout();
mod2.login().addCoins().addCoins().removeCoins().removeCoins().logout();

console.log("Working with Admin Class!!!");

class Admin extends Moderator{
      addCourse(user,course){
          user.courses.push(course);
          console.log(user);
      }
      removeCourse(user,course){
       user.courses = user.courses.filter(c=>{
            return c!=course;
        })
    }
}

let adm1 =new Admin('Pujitha',18,'p@gmail.com',2);
let adm2 =new Admin('Mounica',16,'m@gmail.com',5);



console.log('Adding Courses!!');
adm1.addCourse(user1,'JavaScript');
adm1.addCourse(mod1,'Python');
adm1.addCourse(user2,'CSS');
adm1.addCourse(mod2,'html');
adm1.addCourse(user1,'Java');
adm1.addCourse(user2,'C');

console.log('Removing courses!!');
adm1.removeCourse(user1,'JavaScript');
adm1.removeCourse(user2,'C');

console.log('Details of all 4 users!!');
let users=[user1,user2,mod1,mod2,adm1,adm2];
users.forEach(element=>{
    console.log(element);
})





