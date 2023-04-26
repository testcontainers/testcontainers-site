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