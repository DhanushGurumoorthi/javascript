// looping
// for loop
s=0
for (i=0;i<10;i++)
{
    s+=i
}
console.log(s)

//while
j=0
while(j<10)
{
    s+=j
    j++
}
console.log(s)

//do while
y=0
do{
    s+=y
    y++
}
while(y<10);
console.log(s)

//array
arr=[10,653,65]
console.log(arr.length)

//eg1
arr=[10,2,21.34]
console.log(arr.length)
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]) 
}

//eg2
arr=[10,2,true,false]
console.log(arr.length)
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]) 
}

//eg3
arr=[10,2,"akesh","false",true]
console.log(arr.length)
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]) 
}

//for in loop
arr=[10,2,"akesh","false",true]
for(const index in arr)
{
    console.log(index)
}

//for of loop
arr=[10,2,"akesh","false",true]
for(const elements of arr)
{
    console.log(elements)
}



