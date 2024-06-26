class MobileNavbar {
   constructor(mobileMenu) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelector.querySelectorAll(navLinks);
    this.activeClass = "active";
   }
}

addClickEvent() {
    this.mobileMenu.addEventListener("click", () => console.log
    ("Hey  "));
}