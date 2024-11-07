let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
let calculator = document.getElementById('calculator');
let unitConverter = document.getElementById('unitConverter');
let conversionArea = document.getElementById('conversionArea');
let unitFromSelect = document.getElementById('unitFrom');
let unitToSelect = document.getElementById('unitTo');
let scientificCalculator = document.getElementById('scientificCalculator');
let operationButtons = document.querySelectorAll('.operation');
let inputArea = document.getElementById('inputArea');
let operationInput = document.getElementById('operationInput');
let calculateResultButton = document.getElementById('calculateResultButton');
let resultArea = document.getElementById('resultArea');
let currentOperation = '';

document.addEventListener("DOMContentLoaded", () => {
    const calculateResultButton = document.getElementById('calculateResultButton');
    const operationInput = document.getElementById('operationInput');
    const resultArea = document.getElementById('resultArea');

    // Handle operation selection
    const operationButtons = document.querySelectorAll('.operation');
    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const operation = button.getAttribute('data-operation');

            // Show input field when an operation is selected
            document.getElementById('inputArea').style.display = 'block';
            resultArea.innerHTML = ''; // Clear previous results
            operationInput.value = ''; // Clear input field

            calculateResultButton.onclick = () => {
                let value = parseFloat(operationInput.value);
                if (isNaN(value)) {
                    resultArea.innerHTML = "Please enter a valid number.";
                    return;
                }

                let result;
                switch (operation) {
                    case 'sin':
                        // Convert degrees to radians before calculating sine
                        result = Math.sin(value * Math.PI / 180);
                        break;
                    case 'cos':
                        // Convert degrees to radians before calculating cosine
                        result = Math.cos(value * Math.PI / 180);
                        break;
                    case 'tan':
                        // Convert degrees to radians before calculating tangent
                        result = Math.tan(value * Math.PI / 180);
                        break;
                    case 'log':
                        result = Math.log10(value); // Natural log (base e)
                        break;
                    case 'sqrt':
                        result = Math.sqrt(value);
                        break;
                    case 'x2':
                        result = Math.pow(value, 2);
                        break;
                    case 'e':
                        result = Math.E;
                        break;
                    default:
                        resultArea.innerHTML = "Unknown operation.";
                        return;
                }

                resultArea.innerHTML = `Result: ${result}`;
            };
        });
    });
});


arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == 'Unit Conversion') {
            calculator.style.display = 'none';
            unitConverter.classList.add('show');
        }
        else if (e.target.innerHTML == '🌙') {
            string = "";
        }
        else if (e.target.innerHTML == 'Back to Calculator') {
            calculator.style.display = 'none';
            unitConverter.classList.add('show');
        }
        else if (e.target.innerHTML == 'Back to Categories') {
            calculator.style.display = 'none';
            unitConverter.classList.add('show');
        }
        else if (e.target.innerHTML == 'Length') {
            calculator.style.display = 'none';
            unitConverter.classList.add('show');
        }
        else if (e.target.innerHTML == 'Area') {
            calculator.style.display = 'none';
            unitConverter.classList.add('show');
        }
        else if (e.target.innerHTML == 'Volume') {
            calculator.style.display = 'none';
            unitConverter.classList.add('show');
        }
        else if (e.target.innerHTML == 'Weight') {
            calculator.style.display = 'none';
            unitConverter.classList.add('show');
        }
        else if (e.target.innerHTML == 'Temperature') {
            calculator.style.display = 'none';
            unitConverter.classList.add('show');
        }
        else if (e.target.innerHTML == 'Speed') {
            calculator.style.display = 'none';
            unitConverter.classList.add('show');
        }
        else if (e.target.innerHTML == 'Pressure') {
            calculator.style.display = 'none';
            unitConverter.classList.add('show');
        }
        else if (e.target.innerHTML == 'Power') {
            calculator.style.display = 'none';
            unitConverter.classList.add('show');
        }
        else if (e.target.innerHTML == 'Scientific Mode') {
            calculator.style.display = 'none';
        }
        else if (e.target.innerHTML == 'sin') {
            string = "";
        }
        else if (e.target.innerHTML == 'cos') {
            string = "";
        }
        else if (e.target.innerHTML == 'tan') {
            string = "";
        }
        else if (e.target.innerHTML == 'log') {
            string = "";
        }
        else if (e.target.innerHTML == 'sqrt') {
            string = "";
        }
        else if (e.target.innerHTML == 'x2') {
            string = "";
        }
        else if (e.target.innerHTML == 'e') {
            string = "";
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

document.getElementById('backToCalculatorButton').addEventListener('click', () => {
    calculator.style.display = 'block';
    unitConverter.classList.remove('show');
    conversionArea.style.display = 'none';
    resetUnitSelect();
});


document.getElementById('backToConverterButton').addEventListener('click', () => {
    conversionArea.style.display = 'none';
});

document.querySelectorAll('.category').forEach(button => {
    button.addEventListener('click', (e) => {
        conversionArea.style.display = 'flex';
        let category = e.target.dataset.category;
        setupUnitOptions(category);
    });
});

document.getElementById('convertButton').addEventListener('click', () => {
    let value = parseFloat(document.getElementById('valueInput').value);
    let unitFrom = unitFromSelect.value;
    let unitTo = unitToSelect.value;
    let conversionResult = document.getElementById('conversionResult');

    let result = convertUnits(value, unitFrom, unitTo);
    conversionResult.innerText = `Result: ${result.toFixed(2)} ${unitTo}`;
});

document.getElementById('scientificButton').addEventListener('click', () => {
    // Hide the main calculator
    document.getElementById('calculator').style.display = 'none';
    // Show the scientific calculator
    document.getElementById('scientificCalculator').classList.add('show');
});

document.getElementById('backToCalculatorButtonScientific').addEventListener('click', () => {
    calculator.style.display = 'block';
    unitConverter.classList.remove('show');
    conversionArea.style.display = 'none';
    resetUnitSelect();
    document.getElementById('scientificCalculator').classList.remove('show');
});

// Get the audio element
const clickSound = document.getElementById("click-sound");

// Select all buttons in your calculator
const audio = document.querySelectorAll(".operator"); // Adjust the selector to match your button class or tag

// Function to play sound
function playClickSound() {
    clickSound.currentTime = 0; // Reset the sound to start from the beginning
    clickSound.play();
}

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener("click", playClickSound);
});





