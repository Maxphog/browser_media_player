/**
 * Author: Maxphog - Start at The README.md 
 */

/** 3/2/2024 code */

// Ensure that the DOM content is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function() {

    // Select necessary DOM elements
    
    // documents Audio Player Wrapper (APW)
    const dom_audioPlayerWrapper = document.getElementById("audioPlayerWrapper");
    console.log(dom_audioPlayerWrapper);
    // documents Metadata Info paragraph
    const dom_metadataInfo = document.getElementById("metadataInfo");
    console.log(dom_metadataInfo);
    // documents file upload form and its input
    const dom_fileUploadForm = document.querySelector("form");
    const dom_fileUploadInput = document.getElementById("fileUploadInput");
    
    // creating the documents main audio player
    const dom_mainAudioPlayer = document.createElement("audio");
    dom_mainAudioPlayer.setAttribute("class", "audioPlayer");
    dom_mainAudioPlayer.setAttribute("id", "mainAudioPlayer");
    dom_mainAudioPlayer.setAttribute("controls","");
    dom_mainAudioPlayer.setAttribute("hidden","");
    
    // append AP as the new first child of the wrapper
    dom_audioPlayerWrapper.insertBefore(dom_mainAudioPlayer, dom_audioPlayerWrapper.firstChild); 
    // console.log(dom_mainAudioPlayer);
    // dom_mainAudioPlayer.setAttribute("src", "/browser_media_player/test_sounds/t-rex-roar.mp3")
    console.log(dom_mainAudioPlayer);
    
    // documents loop audio button
    const dom_toggleLoopBtn = document.getElementById("toggleLoopBtn");
    console.log(dom_toggleLoopBtn);
    
    // documents download audio button
    const dom_downloadLink = document.getElementById("downloadLink");
    console.log(dom_downloadLink);


    /**
     *  This function sets the src attribute of our audio elements. 
     * @param {Object} audioElement - take the audio element we want to set the source for  
     * @param {String} source  - the URI source the audio element will grab the audio from
     * 
     * @returns null
     */
    function setAudioSource(audioElement, source) {
        console.log("setAudioSource");
        console.log("Inputs:");
        console.log("audioElement:",audioElement);
        console.log("source:",source);
        audioElement.setAttribute("src", source);
        console.log("Audio source set:", audioElement);
    }

    // testing audio file switching
    // setAudioSource(dom_mainAudioPlayer,"/browser_media_player/test_sounds/t-rex-roar.mp3");
    // setTimeout(function() {
    //     setAudioSource(dom_mainAudioPlayer, "/browser_media_player/test_sounds/THUN_Thunder claps with long ring out; variation_CS_USC.mp3");
    // }, 1000);
    // setTimeout(function() {
    //     setAudioSource(dom_mainAudioPlayer,"/browser_media_player/test_sounds/AMBTrop_Jungle background 1_CS_USC.mp3");
    // }, 2000);
    


});
