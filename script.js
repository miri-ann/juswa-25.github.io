// Newton's Law of Cooling/Heating Calculation
document.getElementById('coolingHeatingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const T0 = parseFloat(document.getElementById('initialTemp').value); // Initial Temperature
    const Ts = parseFloat(document.getElementById('roomTemp').value); // Room Temperature
    const finalTempInput = document.getElementById('finalTemp').value; // Final Temperature (optional)
    const t = parseFloat(document.getElementById('time').value); // Time
    const kInput = document.getElementById('coolingRate').value; // Cooling/Heating Rate (optional)

    // Validate required inputs
    if (isNaN(T0) || isNaN(Ts) || isNaN(t)) {
        alert("Please fill in all required fields: Initial Temperature, Room Temperature, and Time.");
        return;
    }

    let k, finalTemp;

    // Check if k is provided
    if (kInput === "") {
        // Calculate k if final temperature is provided
        if (finalTempInput === "") {
            alert("Please provide either k or Final Temperature (T) to calculate.");
            return;
        }
        finalTemp = parseFloat(finalTempInput);
        if (isNaN(finalTemp)) {
            alert("Invalid Final Temperature value.");
            return;
        }
        k = -Math.log(Math.abs((finalTemp - Ts) / (T0 - Ts))) / t;
        document.getElementById('CoolingHeatingResult').textContent = `Calculated Cooling/Heating Rate (k): ${k.toFixed(4)}`;
    } else {
        // Parse k from input
        k = parseFloat(kInput);
        if (isNaN(k)) {
            alert("Invalid Cooling/Heating Rate value.");
            return;
        }

        // Calculate final temperature if not provided
        if (finalTempInput === "") {
            finalTemp = Ts + (T0 - Ts) * Math.exp(k * t);
            document.getElementById('CoolingHeatingResult').textContent = `Calculated Final Temperature (T): ${finalTemp.toFixed(2)}°C`;
        } else {
            finalTemp = parseFloat(finalTempInput);
            if (isNaN(finalTemp)) {
                alert("Invalid Final Temperature value.");
                return;
            }
            document.getElementById('CoolingHeatingResult').textContent = `Final Temperature (T): ${finalTemp}°C (k: ${k})`;
        }
    }
});

// Growth and Decay Calculation
document.getElementById('growthDecayForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const P0 = parseFloat(document.getElementById('initialValue').value); // Initial Value
    const kInput = document.getElementById('rate').value; // Growth/Decay Rate (optional)
    const finalValueInput = document.getElementById('finalValue').value; // Final Value (optional)
    const t = parseFloat(document.getElementById('timeGrowth').value); // Time

    // Validate required inputs
    if (isNaN(P0) || isNaN(t)) {
        alert("Please fill in all required fields: Initial Value and Time.");
        return;
    }

    let k, finalValue;

    // Check if k is provided
    if (kInput === "") {
        // Calculate k if final value is provided
        if (finalValueInput === "") {
            alert("Please provide either k or Final Value (P) to calculate.");
            return;
        }
        finalValue = parseFloat(finalValueInput);
        if (isNaN(finalValue)) {
            alert("Invalid Final Value.");
            return;
        }
        k = Math.log(Math.abs(finalValue / P0)) / t;
        document.getElementById('GrowthDecayResult').textContent = `Calculated Growth/Decay Rate (k): ${k.toFixed(4)}`;
    } else {
        // Parse k from input
        k = parseFloat(kInput);
        if (isNaN(k)) {
            alert("Invalid Growth/Decay Rate value.");
            return;
        }

        // Calculate final value if not provided
        if (finalValueInput === "") {
            finalValue = P0 * Math.exp(k * t);
            document.getElementById('GrowthDecayResult').textContent = `Calculated Final Value (P): ${finalValue.toFixed(2)}`;
        } else {
            finalValue = parseFloat(finalValueInput);
            if (isNaN(finalValue)) {
                alert("Invalid Final Value.");
                return;
            }
            document.getElementById('GrowthDecayResult').textContent = `Final Value (P): ${finalValue} (k: ${k})`;
        }
    }
});