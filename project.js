document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListner("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});