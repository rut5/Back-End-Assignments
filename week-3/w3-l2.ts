interface AdviceSlip {
  slip: {
    id: number;
    advice: string;
  };
}

const coinFlip = new Promise<string>((resolve, reject) => {
  let success = Math.random(); // generates a number between 0 and 1

  if (success > 0.5) {
    resolve("You win! Here is your advice: ");
  } else {
    reject("You lose! No advice for you today.");
  }
});

coinFlip
  .then((message) => {
    console.log(message); // if successful it logs the win message
    
    return fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
  })
  .then((response) => {
    return response.json(); // translates the data into JSON
  })
  .then((data: AdviceSlip) => {
    console.log(data.slip.advice); // logs the advice
  })
  .catch((error) => {
    console.log(error); // if unsuccessful it logs the error message
  });