


getUserCommits('javarredondo');
getUserCommits('astevens09');


//These functions are to run wait function and provide time completion
measureASyncFunc(wait(1000));
measureASyncFunc(wait(8000));
measureASyncFunc(wait(4000));


/********************************Functions*********************************/
function getUserCommits(user){
    let commitData =0;

    fetch('https://api.github.com/users/astevens09/events/public', {headers: {'Authorization': gitHubApiToken}})
        .then(response => response.json()) //Converting the response to a JSON object
        .then( data => {
            commitData = data.filter(action => action.type == 'CommitEvent');
            if(commitData.length){
                console.log(commitData);
            }else{
                console.log('No Commit events');
            }

        })
        .catch( error => console.error(error));
}

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



    // fetch('https://api.github.com/users/astevens09/events/public', {headers: {'Authorization': gitHubApiToken})
    //     .then(response => response.json()) //Converting the response to a JSON object
    //     .then( data => {
    //         commitData = data.filter(action => action.type == 'PushEvent');
    //         console.log(commitData);
    //     })
    //     .catch( error => console.error(error));



// fetch('https://api.github.com/users/astevens09/events/public')
//     .then(response => response.json()) //Converting the response to a JSON object
//     .then( data => {
//         commitData = data.filter(action => action.type == 'PushEvent');
//         console.log(commitData);
//     })
//     .catch( error => console.error(error));
