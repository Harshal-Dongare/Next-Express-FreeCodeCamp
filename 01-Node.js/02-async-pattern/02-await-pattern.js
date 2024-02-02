// await-async 

// promise

const fs = require('fs');

// import util module
const util = require('util');

// methods provided by util module
const readFilePromise = util.promisify(fs.readFile)
const writeFilePromise = util.promisify(fs.writeFile)


// async-await function
async function getResult(){
    try{

        // const first = await getText('./content/file.txt');
        // const second = await getText('./content/second.txt');
        
        const first = await readFilePromise('./content/file.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');

        await writeFilePromise(
            './content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`,
            {
                flag: 'a',
            }
        )
        
        console.log(`${first}, ${second}`)
    }catch(err) {
        console.log(err);
    }
} 

getResult();


//---------------------------------------------------------------------------------------------


// traditional approach


// // wrap async function inside promise
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, 'utf-8', (err, data) => {
//             if(err) {
//                 reject(err);
//             }else {
//                 resolve(data);
//             }
//         })
//     })
// }

// // creating call back hell
// getText('./content/file.txt')
//     .then((data) => {console.log(data);})
//     .catch((err) =>{console.log(err.message)})

