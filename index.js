let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding removing the "active" class, 
        to higlight the button that controls the panel*/
        this.classList.toggle("active");
   

        /* toggle between hiding and showing the active panels */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
         } else {
        panel.style.display = "block";
        }
    });
}