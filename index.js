let dodger = document.getElementbyId ('dodger');

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt (leftNumbers,10);

    if (left > 0) {
        dodger.style.left = `S{left-1}px`;
    };
};

