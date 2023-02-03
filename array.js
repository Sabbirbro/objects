const country = 'bangladesh'
const age = 52;
const isIndependent = true;
const student ={id:121,class:11,name:'Agun'};
const friends =[13, 14, 15, 16, 17, 18, ];



function add(num1,num2){
    return num1 + num2;
}


console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);
console.log(typeof add);
/////--------------------------------

console.log(friends.includes(33));


//concat------------------------------
const NewFriends =[22, 23, 24, 26];
const Allfriends = NewFriends.concat(friends);
console.log(Allfriends)