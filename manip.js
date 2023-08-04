# matrix
var inputString = "9 8 7\n5 3 2\n6 6 7"
var removedString = inputString.split(' ').join('')
var splitString = removedString.split(/\r?\n/)
var stringToArray = []
var stringRow = []
var rowsToColumns = []
var columnsRow = []
var maxRows = []
var maxColumns = []

for (var i = 0; i < splitString.length; i++) {
  for (var j = 0; j < splitString[i].length; j++) {
    stringRow.push(splitString[i][j]);
  }
  stringToArray.push(stringRow);
  stringRow = []
}
var i = 0
for (var j = 0; j < stringToArray[i].length; j++) {
  for (i = 0; i < stringToArray.length; i++) {
    columnsRow.push(stringToArray[i][j]);
  }
  rowsToColumns.push(columnsRow);
  i = rowsToColumns.length - 1
  columnsRow = []
}

for (var i = 0; i < stringToArray.length; i++) {
  maxRows.push(Math.max(...stringToArray[i]));
}
for (var i = 0; i < rowsToColumns.length; i++) {
  maxColumns.push(Math.max(...rowsToColumns[i]));
}


console.log(stringToArray);
console.log(rowsToColumns);
console.log(maxRows);
console.log(maxColumns);
