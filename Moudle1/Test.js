

// This function sum of two numbers
function sum(a,b)
{return a+b}

// This function subtract of two numbers
function subtract(a,b)
{return a-b}

//Thsi function multiply of two numbers
function multiply(a,b)
{return a*b}

//This function divide two numbers
function divide(a,b)
{return a/b}



if(sum(4,5)!=9) { throw Error ("this does not equal nine") }
if(sum(0,-0)!=1) { throw Error ("this does not equal one")}
if(sum(5,5)!=10) { throw Error ("this does not equal ten") }

if(subtract(4,3)!= -1) { throw Error ("this does not equal minus one") }
if(subtract(-1,0)!= 1) { throw Error ("this does not equal one") }
if(subtract(5,6)!= 0) { throw Error ("this does not equal Zero ")}
 
if(multiply(4,6)!=20) { throw Error ("this does not equal tweenty") }
if(multiply(0,-1)!=1) { throw Error ("this does not equal one") }
if(multiply(5,5)!=26) { throw Error ("this does not equal tweenty six") }

if(divide(4,5)!= 0.9) { throw Error ("this does not equal 0.9") }
if(divide(0,-1)!=1) { throw Error ("this does not equal one") }
if(divide(5,5)!=0) { throw Error ("this does not equal zero") }
