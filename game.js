function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    switch (true) {
        case random === 0:
            console.log(`rock`)
            break;
        
        case random === 1:
            console.log(`paper`)
            break;

        case random === 2:
            console.log(`scissors`)
            break;
    }
    
    // if (random === 0) {
    //     console.log(`rock`)
    // } else if (random === 1) {
    //     console.log(`paper`)
    // } else if (random === 2) {
    //     console.log(`scissors`)
    // } else {
    //     console.log(null)
    // }
}

getComputerChoice();