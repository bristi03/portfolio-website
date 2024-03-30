
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        var workdivs = document.getElementsByClassName("work");
        var project_btn = document.getElementById("project-btn");
        var project_btn_less = document.getElementById("project-btn-less");

        function opendiv(){
            for(workdiv of workdivs){
                workdiv.classList.add("active-work");
            }
            project_btn.classList.add("hide-btn");
            project_btn_less.classList.remove("hide-btn");
        }

        function closediv(){
            for(workdiv of workdivs){
                workdiv.classList.remove("active-work");
            }
            project_btn.classList.remove("hide-btn");
            project_btn_less.classList.add("hide-btn");
        }

        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }

        function closemenu(){
            sidemenu.style.right = "-200px";
        }


const scriptURL = ' https://script.google.com/macros/s/AKfycbxJy3YTAciZUXrYiu87qd_i7d70D4XJQgc8CVrBcjxTNrh9kQt2ygluiAjKDPqZH4x-Hg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
       

