const mobileToggle = document.getElementById("mobile-menu-toggle");
function toggleMobileMenu() {
    document.body.classList.toggle('mobile-menu'); 
}
mobileToggle.addEventListener("click", toggleMobileMenu);

const allParentMenuItems = document.querySelectorAll("#site-header .menu-item.has-children");

function clearActiveMenuItem() {
    allParentMenuItems.forEach((item) => {
        item.classList.remove("active");
    });
}

function setActiveMenuItem(e) {
    clearActiveMenuItem();
    e.currentTarget.closest(".menu-item").classList.add("active");
}

allParentMenuItems.forEach((item) => {
    const trigger = item.querySelector(":scope > a, :scope > button");

    trigger.addEventListener("click", (e) => {
        if (e.currentTarget.closest(".menu-item").classList.contains("active")) {
            clearActiveMenuItem();
        }  else {
            setActiveMenuItem(e);
        }
    });

    trigger.addEventListener("mouseenter", (e) => {
        setActiveMenuItem(e);
    });

    item.addEventListener("mouseleave", (e) => {
        clearActiveMenuItem();
    });
});

const allTabLabels = document.querySelectorAll(".code-examples .tab-labels button");
allTabLabels.forEach((label) => {
    label.addEventListener("click", (e) => {
        const targetId = e.currentTarget.dataset.target;
        
        const tabLabels = e.currentTarget.closest(".examples").querySelectorAll(".tab-labels button");
        tabLabels.forEach((label) => {
            if (label.dataset.target === targetId) {
                label.classList.add("active");
            } else {
                label.classList.remove("active");
            }
        });

        const tabPanels = e.target.closest(".examples").querySelectorAll(".tab-panels .tab-panel");
        tabPanels.forEach((panel) => {
            if (panel.dataset.id === targetId) {
                panel.classList.add("active");
            } else {
                panel.classList.remove("active");
            }
        });
    });
});

hljs.addPlugin({
    "after:highlightElement": ({el, result, text}) => {
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
        el.dataset.lang = result.language;
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