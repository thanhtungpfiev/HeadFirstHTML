function dogsage(age) {
    return age * 7;
}
var myDogsage = dogsage(4);
function rectanglearea(width, height) {
    var area = width * height;
    return area;
}
var rectarea = rectanglearea(3, 4);

function addUp(numarray) {
    var total = 0;
    for (var i = 0; i < numarray.length; i++) {
        total += numarray[i];
    }
    return total;
}

var theTotal = addUp([1, 5, 3, 9]);
function getavatar(points) {
    var avatar;
    if (points < 100) {
        avatar = "Mouse";
    } else if (points > 100 && points < 1000) {
        avatar = "Cat";
    } else {
        avatar = "ape";
    }
    return avatar;
}
var myavatar = getavatar(335);

console.log(myDogsage);
console.log(rectarea);
console.log(theTotal);
console.log(myavatar);
