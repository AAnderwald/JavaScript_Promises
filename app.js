console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
/*function watchTurorialCallback(callback, errorCallback) {
    let userLeft = false;
    let userWatchingLiveStream = true;
  
    if (userLeft) {
      errorCallback({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingLiveStream) {
      callback("Thumbs up and Subscribe");
    }
  }
  
  watchTurorialCallback(
    (message) => {
      console.log(message);
    },
    (error) => {
      console.log(error.name + " " + error.message);
    }
  );

  */

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
            createAlert (false, error.message); 
        });

