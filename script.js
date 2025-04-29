document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navList = document.querySelector(".nav-list");

    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener("click", () => {
            navList.classList.toggle("active");
            mobileMenuBtn.classList.toggle("active");
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (navList.classList.contains("active")) {
                    navList.classList.remove("active");
                    mobileMenuBtn.classList.remove("active");
                }
            });
        });
    }

    // Portfolio Filter
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    if (filterButtons.length > 0 && portfolioItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove("active"));
                // Add active class to the clicked button
                button.classList.add("active");

                const filterValue = button.getAttribute("data-filter");

                portfolioItems.forEach(item => {
                    const itemCategories = item.getAttribute("data-category").split(" ");
                    if (filterValue === "todos" || itemCategories.includes(filterValue)) {
                        item.style.display = "block"; // Show item
                        item.classList.remove("hide"); // Ensure it's not hidden by class
                    } else {
                        item.style.display = "none"; // Hide item
                        item.classList.add("hide"); // Add hide class for potential CSS transitions
                    }
                });
            });
        });
    }

    // Smooth Scrolling (Optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement){
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
