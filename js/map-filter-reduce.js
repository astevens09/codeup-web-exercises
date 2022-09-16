const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

/*********************Find users with 3 or more languages**************************/
let threeOrMoreLanguages = users.filter(user => user.languages.length >= 3);

/*********************Get all emails**************************/
let emails = users.map(user => user.email);
// console.log(emails)


/*********************Find average years of experience**************************/
let totalUsers =0;
let totalYears = users.reduce((totalYears,user)=>{
    let sum = totalYears +user.yearsOfExperience;
    totalUsers++;
    return sum;
}, 0);
let averageYears = totalYears/totalUsers;

/*********************Find the longest email **************************/
// let emailLeh = 0;
let longestEmail = users.reduce((emailLength, user)=>{
    if(user.email.length > emailLength)
        emailLength = user.email.length;

    return emailLength;
},0);
console.log(longestEmail);
