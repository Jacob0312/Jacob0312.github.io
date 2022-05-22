const submit = document.getElementById("btn");
const logval = document.getElementById("logval");
const USER_KEY = "user";

const onSubmit = (event) => {
	event.preventDefault();
	const input = logval.value;
	if (input != "" && input.length >= 2 && input.length <= 10) {
		localStorage.setItem(USER_KEY, input);
		window.location.href = "index.html";
	} else {
		console.log("error");
	}
};

submit.addEventListener("click", onSubmit);
