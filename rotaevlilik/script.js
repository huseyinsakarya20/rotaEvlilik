// check.onclick = togglepassword;
// function togglepassword(){
//     if (check.checked) pass.type = "text";
//     else pass.type ="password";   
// }
// check.onclick = togglepassword;
// function togglepassword(){
//     if (check.checked) pass.type = "text";
//     else pass.type ="password";   
// }


function togglePassword(checkboxId, passwordId) {
    var checkbox = document.getElementById(checkboxId);
    var passwordInput = document.getElementById(passwordId);

    if (checkbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
const Bars = document.querySelector(".fa-bars");
const dropdownMenu = document.querySelector(".dropdown_menu")
let timedId;

Bars.addEventListener("click", function() {
    dropdownMenu.classList.toggle('open');
});

dropdownMenu.addEventListener('click',function(event){
    if(event.target.tagName === 'A'){
        clearTimeout(timedId);
        timedId = setTimeout(function(){
            dropdownMenu.classList.remove('open')
        },1);
    }
});

