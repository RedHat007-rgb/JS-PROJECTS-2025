const btn = document.getElementById("convert");

btn.addEventListener("click", () => {
    const input = parseFloat(document.getElementById("temperature").value);
    let Converted_Temparature = 0;
    let number = document.getElementById("number");
    let value = number.value;
    const toConvert = document.getElementById("ToConvert");
    const value2 = toConvert.value;

    if (value == "cel" && value2 == "far") {
        CtoF(input);
    } else if (value == "far" && value2 == "cel") {
        FtoC(input);
    } else if (value == "cel" && value2 == "kel") {
        CtoK(input);
    } else if (value == "kel" && value2 == "cel") {
        KtoC(input);
    } else if (value == "far" && value2 == "kel") {
        FtoK(input);
    } else if (value == "kel" && value2 == "far") {
        KtoF(input);
    }
});

function CtoF(input) {
    Converted_Temparature = (input * 9 / 5) + 32;
    return (document.getElementById("output").innerText = Converted_Temparature);
}

function FtoC(input) {
    Converted_Temparature = (input - 32) * 5 / 9;
    return (document.getElementById("output").innerText = Converted_Temparature);
}

function CtoK(input) {
    Converted_Temparature = parseFloat(input) + 273.15;
    return (document.getElementById("output").innerText = Converted_Temparature);
}

function KtoC(input) {
    Converted_Temparature = input - 273.15;
    return (document.getElementById("output").innerText = Converted_Temparature);
}

function FtoK(input) {
    Converted_Temparature = (input - 32) * 5 / 9 + 273.15;
    return (document.getElementById("output").innerText = Converted_Temparature);
}

function KtoF(input) {
    Converted_Temparature = (input - 273.15) * 1.8 + 32;
    return (document.getElementById("output").innerText = Converted_Temparature);
}
