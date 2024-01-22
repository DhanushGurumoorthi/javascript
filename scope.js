//local scope

for(i=0;i<9;i++)
{
console.log(i+1)
}
console.log(i)

//block scope

var a=10
console.log(a)
{
    let a=15  // let defines that a is in the block .if let not present it will change the value of a.
    let b=20
    console.log(b)
    console.log(a)

}
console.log(a)
