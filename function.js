//function
function fun(a,b)
{
    console.log("po da dei")
}
fun()

//even or odd
function fun(a,b)
{
    for (i=a;i<b;i++)
    {
        if(i%2 == 0){
            console.log(i+"even")
        }
        else{
            console.log(i+"odd")
        }
    }
}
fun(4,12)
//return
function sum(a,b)
{
    c=a+b
    return c
}
console.log(sum(12,25))