// Function to set up unit options based on the selected category
function setupUnitOptions(category) {
    unitFromSelect.innerHTML = "";
    unitToSelect.innerHTML = "";

    const unitOptions = {
        length: ["meter", "kilometer", "mile"],
        area: ["square meter", "hectare", "acre"],
        volume: ["liter", "milliliter", "cubic meter"],
        weight: ["gram", "kilogram", "pound"],
        temperature: ["Celsius", "Fahrenheit", "Kelvin"],
        speed: ["m/s", "km/h", "mph"],
        pressure: ["Pa", "bar", "psi"],
        power: ["Watt", "Kilowatt", "Horsepower"],
    };

    let units = unitOptions[category];
    units.forEach(unit => {
        let option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        unitFromSelect.appendChild(option1);

        let option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;
        unitToSelect.appendChild(option2);
    });
}

function convertUnits(value, unitFrom, unitTo) {
    if (unitFrom === unitTo) return value; // No conversion needed

    // Temperature conversion
    if (unitFrom === "Celsius" && unitTo === "Kelvin") return value + 273.15;
    if (unitFrom === "Kelvin" && unitTo === "Celsius") return value - 273.15;
    if (unitFrom === "Celsius" && unitTo === "Fahrenheit") return (value * 9 / 5) + 32;
    if (unitFrom === "Fahrenheit" && unitTo === "Celsius") return (value - 32) * 5 / 9;
    if (unitFrom === "Kelvin" && unitTo === "Fahrenheit") return (value - 273.15) * 9 / 5 + 32;
    if (unitFrom === "Fahrenheit" && unitTo === "Kelvin") return (value - 32) * 5 / 9 + 273.15;

    // Length conversion
    if (unitFrom === "meter" && unitTo === "kilometer") return value / 1000;
    if (unitFrom === "kilometer" && unitTo === "meter") return value * 1000;
    if (unitFrom === "meter" && unitTo === "mile") return value / 1609;
    if (unitFrom === "mile" && unitTo === "meter") return value * 1609;
    if (unitFrom === "mile" && unitTo === "kilometer") return value * 1.609;
    if (unitFrom === "kilometer" && unitTo === "mile") return value / 1.609;

    // Weight conversion
    if (unitFrom === "gram" && unitTo === "kilogram") return value / 1000;
    if (unitFrom === "kilogram" && unitTo === "gram") return value * 1000;
    if (unitFrom === "gram" && unitTo === "pound") return value / 453.6;
    if (unitFrom === "pound" && unitTo === "gram") return value * 453.6;
    if (unitFrom === "pound" && unitTo === "kilogram") return value / 2.205;
    if (unitFrom === "kilogram" && unitTo === "pound") return value * 2.205;

    // Area conversion
    if (unitFrom === "square meter" && unitTo === "hectare") return value / 10000;
    if (unitFrom === "hectare" && unitTo === "square meter") return value * 10000;
    if (unitFrom === "square meter" && unitTo === "acre") return value / 4047;
    if (unitFrom === "acre" && unitTo === "square meter") return value * 4047;
    if (unitFrom === "hectare" && unitTo === "acre") return value * 2.471;
    if (unitFrom === "acre" && unitTo === "hectare") return value / 2.471;

    // Volume conversion
    if (unitFrom === "liter" && unitTo === "milliliter") return value * 1000; // Big to small
    if (unitFrom === "milliliter" && unitTo === "liter") return value / 1000; // Small to big
    if (unitFrom === "liter" && unitTo === "cubic meter") return value / 1000;
    if (unitFrom === "cubic meter" && unitTo === "liter") return value * 1000;
    if (unitFrom === "milliliter" && unitTo === "cubic meter") return value / 1000000;
    if (unitFrom === "cubic meter" && unitTo === "milliliter") return value * 1000000;

    // Speed conversion
    if (unitFrom === "m/s" && unitTo === "km/h") return value * 3.6;
    if (unitFrom === "km/h" && unitTo === "m/s") return value / 3.6;
    if (unitFrom === "m/s" && unitTo === "mph") return value * 2.237;
    if (unitFrom === "mph" && unitTo === "m/s") return value / 2.237;
    if (unitFrom === "km/h" && unitTo === "mph") return value / 1.609;
    if (unitFrom === "mph" && unitTo === "km/h") return value * 1.609;

    // Pressure conversion
    if (unitFrom === "Pa" && unitTo === "bar") return value / 100000;
    if (unitFrom === "bar" && unitTo === "Pa") return value * 100000;
    if (unitFrom === "Pa" && unitTo === "psi") return value / 6895;
    if (unitFrom === "psi" && unitTo === "Pa") return value * 6895;
    if (unitFrom === "bar" && unitTo === "psi") return value * 14.504;
    if (unitFrom === "psi" && unitTo === "bar") return value / 14.504;

    // Power conversion
    if (unitFrom === "Watt" && unitTo === "Kilowatt") return value / 1000;
    if (unitFrom === "Kilowatt" && unitTo === "Watt") return value * 1000;
    if (unitFrom === "Watt" && unitTo === "Horsepower") return value / 745.7;
    if (unitFrom === "Horsepower" && unitTo === "Watt") return value * 745.7;
    if (unitFrom === "Kilowatt" && unitTo === "Horsepower") return value * 1.341;
    if (unitFrom === "Horsepower" && unitTo === "Kilowatt") return value / 1.341;

    // Default return if no conversion applies
    return value;
}






