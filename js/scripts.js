/**
 * Author: Maxphog - Start at The README.md 
 */

/** 3/2/2024 code */

// document Audio Player Wrapper (APW)
let dom_APW = document.getElementById("audioPlayerWrapper");
console.log(dom_APW);

// document Metadata Info paragraph
let dom_MDI = document.getElementById("metadataInfo");
console.log(dom_MDI);

// creating the main audio player
let dom_MAP = document.createElement("audio");
dom_MAP.setAttribute("class", "audioPlayer");
dom_MAP.setAttribute("id", "mainAudioPlayer");
dom_MAP.setAttribute("controls","");
// console.log(dom_MAP);

// append AP as the new first child of the wrapper
dom_APW.insertBefore(dom_MAP, dom_APW.firstChild); 
console.log(dom_MAP);



/** OLDCODE VVVV */
// // initialization of metadata value objects
// let duration;
// let author;
// let title;

// // initialization of metadata updating function
// function updateMetadataInfo(metadata) {
//     let dom_MI = document.getElementById("metadataInfo");
//     dom_MI.innerHTML = metadata;
// }

// // once document fully loads 
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("DOM fully loaded and parsed");
    
//     console.log("HELOOOOOOOO WORLLLLDDDDD!!!");

    
//     console.log("Our Html elements:");
//     // document body (body)
//     let dom_body = document.getElementsByTagName("body")
//     console.log(dom_body);

    
//     // document Audio Player Wrapper (APW)
//     let dom_APW = document.getElementById("audioPlayerWrapper")
//     console.log(dom_APW);

    
//     // document Audio Player (AP)
//     let dom_AP = document.getElementById("audioPlayer")
//     console.log(dom_AP);

    
//     // document Metadata Info (MI)
//     let dom_MI = document.getElementById("metadataInfo")
//     console.log(dom_MI);

    
//     // document Toggle Loop Button (TLBTN)
//     let dom_TLBTN = document.getElementById("toggleLoopBtn")
//     console.log(dom_TLBTN);

    
//     // document Download Link (DL)
//     let dom_DL = document.getElementById("downloadLink")
//     console.log(dom_DL);

//     // adding an event listener for when the audio file finishes loading.
//     dom_AP.addEventListener("loadedmetadata", function() {
//         // the moment we get a loadedmetadata event from the audio player
//         console.log("Metadata loaded!");
//         console.log(dom_AP);

//         // getting the duration of the audio file from the audio element
//         let duration = dom_AP.duration;
//         // lets try author, title, and other metadata
//         let  author = dom_AP.author ;
//         let  title = dom_AP.title;
        
//         console.log("The duration is:", duration);
//         console.log("The author is:", author);
//         console.log("The title is:", title);
        
//         // updating metadata 
//         updateMetadataInfo(`
//             Duration: ${duration} 
//             <br>
//             Author: ${author}
//             <br>
//             Title: ${title}
//         `);
//     });

//     // updating metadata 
//     updateMetadataInfo(`
//         Duration: ${duration} 
//         <br>
//         Author: ${author}
//         <br>
//         Title: ${title}
//     `);
// });


