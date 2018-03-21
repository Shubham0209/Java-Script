/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x<=20) {
    if(x%3===0)
    {
        if(x%5===0)
        {
            console.log("JuliaJames");
        }
        
    else{
    console.log("Julia");
    }
    
    }// check divisibility
    else if(x%5===0)
    {
       console.log("James"); 
    }
    else
    {
      console.log(x); 
    }// print Julia, James, or JuliaJames
   x=x+1; // increment x
}
