// initialization of metadata value objects
let duration;

// initialization of metadata updating function
function updateMetadataInfo(metadata) {
    let dom_MI = document.getElementById("metadataInfo");
    dom_MI.innerHTML = metadata;
}

// once document fully loads 
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    
    console.log("HELOOOOOOOO WORLLLLDDDDD!!!");

    
    console.log("Our Html elements:");
    // document body (body)
    let dom_body = document.getElementsByTagName("body")
    console.log(dom_body);

    
    // document Audio Player Wrapper (APW)
    let dom_APW = document.getElementById("audioPlayerWrapper")
    console.log(dom_APW);

    
    // document Audio Player (AP)
    let dom_AP = document.getElementById("audioPlayer")
    console.log(dom_AP);

    
    // document Metadata Info (MI)
    let dom_MI = document.getElementById("metadataInfo")
    console.log(dom_MI);

    
    // document Toggle Loop Button (TLBTN)
    let dom_TLBTN = document.getElementById("toggleLoopBtn")
    console.log(dom_TLBTN);

    
    // document Download Link (DL)
    let dom_DL = document.getElementById("downloadLink")
    console.log(dom_DL);

    // adding an event listener for when the audio file finishes loading.
    dom_AP.addEventListener("loadedmetadata", function() {
        // the moment we get a loadedmetadata event from the audio player
        console.log("Metadata loaded!");
        console.log(dom_AP);
        let duration = dom_AP.duration;
        console.log("The duration is:", duration);
        
        // updating metadata 
        updateMetadataInfo(`Duration: ${duration}`);
    });

    // updating metadata 
    updateMetadataInfo(`Duration: ${duration}`);
});


