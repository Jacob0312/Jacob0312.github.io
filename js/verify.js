const USER_KEY = "user";
const saved = localStorage.getItem(USER_KEY);
const loginbtn = document.getElementById("clicklog");

const onClick = () => {
	if (saved !== null) {
		window.location.href = "main.html";
	} else {
		alert("You are not logged in! please sign up");
	}
};
loginbtn.style.cursor = `pointer`;
loginbtn.addEventListener("click", onClick);
