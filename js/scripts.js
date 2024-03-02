/**
 * Author: Maxphog - Start at The README.md 
 */

/** 3/2/2024 code */

// documents Audio Player Wrapper (APW)
let dom_APW = document.getElementById("audioPlayerWrapper");
console.log(dom_APW);

// documents Metadata Info paragraph
let dom_MDI = document.getElementById("metadataInfo");
console.log(dom_MDI);

// creating the documents main audio player
let dom_MAP = document.createElement("audio");
dom_MAP.setAttribute("class", "audioPlayer");
dom_MAP.setAttribute("id", "mainAudioPlayer");
dom_MAP.setAttribute("controls","");
dom_MAP.setAttribute("hidden","");
// console.log(dom_MAP);

// append AP as the new first child of the wrapper
dom_APW.insertBefore(dom_MAP, dom_APW.firstChild); 

// dom_MAP.setAttribute("src", "/browser_media_player/test_sounds/t-rex-roar.mp3")

console.log(dom_MAP);

/**
 *  This function sets the src attribute of our audio elements. 
 * @param {Object} audioElement - take the audio element we want to set the source for  
 * @param {String} source  - the URI source the audio element will grab the audio from
 * 
 * @returns null
 */
function setAudioSource(audioElement, source) {
    audioElement.setAttribute("src", source)
    console.log("Audio source set:", audioElement);
    return null
}
// testing audio file switching
// setAudioSource(dom_MAP,"/browser_media_player/test_sounds/t-rex-roar.mp3");
// setTimeout(function() {
//     setAudioSource(dom_MAP, "/browser_media_player/test_sounds/THUN_Thunder claps with long ring out; variation_CS_USC.mp3");
// }, 1000);
// setTimeout(function() {
//     setAudioSource(dom_MAP,"/browser_media_player/test_sounds/AMBTrop_Jungle background 1_CS_USC.mp3");
// }, 2000);

// documents File Upload Form Logic 
let mediaFileUploadForm = document.querySelector("form");
mediaFileUploadForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    console.log("upload...  ");
    console.log("Submission Event:",event);

})
console.log(mediaFileUploadForm);


