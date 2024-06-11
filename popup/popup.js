const input = document.getElementById("input-box");
const list = document.getElementById("list");
const btn = document.getElementById("btn");
const toggle = document.getElementById("img");
const body = document.body.classList;
let mode;

function darkMode() {
    body.replace("light", "dark");
    list.classList.replace("light", "dark");
    mode = "dark";
    chrome.storage.local.set({ mode: mode });
}

function lightMode() {
    body.replace("dark", "light");
    list.classList.replace("dark", "light");
    mode = "light";
    chrome.storage.local.set({ mode: mode });
}

toggle.addEventListener("click", () => {
    if (body.contains("dark")) {
        lightMode();
    } else {
        darkMode();
    }
});

chrome.storage.local.get(["mode"], (res) => {
    mode = res.mode || "light"; // Default mode to light if not found
    body.remove('dark');
    body.remove('light');
    body.add(mode);
    if (mode === "dark") {
        darkMode();
    } else {
        lightMode();
    }
});


btn.addEventListener("click", () => {
    if (input.value === "") {
        alert("Must Enter A Task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value.trim();
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
});

list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    chrome.storage.local.set({ data: list.innerHTML });
}

(() => {
    chrome.storage.local.get(["data"], (result) => {
        if (result.data !== undefined) {
            list.innerHTML = result.data;
        }
    });
})();
