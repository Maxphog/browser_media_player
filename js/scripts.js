console.log("HELOOOOOOOO WORLLLLDDDDD!!!");

let dom_body = document.getElementsByTagName("body")
let dom_APW = document.getElementById("audioPlayerWrapper")
let dom_AP = document.getElementById("audioPlayer")
let dom_MI = document.getElementById("metadataInfo")
let dom_TLBTN = document.getElementById("toggleLoopBtn")
let dom_DL = document.getElementById("downloadLink")


console.log(dom_body);
console.log(dom_APW);
console.log(dom_AP);
console.log(dom_MI);
console.log(dom_TLBTN);
console.log(dom_DL);


// let duration = dom_AP.duration;
// console.log("The duration is:", duration);


dom_AP.addEventListener("loadedmetadata", function() {
    // the momemt we get a loadedmetadataevent from the audio player
    console.log("Metadata loaded!");
    console.log(dom_AP);
    let duration = dom_AP.duration;
    console.log("The duration is:", duration);
});