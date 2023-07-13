function Click() {

    let rotaryint = document.getElementById("rotary").value
    let thresher = document.getElementById("thresher").value
    let kaltiint = document.getElementById("kalti").value

    let rotarytotel = rotaryint * 1300
    let threshertotel = thresher * 1200
    let kaltitotel = kaltiint * 900

    let add = rotarytotel + threshertotel + kaltitotel
    console.log("add")

    let input = document.getElementById("totelbill").value = add
    alert("thanks for use")

}