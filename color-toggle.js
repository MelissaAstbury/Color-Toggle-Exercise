const btnClicked = () => {
    // let bodyElement = document.body;
    let bodyElement = document.querySelector("body");
    // bodyElement.style.background = 'red';


    if (bodyElement.style.background == 'purple') {
        bodyElement.style.background = "white";
    } else {
        bodyElement.style.background = "purple";
    }

};

