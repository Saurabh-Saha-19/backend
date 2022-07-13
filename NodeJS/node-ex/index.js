var rec = require("./rectangle");

function solveRec(l, b) {
  if (l <= 0 || b <= 0) {
    console.log("not possible");
  } else {
    console.log(rec.area(l, b));
    console.log(rec.perimeter(l, b));
  }
}

solveRec(2, 4);
solveRec(3, 5);
solveRec(0, 5);
solveRec(-3, 5);
