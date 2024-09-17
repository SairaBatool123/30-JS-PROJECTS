const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const emailAddress = document.querySelector("#emailAddress");
const verifyEmail = document.querySelector("#verifyEmail");
const inputs = document.querySelectorAll(".opt-group input")
const nextButton = document.querySelector(".nextButton")
const verifyButton = document.querySelector(".verifyButton")

window.addEventListener("load", () => {
    // alert("i")
    emailjs.init("tkfLrzue3lY743XPf")

    container2.style.display = "none";
    container3.style.display = "none";
    nextButton.classList.add("disable")
    verifyButton.classList.add("disable")


})

const validateEmail = (email) => {
    let re = /\S+@\S+\.\S=/;
    if (re.test(email)) {
        nextButton.classList.remove("disable")

    } else {
        nextButton.classList.add("disable")

    }
}

nextButton = ("click",()=>{
    const serviceID ="service_kpv8q6f"
    const templateID = "template_nx2kxie"
emailjs.send(serviceID,templateID)
})
// console.log(inputs);
