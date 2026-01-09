h2=document.querySelector("h2");
function colorChange(color,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h2.style.color=color;
            console.log(`color changed to ${color}`);
            resolve("color chnaged");
        },delay);
    });
}
async function demo(){
    try{
    await colorChange("red",1000);
     await colorChange("green",1000);
      await colorChange("blue",1000);
       await colorChange("purple",1000);
}catch(err){
    console.log("error caught");
    console.log(err);
}
}
