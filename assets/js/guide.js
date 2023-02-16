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

const tocObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('#TableOfContents a').forEach((link) => {
                link.classList.remove('current');
            });
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`#TableOfContents a[href="#${id}"]`);
            link.classList.add('current');
        }
    })
}, {
    rootMargin: '0px 0px -50% 0px'
});
document.querySelectorAll('#TableOfContents a').forEach((link) => {
    tocObserver.observe(document.querySelector(link.hash));
});