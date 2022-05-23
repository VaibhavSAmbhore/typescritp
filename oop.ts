//object oriented programing

class Arithmatic
{
  //characteristic
  NO1:number;
  NO2:number;
 
  constructor(a:number,b:number)
    {
      this.NO1=a;
      this.NO2=b;
    }
  


 
 Addition()  //Behaviour
{
  var Ans:number=0;  //LOcal Variable
  Ans=this.NO1 + this.NO2;
  return Ans;
}


Substraction() // Behaviour
{
  var Ans:number=0;  // local variable
  Ans=this.NO1 - this.NO2;
  return Ans;
}
}

 var obj1= new Arithmatic(10,11);
 var obj2= new Arithmatic(10,20);
 var Ret:number=0;

 Ret=obj1.Addition();
console.log("Addition is:"+Ret);


Ret= obj1.Substraction();
console.log("Subtraction is"+Ret);

