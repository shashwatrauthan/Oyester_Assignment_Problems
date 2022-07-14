var str = "12:01:00AM";

var h = str[0] + str[1];
var m = str[3] + str[4];
var s = str[6] + str[7];
var z = str[8] + str[9];



function printSum(h, m, s,z)
    {
        let total=0;
        h = Number(h*60*60) - 3600;
        m = Number(m*60) + (45*60) - 60;
        s = Number(s) + 45;
       
        // finding total seconds
        total = h+m+s;

        let time = "";

       
        // print the hours.
        time += (total / 3600).toFixed(0) + ":";
        total %= 3600;
       
        // print the minutes.
        time += (total / 60).toFixed(0) + ":";
        total %= 60;
       
        // print the seconds.
        time += total+z;
        return time
    }
str = printSum(h,m,s,z);

// Get hours
var h1 = Number(str[1] - '0');
var h2 = Number(str[0] - '0');
var hh = (h2 * 10 + h1 % 10);

new_time = "";

// If time is in "AM"
if (str[8] == 'A')
{
    if (hh == 12)
    {
        new_time+="00";
        for (var i = 2; i <= 7; i++)
            new_time+=str[i];
    }
    else
    {
        for (var i = 0; i <= 7; i++)
            new_time+=str[i];
    }
}

// If time is in "PM"
else
{
    if (hh == 12)
    {
        new_time+="12";
        for (var i = 2; i <= 7; i++)
            new_time+=str[i];
    }
    else
    {
        hh = hh + 12;
        new_time+=hh;
        for (var i = 2; i <= 7; i++)
            new_time+=str[i];;
    }

}

// Final Result
console.log(new_time);


