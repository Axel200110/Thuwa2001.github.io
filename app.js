(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
function typeText(element, text, speed) {
    let index = 0;
    const intervalId = setInterval(() => {
        element.innerHTML += text[index];
        index++;
        if (index === text.length) {
            clearInterval(intervalId);
        
            element.classList.remove('typing-text');
        }
    }, speed);
}


window.onload = function () {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        typeText(typingElement, " designer and Creator. I am an undergraduate ", 100);
     
    }
};

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxMF6U4Bg_7OOZDD0CAO0eYx6r5HuWbmMtyJq91_2SWn3qAgR6Y_6foe5gVBZnqojdE/exec'
  const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Message sent Succesfully."
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

