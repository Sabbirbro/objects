const name =['abul','abul','kasem','rifat','sifat'];
function remoteDuplicate(names)
{
    const faka = [];
    for(let i=0; i<name.length; i++){
        const name = names[i];
        console.log(name);
        if(faka.includes(name) === false){
            faka.push(name);
        }
    }
}

const uniqueNames = remoteDuplicate(names)
console.log(names)