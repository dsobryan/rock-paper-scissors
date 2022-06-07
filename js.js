/* Javascript */

function computerPlay() {
        computerChoice = Math.floor(Math.random() * 3)
        if (computerChoice === 0) {
            console.log("Computer chose rock!")
        } else if (computerChoice === 1) {
            console.log("Computer chose Paper!")
        } else {
            console.log("Computer chose Scissors!")
        }
        return computerChoice
}
computerChoice = computerPlay();
