
var ans;
var equation;
var output = "";

for(var i = 1; i <= 9 ; i++)
{
    for(var j = 1; j <= i; j++)
    {

        ans = i * j;
        equation = i + "*" + j + "=" + ans;
        output += equation + " ";
    }

    console.log(output);
    output = "";
}
