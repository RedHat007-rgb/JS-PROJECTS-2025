const DataStructures = "Data Structures.json";
const GeneralKnowledge = "General_Knowledge.json"; // Corrected variable name
const OperatingSystems = "Operating_Systems.json";
async function Category(filename) {
    try {
        const response = await fetch(`Questions/${filename}`);
        console.log(response)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log(jsonData); // Debug
        quiz(jsonData);
    } catch (err) {
        console.error("Error loading file:", err);
    }
}

function randomQuestion(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}
function quiz(data) {
    const question = randomQuestion(data);

    // Update the question text
    document.getElementById("question").innerText = question.question;

    // Update the option labels
    document.getElementById("labelA").innerText = question.OptionA;
    document.getElementById("labelB").innerText = question.OptionB;
    document.getElementById("labelC").innerText = question.OptionC;
    document.getElementById("labelD").innerText = question.OptionD;
}


// Call the function with a valid category
Category("Data Structures.json");
