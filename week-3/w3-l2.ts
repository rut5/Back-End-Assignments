const myPromise = new Promise ((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Operation was successful");
    } else {
        reject("Operation failed");
    }
});

myPromise
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log("Error: " + error);
});

const fetchAdviceByID = () => {

}

fetchAdviceByID(10);