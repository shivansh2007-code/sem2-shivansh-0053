// node.jsx

function ChangeHeading() {
    const input = document.getElementById("nameInput").value;
    const heading = document.querySelector("h1");
    heading.textContent = input || "Welcome to JavaScript";
}

function ChangeBackground() {
    // Generate random hex color (#RRGGBB)
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
}

function IncreaseFontSize() {
    const heading = document.querySelector("h1");
    let size = parseInt(window.getComputedStyle(heading).fontSize);
    heading.style.fontSize = (size + 2) + "px";
}

function DecreaseFontSize() {
    const heading = document.querySelector("h1");
    let size = parseInt(window.getComputedStyle(heading).fontSize);
    heading.style.fontSize = (size - 2) + "px";
}

function ShowHideParagraph() {
    let para = document.querySelector("p");
    if (!para) {
        para = document.createElement("p");
        para.textContent = "This is a sample paragraph.";
        document.querySelector(".container").appendChild(para);
    } else {
        para.style.display = para.style.display === "none" ? "block" : "none";
    }
}

function Reset() {
    const heading = document.querySelector("h1");
    heading.textContent = "Welcome to JavaScript";
    heading.style.fontSize = "32px";
    document.body.style.backgroundColor = "white";

    const para = document.querySelector("p");
    if (para) para.remove();
    document.getElementById("nameInput").value = "";
}