const mobileToggle = document.getElementById("mobile-menu-toggle");
const mobileSubToggle = document.getElementById("mobile-submenu-toggle");
function toggleMobileMenu() {
    document.body.classList.toggle('mobile-menu'); 
}
function toggleMobileSubmenu() {
    document.body.classList.toggle('mobile-submenu'); 
}
if (mobileToggle)
    mobileToggle.addEventListener("click", toggleMobileMenu);
if (mobileSubToggle)
    mobileSubToggle.addEventListener("click", toggleMobileSubmenu);

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

        const gettingStartedButtons = e.target.closest(".code-examples").querySelectorAll(".getting-started-button");
        gettingStartedButtons.forEach((button) => {
            if (button.dataset.id === targetId) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
    });
});

// Handle UTMs 
const queryParams = new URLSearchParams(window.location.search);
const utmKeys = [
    "utm_campaign",
    "utm_source",
    "utm_medium",
    "utm_term",
    "utm_content"
];
const utms = [];
if (document.referrer) {
    utms.push({
        key: "original_referrer",
        value: document.referrer
    });
}
utmKeys.forEach((key) => {
    const value = queryParams.get(key) || false;
    if (value) utms.push({
        key: key,
        value: value
    });
});
signupLinks = document.querySelectorAll("a[href*='app.testcontainers.cloud/signup']");
signupLinks.forEach(link => {
    const url = new URL(link.href);
    const query = new URLSearchParams(url.search);
    utms.forEach(utm => {
        query.set(utm.key, utm.value);
    });
    const queryString = (query.toString() != "") ? "?" + query.toString() : "";
    link.href = url.toString() + queryString;
});
signupForms = document.querySelectorAll(".tcc-signup-form");
signupForms.forEach(form => {
    utms.forEach(utm => {
        const field = document.createElement("input");
        field.setAttribute("type", "hidden");
        field.setAttribute("name", utm.key);
        field.setAttribute("value", utm.value);
        form.appendChild(field);
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

async function hashText(text) {
    const encoder = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encoder);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    return hashHex
}
function dismissAnnouncementBanner() {
    announcementBanner.classList.remove("not-dismissed");
    announcementBanner.classList.add("dismissed");
    hashText(announcementBanner.innerHTML)
        .then((hash) => {  
            localStorage.setItem("dismissedAnnouncement", hash);
        });
}
const announcementBanner = document.getElementById("announcement-banner");
const announcementBannerButton = document.getElementById("announcement-banner-button");
announcementBannerButton.addEventListener('click', dismissAnnouncementBanner);
hashText(announcementBanner.innerHTML)
    .then((hash) => {
        if (localStorage.getItem("dismissedAnnouncement") && localStorage.getItem("dismissedAnnouncement") === hash) {
            announcementBanner.classList.remove("not-dismissed");
            announcementBanner.classList.add("dismissed");
        } else {
            announcementBanner.classList.add("not-dismissed");
        }
    })