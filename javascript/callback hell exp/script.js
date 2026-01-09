function save(data,sucess,failure) {
    let internetSpeed= Math.floor(Math.random()*10)-1;
    if (internetSpeed>4) {
        sucess();
    } else {
        failure();
    }
}
save(
    "lima",
    ()=>{
        console.log("success1: your data was saved");
        save(
            "soma",
            ()=>{
            console.log("success2:your data is saved");
            save(
            "soma",
            ()=>{
            console.log("success3:your data is saved");
            },
            ()=>{
             console.log("failure3:weak connection");   
            }
        );
            },
            ()=>{
             console.log("failure2:weak connection");   
            }
        );
    },
     ()=>{
        console.log("failure1:weak connection");
    }

)