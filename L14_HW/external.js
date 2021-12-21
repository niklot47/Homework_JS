////                        deadlock
////===================================================================
// let elementByID = document.getElementById('btn');
//
// elementByID.onclick = () => {
//     console.log('btn');
// }
// let i = 0;
// while (i<999999999){
//     i++
// }


////                        asynchro
////===================================================================
// let a = 100;
//
// function long(trig1) {
//     setTimeout(() => {
//         if (trig1) {
//             a +=500;
//             console.log('long: ',true);
//         } else {
//             console.log('long: ',false);
//         }
//     }, 3000)
// }
//
// function fast(a) {
//     setTimeout(() =>{
//         if (a > 500){
// console.log('fast: ',true, a );
// }else{
//     console.log('fast: ',false, a)
//          }
//         }, 1000
//     )
// }
//
// long(true);
// fast(a);



////                          callback sync
////===================================================================
// let a = 100;
//
// function long(trig1, callback) {
//     setTimeout(() => {
//         if (trig1) {
//             a +=500;
//             console.log('long: ',true);
//             callback();
//         } else {
//             console.log('long: ',false);
//         }
//     }, 3000)
// }
//
// function fast(a) {
//     setTimeout(() =>{
//         if (a > 500){
//             console.log('fast: ',true, a );
//         }else{
//             console.log('fast: ',false, a)
//         }
//         }, 1000
//     )
// }
//
// long(true, ()=>{
// fast(a);
// });



////                          promise sync
////===================================================================
// let a = 100;
//
// function long(trig1) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             if (trig1) {
//                 a +=500;
//                 console.log('long: ',true);
//                 resolve(a);
//             } else {
//                 console.log('long: ',false);
//                 reject('long - rejected')
//             }
//         }, 3000)
//     })
// }
//
// function fast(a) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//                 if (a > 500){
//                     console.log('fast: ',true, a );
//                     resolve('fast resolved');
//                 }else{
//                     console.log('fast: ',false, a);
//                     reject('fast - rejected');
//                 }
//             }, 1000
//         )
//     })
// }
//
// long(true).then(a => fast(a));



//                         sync await
//===================================================================
let a = 100;

function long(trig1) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (trig1) {
                a +=500;
                console.log('long: ',true);
                resolve(a);
            } else {
                console.log('long: ',false);
                reject('long - rejected')
            }
        }, 3000)
    })
}

function fast(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
                if (a > 500){
                    console.log('fast: ',true, a );
                    resolve('fast resolved');
                }else{
                    console.log('fast: ',false, a);
                    reject('fast - rejected');
                }
            }, 1000
        )
    })
}

async function wrap () {
    const long1 = await long(true);
    const fast1 = await fast(a);
    // console.log(long1);
    // console.log(fast1);
}

wrap();