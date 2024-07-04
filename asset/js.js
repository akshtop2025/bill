function aksh() {
    console.log("call")

    let rotaryint = document.getElementById("rotary").value
    let rotaryintt = document.getElementById("rotaryy").value
    let thresher = document.getElementById("thresher").value
    let thresherr = document.getElementById("thresherr").value
    let kaltiint = document.getElementById("kalti").value
    let kaltiintt = document.getElementById("kaltii").value

    // let rotaryint = 60
    let rotarytotel = rotaryint * 1000
    let rotarytotell = rotaryintt * 16.666
    let threshertotel = thresher * 1000
    let threshertotell = thresherr * 16.6666
    let kaltitotel = kaltiint * 900
    let kaltitotell = kaltiintt * 15



    let add = parseFloat(rotarytotel) + parseFloat(rotarytotell) + parseFloat(threshertotel) + parseFloat(threshertotell) + parseFloat(kaltitotel) + parseFloat(kaltitotell)
    console.log("add")

    let input = document.getElementById("totelbill").value = add
    alert("thanks for use")

}


// function Click() {

//     let rotaryint = parseFloat(document.getElementById("rotary").value)
//     let thresher = document.getElementById("thresher").value
//     let kaltiint = document.getElementById("kalti").value

//     // let rotaryint = 60
//     let rotarytotel = rotaryint / 60 * 60
//     let threshertotel = thresher * 1200
//     let kaltitotel = kaltiint * 900



//     let add = parseFloat(rotarytotel) + parseFloat(threshertotel) + parseFloat(kaltitotel)
//     console.log("add")

//     let input = document.getElementById("totelbill").value = add
//     alert("thanks for use")

// }

// function Click() {
//     let rotaryint = parseFloat(document.getElementById("rotary").value);
//     document.getElementById("rotary").value
//     let thresher = parseFloat(document.getElementById("thresher").value);
//     let kaltiint = parseFloat(document.getElementById("kalti").value);

//     let rotarytotel = rotaryint * .1300;
//     let threshertotel = thresher * 1200;
//     let kaltitotel = kaltiint * 900;

//     let add = rotarytotel + threshertotel + kaltitotel;
//     console.log(add);

//     document.getElementById("totelbill").value = add;
//     alert("Thanks for using!");
// }
