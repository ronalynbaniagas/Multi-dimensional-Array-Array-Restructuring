// Declare two arrays
let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let subArray2 = [24, 65, 21, 5, 9];

// Combine the arrays into a multi-dimensional array
let combinedArray = [];
for (let i = 0; i < subArray1.length; i++) {
    combinedArray.push([subArray1[i], subArray2[i]]);
}

// Log the restructured array [name, age] per line
console.log("Restructured Array:");
combinedArray.forEach(subArray => {
    console.log(`Name: ${subArray[0]}, Age: ${subArray[1]}`);
});
