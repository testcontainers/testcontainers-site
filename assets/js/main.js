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