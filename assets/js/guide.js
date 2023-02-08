hljs.addPlugin({
    "after:highlightElement": ({el, text}) => {
        let button = Object.assign(document.createElement("button"), {
            innerHTML: "Copy",
            type: "button",
            classList: "copy-btn"
        });
        el.parentElement.appendChild(button);
        button.onclick = () => {
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    button.innerHTML = "Copied";
                    button.classList.add('copied');
                    setTimeout(() => {
                        button.innerHTML = "Copy";
                        button.classList.remove('copied');
                    }, 2000);
                })
        }
    },
});
hljs.highlightAll();
