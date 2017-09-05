/*
* @Author: Administrator
* @Date:   2017-09-04 17:34:18
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-04 19:20:59
*/

	var myImage = document.querySelector("img");

	myImage.onclick = function() {
		var mySrc = myImage.getAttribute("src");
		if(mySrc === 'images/ms4.jpg'){
			myImage.setAttribute("src", "images/ms5.jpg")
		}else{
			myImage.setAttribute("src", "images/ms4.jpg")
		}
	}


	var myButton = document.querySelector("button");
	var myHeading = document.querySelector("h3");

	function setUserName() {
		var myName = prompt("Please entre your name");
		localStorage.setItem("name",myName);
		myHeading.innerHTML = "舌尖上的美食欢迎"+ myName;
	}

	if(!localStorage.getItem("name")){
		setUserName();
	}else{
		var storedName = localStorage.getItem("name");
		myHeading.innerHTML = "舌尖上的美食欢迎"+ storedName;
	}

	myButton.onclick = function(){
		setUserName();
	}

