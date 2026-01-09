function save(data) {
    return new Promise((resolve, reject) => {
           let internetSpeed= Math.floor(Math.random()*10)+1;
    if (internetSpeed>4) {
        resolve("data was saved");
    } else {
        reject("network error");
    }
    });
   
}
save("lima")
.then(()=>{
    console.log("data1 saved");
return save("soma");
})
.then(()=>{
    console.log("data2 saved");
    return save("mama");
})
.then(()=>{
    console.log("data3 was saved");
})

.catch(()=>{
    console.log("promise1 was rejected");
})