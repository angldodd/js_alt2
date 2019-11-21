var startNum = prompt("Enter a starting number.");
startNum = Number(startNum);
var endNum = prompt("Enter a ending number.");
endNum = Number(endNum);


if (startNum > endNum) {
    document.write('<p>Swapping numbers.</p>');
    var saveNum = startNum;
    startNum =endNum;
    endNum= saveNum;
    }
    
while (endNum >= startNum) {
    document.write(endNum);
    document.write('<br>');
    endNum = endNum - 1;    
}