// Function to reset unit selects
function resetUnitSelect() {
    unitFromSelect.innerHTML = "";
    unitToSelect.innerHTML = "";
}

function speakMessage(message) {
    // Check if the browser supports speech synthesis
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(speech);
    } else {
        console.log("Speech synthesis not supported in this browser.");
    }
}

function switchToUnitConversionMode() {
    calculator.style.display = 'none';
    unitConverter.classList.add('show');
    speakMessage("Welcome to Unit Conversion Mode");
}

function switchToScientificMode() {
    document.getElementById('scientificCalculator').classList.add('show');
    speakMessage("Welcome to Scientific Mode");
}



// Theme toggle functionality
let currentTheme = 'dark'; // Default theme

document.getElementById('themeToggleButton').addEventListener('click', () => {
    if (currentTheme === 'dark') {
        document.body.style.background = '#ffffff'; // Light background
        document.body.style.color = '#000000'; // Dark text
        currentTheme = 'light';

        // Set input text color to black in light mode
        input.style.color = '#000000';
        valueInput.style.color = '#000000';
        operationInput.style.color = '#000000'


        // Change button styles if needed
        document.querySelectorAll('button').forEach(btn => {
            btn.style.background = 'rgba(0, 0, 0, 0.1)'; // Light button background
            btn.style.color = '#000000'; // Dark button text
        });
    } else {
        document.body.style.background = 'linear-gradient(45deg, #0a0a0a, #3a4452)'; // Dark background
        document.body.style.color = '#ffffff'; // Light text
        currentTheme = 'dark';

        // Set input text color to white in dark mode
        input.style.color = '#ffffff';
        valueInput.style.color = '#ffffff';
        operationInput.style.color = '#ffffff'

        // Change button styles if needed
        document.querySelectorAll('button').forEach(btn => {
            btn.style.background = 'rgba(255, 255, 255, 0.2)'; // Dark button background
            btn.style.color = '#ffffff'; // Light button text
        });
    }
});

