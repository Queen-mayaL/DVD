const ranColor=() =>{
    const r = Math.floor(Math.random() * 230);
    const g = Math.floor(Math.random() * 180);
    const b = Math.floor(Math.random() * 58);

    return `rgb(${r}, ${g}, ${b})`;
}

let x = 0, y = 0, dx = 5, dy = 5;

const moveButton = () => {
    x += dx;
    y += dy;

    if (x + b1.offsetWidth > window.innerWidth || x < 0){
        dx *= -1;
        b1.style.background = ranColor();
    }
    if (y + b1.offsetHeight > window.innerHeight || y < 0){
        dy *= -1;
        b1.style.background = ranColor();
    }

    b1.style.left = `${x}px`;
    b1.style.top = `${y}px`;
}

setInterval(moveButton, 20);