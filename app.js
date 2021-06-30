console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


let watching = new Promise ((resolve, reject) => {
    let userWatchingLiveStream = true;

    if (userWatchingLiveStream){
        resolve ("Thumbs up and Subscribe!");
    }else{
        reject ("User left");
    }
});

watching
.then((message) => {
    console.log(message)
})
.catch((error) => {
    console.log(error)
});

//arrow functions are just receiving a functinong as below
/*
let watching = new Promise(callback);

function callback ((resolve, reject) {
    let userWatchingLiveStream = true;

    if (userWatchingLiveStream){
        resolve ("Thumbs up and Subscribe!");
    }else{
        reject ("User left");
    }
});
*/


  /* following in class
  let watching = new Promise((resolve, reject) => {
    let userLeft = false;
    let userWatchingLiveStream = true;
    
    if (userLeft) {
       reject({ 
           name: "User Left", 
           message: ":(", 
        });
    }   else if (userWatchingLiveStream) {
        resolve ("Thumbs up and Subscribe"); 
    }
});
    
    watching
        .then((value) => { 
            createAlert (true, value);
         })
        .catch((error) => { 
            createAlert (false, error.message); //error message here
        });
*/
