
// let commitData = '';
fetch('https://api.github.com/users/astevens09/events/public')
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => {
            commitData = data.filter(action => action.type !== 'PushEvent');
            console.log(commitData);
        })
		.catch( error => console.error(error));



//These functions are to run wait function and provide time completion
measureASyncFunc(wait(1000));
measureASyncFunc(wait(8000));
measureASyncFunc(wait(4000));

//Wait time function 
function wait(timeout){
    return new Promise((resolve,reject)=>{
        if(timeout > 0){
            setTimeout(() => {
                resolve(timeout);
            }, timeout);
        }else{
            reject('Time input must be greater than zero')
        }
        
    })
}

//This function is to measure promise time
function measureASyncFunc(fn){
    const start = Date.now();
    return fn
    .then((time)=> {
        console.log("Promise complete time: ",Math.floor((Date.now()-start)/1000));
        console.log(`You will see this after ${time/1000} seconds`)
    })
    .catch((err)=> console.error(err));
}