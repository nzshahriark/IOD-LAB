

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



if(sum(4,6)!=9) { throw Error ("this does not equal nine") }
if(sum(0,-1)!=-1) { throw Error }
if(sum(5,5)!=10) { throw Error }

if(subtract(4,5)!= -1) { throw Error }
if(subtract(-1,0)!= -1) { throw Error }
if(subtract(5,5)!= 0) { throw Error }

if(multiply(4,5)!=20) { throw Error }
if(multiply(0,-1)!=0) { throw Error }
if(multiply(5,5)!=25) { throw Error }

if(divide(4,5)!= 0.8) { throw Error }
if(divide(0,-1)!=0) { throw Error }
if(divide(5,5)!=1) { throw Error }
