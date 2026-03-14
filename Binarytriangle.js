function printBinaryTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let rowOutput = "";
        
        for (let j = 1; j <= i; j++) {
            // Logic: If (row + column) is even, print 1, else print 0
            // Note: We adjust based on the starting number of the pattern
            if ((i + j) % 2 === 0) {
                rowOutput += "1 ";
            } else {
                rowOutput += "0 ";
            }
        }
        
        // Print the completed row and trim trailing whitespace
        console.log(rowOutput.trim());
    }
}

// Execute for 6 rows as specified
printBinaryTriangle(6);