// Class Declaration js file
export default class AudioPlayer {
	constructor(
		dom_parent_element = null,
		source = null,
		html_class = null,
		id = null,
		controls = null,
		hidden = null
	) {
		console.log("THIS:", this);

		console.log("dom_parent_element:", dom_parent_element);
		console.log("source:", source);
		console.log("html_class:", html_class);
		console.log("id:", id);
		console.log("controls:", controls);
		console.log("hidden:", hidden);

		// lets create the audio player here
		// first its parent
		this.dom_parent_element = dom_parent_element;
		// then the dom creation of the element
		this.dom_audioPlayer_element = document.createElement("audio");

		//js -> html attributes
		this.source = source;
		this.html_class = html_class;
		this.id = id;
		this.controls = controls;
		this.hidden = hidden;

		// setting the html attributes
		this.dom_audioPlayer_element.setAttribute("class", this.html_class);
		this.dom_audioPlayer_element.setAttribute("id", this.id);
		this.dom_audioPlayer_element.setAttribute("controls", this.controls);
		this.dom_audioPlayer_element.setAttribute("hidden", this.hidden);

		console.log("THIS:", this);
	}

	/**
	 * This method will mount the audio player to its parrent
	 */
	mount_to_parent() {
		console.log("Mounting...");
		console.log("Parent:", this.dom_parent_element);
		console.log("Parents first child:", this.dom_parent_element.firstChild);
		console.log("this:", this);
		console.log(
			"this.dom_audioPlayer_element:",
			this.dom_audioPlayer_element
		);

		// prepend AP as the new first child of the parent
		this.dom_parent_element.insertBefore(
			this.dom_audioPlayer_element,
			this.dom_parent_element.firstChild
		);

		console.log("Mounting Complete!");
		console.log("this:", this);
		console.log(
			"this.dom_audioPlayer_element:",
			this.dom_audioPlayer_element
		);
	}
}
