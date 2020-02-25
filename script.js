function calculation(){

    let limits = [0];
    let rates = [0];

    var z = 0;
    var result = 0;

    var income = Number(document.getElementById("income").value);

    limits.push(Number(document.getElementById("bracket_1_limit").value));
    limits.push(Number(document.getElementById("bracket_2_limit").value));
    limits.push(Number(document.getElementById("bracket_3_limit").value));
    limits.push(Number(document.getElementById("bracket_4_limit").value));
    limits.push(Number(document.getElementById("bracket_5_limit").value));
    limits.push(Number(document.getElementById("bracket_6_limit").value));

    rates.push(Number(document.getElementById("bracket_1_rate").value));
    rates.push(Number(document.getElementById("bracket_2_rate").value));
    rates.push(Number(document.getElementById("bracket_3_rate").value));
    rates.push(Number(document.getElementById("bracket_4_rate").value));
    rates.push(Number(document.getElementById("bracket_5_rate").value));
    rates.push(Number(document.getElementById("bracket_6_rate").value));
    rates.push(Number(document.getElementById("bracket_7_rate").value));

    if (income > limits[5]) {  //if income is greater than maximum tax bracket
    
        //calculations for initial brackets
        for (i = 1; i < 7; i++) {
            result = result + (limits[i] - limits[i - 1]) * (1 - rates[i])
        }
        
        //calculation for final bracket
        result = result + (income - limits[6]) * (1 - rates[7])

    }

    else if (income < limits[1]) { //if income is less than minimum tax bracket
        result = income * (1 - rates[1]);
    }

    else {  //if income is between minimum and maximum tax sbracket

        var ceiling = limits[1];
        
        //this loop calculates how many tax brackets to apply
        while (income > ceiling){
            z++;
            ceiling = limits[z];
            console.log(ceiling);
        }
        
        //calculations for initial brackets
        for (i = 1; i < z; i++){
            result = result + (limits[i] - limits[i - 1]) * (1 - rates[i])
            console.log("result " + "(loop " + i + "): " + result);
        }

        //calculation for final bracket
        result = result + (income - limits[z - 1]) * (1 - rates[z])

    }

    result = Math.round(result * 100) / 100 //rounds result to 2 decimal places
    document.getElementById("result").innerHTML = "Net income: $" + result;
} 