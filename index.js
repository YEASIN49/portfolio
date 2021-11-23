const hamburger = document.querySelector(".burgerpng");
const navMenu = document.querySelector(".sideMenu");
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("hamburger-btn-close");
	navMenu.classList.toggle("toggle-hidable-sideMenu");
});

/////////////////////////////////////
// onclick="filter(all)"
// onclick="filter(fullStack)"
// onclick="filter(frontEnd)"


const projects = document.getElementsByClassName("project-card");
const filter = (event) => {
	const keyword = event.target;
	console.log(keyword);
	focusFilterButton(keyword);
	for (var index = 0; index < projects.length; ++index) {
		let valueAttribute = projects[index].getAttribute('value')
		let htmlClass = projects[index].classList;
		if (!htmlClass.contains('hidden')) {
			projects[index].classList.add("hidden")
		}
		if (keyword.value === valueAttribute) {
			projects[index].classList.toggle("hidden");
		}
		else if (keyword.value === 'all') {
			projects[index].classList.toggle("hidden");
		}
	}
}
const focusFilterButton = (targetButton) => {
	let filterButtons = document.getElementsByClassName("search-filter-option");
	for (let index = 0; index < filterButtons.length; ++index) {
		if (filterButtons[index].classList.contains("active-filter")) {
			filterButtons[index].classList.remove("active-filter");
		}
		else if (filterButtons[index] === targetButton) {
			console.log("entered");
			// filterButtons[index].style.transition = "0.5s";
			filterButtons[index].classList.add("active-filter");
		}
	}
}
// active-filter
const activeOnMount = document.getElementById("activeOnMount");
activeOnMount.click();

// github gif adder
var gifContainer = document.createElement('div');
var scrollMsgTag = document.createElement('span');
var gif = document.createElement('img');
var scrollMsg = document.createTextNode("Slide Right");
// gif.className.add('customAddedGif');
//  gif.width="60px";
gif.src = 'https://media3.giphy.com/media/JtBidqgB4MPjvix9MH/giphy.gif?cid=790b76113322cc1e49d868032acbf42a6dd96d05e9440b96&rid=giphy.gif&ct=s';
// document.querySelector('.js-calendar-graph').appendChild(gif);
// down.innerHTML = "Image Element Added."; 

scrollMsgTag.appendChild(scrollMsg);
gifContainer.appendChild(gif);
gifContainer.appendChild(scrollMsgTag);
document.querySelector('.js-calendar-graph').appendChild(gifContainer);
