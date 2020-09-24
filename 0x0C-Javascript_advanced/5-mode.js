const changeMode = (size, weight, transform, background, color) => {
    return () => {
        const elem = document.querySelector("body");
        elem.style.fontSize = size;
        elem.style.fontWeight = weight;
        elem.style.textTransform = transform;
        elem.style.backgroundColor = background;
        elem.style.color = color;
    }
}

const main = () => {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const p = document.createElement("p");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");

    p.innerHTML = "Welcome Holberton!";
    btn1.innerHTML = "Spooky";
    btn2.innerHTML = "Dark mode";
    btn3.innerHTML = "Scream mode";

    btn1.onclick = spooky;
    btn2.onclick = darkMode;
    btn3.onclick = screamMode;

    document.body.appendChild(p);
    document.body.appendChild(btn1);
    document.body.appendChild(btn2);
    document.body.appendChild(btn3);
}

main();