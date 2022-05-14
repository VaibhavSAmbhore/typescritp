function main():void 
{
  var no:number=12;
  var bret:boolean;
  bret = CheckEven(no);//CheckEven(12)
  if (bret==true)
  {
    console.log("it is even number");
  }
  else{
    console.log("it is odd number");

  }
}
function CheckEven(value:number):boolean
{
  if ((value%2)==0)///jar
  {
    return true;
  }
  else{  //nahi tar
    return false;
  }
}
main();