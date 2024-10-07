/*Write a JavaScript program to find the area of a triangle where three sides are 6, 7, 8. 
(Use Heron's formula) */
//input 6,7,8
//sqrt(s(s-a)(s-b)(s-c))
let a, b, c, s;
a = 6;
b = 7;
c = 8;
function areaOfTriangle(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
//when button is clicked the result will be displayed
document.getElementById("calculateButton").addEventListener("click", function() {
    document.getElementById("result").innerHTML = areaOfTriangle(a, b, c);
});

