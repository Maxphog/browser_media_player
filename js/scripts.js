/**
 * Author: Maxphog - Start at The README.md
 */

/** 3/4/2024 code */

// Ensure that the DOM content is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function () {
	// Select necessary DOM elements

	// documents Audio Player Wrapper (APW)
	const dom_audioPlayerWrapper =
		document.getElementById("audioPlayerWrapper");
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
	dom_mainAudioPlayer.setAttribute("controls", "");
	dom_mainAudioPlayer.setAttribute("hidden", "");

	// append AP as the new first child of the wrapper
	dom_audioPlayerWrapper.insertBefore(
		dom_mainAudioPlayer,
		dom_audioPlayerWrapper.firstChild
	);
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
		console.log("audioElement:", audioElement);
		console.log("source:", source);
		audioElement.setAttribute("src", source);
		console.log("Audio source set:", audioElement);
	}

	/**
	 * EVENTS -+-+START+-+-< audio
	 * name 	        Fired when
	 *  audioprocess 	 The input buffer of a ScriptProcessorNode is ready to be processed.
	 *  canplay      	 The browser can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
	 *  canplaythrough   The browser estimates it can play the media up to its end without stopping for content buffering.
	 *  complete         The rendering of an OfflineAudioContext is terminated.
	 *  durationchange   The duration attribute has been updated.
	 *  emptied      	 The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the HTMLMediaElement.load method is called to reload it.
	 *  ended        	 Playback has stopped because the end of the media was reached.
	 *  loadeddata       The first frame of the media has finished loading.
	 *  loadedmetadata   The metadata has been loaded.
	 *  loadstart        Fired when the browser has started to load the resource.
	 *  pause        	 Playback has been paused.
	 *  play         	 Playback has begun.
	 *  playing      	 Playback is ready to start after having been paused or delayed due to lack of data.
	 *  ratechange       The playback rate has changed.
	 *  seeked       	 A seek operation completed.
	 *  seeking      	 A seek operation began.
	 *  stalled      	 The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.
	 *  suspend      	 Media data loading has been suspended.
	 *  timeupdate       The time indicated by the currentTime attribute has been updated.
	 *  volumechange     The volume has changed.
	 *  waiting      	 Playback has stopped because of a temporary lack of data
	 */

	// Add event listener for 'audioprocess' event
	dom_mainAudioPlayer.addEventListener("audioprocess", function (event) {
		console.log("audioprocess event fired:", event);
	});
	// Add Event listener for 'canplay' event
	dom_mainAudioPlayer.addEventListener("canplay", function (event) {
		console.log("canplay event fired:",event );
	});

	// Add Event listener for 'canplaythrough' event
	dom_mainAudioPlayer.addEventListener("canplaythrough", function (event) {
		console.log("canplaythrough event fired:",event );
	});

	// Add Event listener for 'complete' event
	dom_mainAudioPlayer.addEventListener("complete", function (event) {
		console.log("complete event fired:",event );
	});

	// Add Event listener for 'durationchange' event
	dom_mainAudioPlayer.addEventListener("durationchange", function (event) {
		console.log("durationchange event fired:",event );
	});

	// Add Event listener for 'emptied' event
	dom_mainAudioPlayer.addEventListener("emptied", function (event) {
		console.log("emptied event fired:",event );
	});

	// Add Event listener for 'ended' event
	dom_mainAudioPlayer.addEventListener("ended", function (event) {
		console.log("ended event fired:",event );
	});

	// Add Event listener for 'loadeddata' event
	dom_mainAudioPlayer.addEventListener("loadeddata", function (event) {
		console.log("loadeddata event fired:",event );
	});

	// Add Event listener for 'loadedmetadata' event
	dom_mainAudioPlayer.addEventListener("loadedmetadata", function (event) {
		console.log("loadedmetadata event fired:",event );
	});

	// Add Event listener for 'loadstart' event
	dom_mainAudioPlayer.addEventListener("loadstart", function (event) {
		console.log("loadstart event fired:",event );
	});

	// Add Event listener for 'pause' event
	dom_mainAudioPlayer.addEventListener("pause", function (event) {
		console.log("pause event fired:",event );
	});

	// Add Event listener for 'play' event
	dom_mainAudioPlayer.addEventListener("play", function (event) {
		console.log("play event fired:",event );
	});

	// Add Event listener for 'playing' event
	dom_mainAudioPlayer.addEventListener("playing", function (event) {
		console.log("playing event fired:",event );
	});

	// Add Event listener for 'ratechange' event
	dom_mainAudioPlayer.addEventListener("ratechange", function (event) {
		console.log("ratechange event fired:",event );
	});

	// Add Event listener for 'seeked' event
	dom_mainAudioPlayer.addEventListener("seeked", function (event) {
		console.log("seeked event fired:",event );
	});

	// Add Event listener for 'seeking' event
	dom_mainAudioPlayer.addEventListener("seeking", function (event) {
		console.log("seeking event fired:",event );
	});

	// Add Event listener for 'stalled' event
	dom_mainAudioPlayer.addEventListener("stalled", function (event) {
		console.log("stalled event fired:",event );
	});

	// Add Event listener for 'suspend' event
	dom_mainAudioPlayer.addEventListener("suspend", function (event) {
		console.log("suspend event fired:",event );
	});

	// Add Event listener for 'timeupdate' event
	dom_mainAudioPlayer.addEventListener("timeupdate", function (event) {
		console.log("timeupdate event fired:",event );
	});

	// Add Event listener for 'volumechange' event
	dom_mainAudioPlayer.addEventListener("volumechange", function (event) {
		console.log("volumechange event fired:",event );
	});

	// Add Event listener for 'waiting' event
	dom_mainAudioPlayer.addEventListener("waiting", function (event) {
		console.log("waiting event fired:",event );
	});
	/**
	 * EVENTS -+-+END+-+-> audio
	 */

	/**
	 * EVENTS -+-+START+-+-< form
	 */
    // Event listener for file upload form submission
    dom_fileUploadForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        console.log("upload...  ");

        console.log("Submission Event:", event);

        try {
            const file = dom_fileUploadInput.files[0];
            if (file) {
                // Check if the file extension is mp3
                if (file.name.toLowerCase().endsWith('.mp3')) {
                    const fileURL = URL.createObjectURL(file);
                    setAudioSource(dom_mainAudioPlayer, fileURL);

                    dom_downloadLink.setAttribute("href", fileURL)

                    dom_mainAudioPlayer.hidden = false;
                } else {
                    console.error("File is not an MP3");
                    // Provide user feedback about the error
                    alert("Please select an MP3 file.");
                }
            } else {
                console.error("No file selected for upload");
                // Provide user feedback about the error
                alert("Please select a file before uploading.");
            }
        } catch (error) {
            // Log the error to aid in debugging
            console.error("Error occurred during file upload:", error);
            // Provide user feedback about the error
            alert("An error occurred during file upload. Please try again later.");
        }
    });
    /**
	 * EVENTS -+-+END+-+-< form
	 */


});
