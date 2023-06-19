const eyeIcon = document.getElementById("toggle-password");
const pwd = document.getElementById("pwd");

eyeIcon.addEventListener('click',(e) =>{
    // e.preventDefault();
    // toggle type attribute
    pwd.type = pwd.type === 'password' ? 'text' : 'password';
    // pwd.setAttribute('type', type);

    //toggle the eye slash icon
    eyeIcon.className = `fa-solid fa-eye${pwd.type === "password" ? "" : "-slash"}`;
});

const reqList = document.querySelectorAll('.require-list li');

// An array of password requirements with corresponding
// RegEx and index of the requirement li
const requirements = [
    // Min 8 characters
    {regex: /.{8,}/ ,index:0},

    // At least 1 number
    {regex: /[0-9]/, index:1},

    // At least 1 lowercase letter 
    {regex: /[a-z]/, index:2},

    // At least 1 special character
    {regex: /[^A-Za-z0-9]/, index:3},

    // At least 1 uppercase letter 
    {regex: /[A-Z]/, index:4}
]

pwd.addEventListener("keyup", (e)=>{
    requirements.forEach(item =>{
        // check if the password matches the requirement RegEx
        const isValid = item.regex.test(e.target.value);
        const reqItem = reqList[item.index];

        // Updating class and icon of requirement item if requirement matched or not
        if(isValid){
            reqItem.classList.add("valid");

            reqItem.firstElementChild.className = "fa-solid fa-check";
        }else{
            reqItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

// const star = document.querySelectorAll(".star");
// const btn = document.querySelector(".btn");
// const usrName = document.getElementById('userName')
// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
    // if((usrName.value === "" && ' ') && (pwd.value === "" && ' ')){
    //     star.style.color = 'red';
    //    }
// });
$('.btn').click(function(){
    $("input[required]").parent("label").closest('.yournamelabel').addClass("required");
})
