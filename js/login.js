const login = document.getElementById("login");
const text = document.getElementById("login_text");
const USER_KEY = "user";
const saved = localStorage.getItem(USER_KEY);
function hide(saved) {
	login.classList.add("hidden");
	text.innerHTML = `<h1>${saved.toUpperCase()}! What a beautiful name!</h1> `;
}

hide(saved);
