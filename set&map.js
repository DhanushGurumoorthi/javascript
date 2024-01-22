//set

set1=new Set("akeshvijay","aiadmk","nam thamilar")
console.log(set1)

set=new Set(["akeshvijay","aiadmk","nam thamilar"])//paranthesis is important to print all values in set

for(value in set)
{
    console.log(value)
}   //while using for in loop in set it does not print anything

for(value of set)
{
    console.log(value)
}  //while using for of loop in set it will print the set


//map

map=new Map([
     ["name","akesh"]  ,  //use double parenthesis for the map function
     ["id","010"]

])
console.log(map)

// //for in loop
// for(value in map)
// {
//     console.log(map)
// }

// //for of 
// for(elements of map)
// {
//     console.log(elements)
// }

console.log(map.has("name"))
map.set("support","nam thamilar")
console.log(map)
map.delete("name")
console.log(map)





