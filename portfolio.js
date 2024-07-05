const name1 = document.getElementById("name");
const email1 = document.getElementById("email");
const mobile1 = document.getElementById("mobile");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

function submit(event) {
    if (name1.value === "") {
        label1.textContent = "*please enter name*";
        label1.style.color = "red";
        label1.style.fontSize = "1.1rem";
    } else {
        label1.textContent = ""; // Clear error message if name is entered
    }

    if (email1.value === "") {
        label2.textContent = "*please enter email*";
        label2.style.color = "red";
        label2.style.fontSize = "1.1rem";
    } else {
        label2.textContent = ""; // Clear error message if email is entered
    }

    if (mobile1.value === "") {
        label3.textContent = "*please enter mobile no.*";
        label3.style.color = "red";
        label3.style.fontSize = "1.1rem";
    } else {
        label3.textContent = ""; // Clear error message if mobile number is entered
    }

    // Check if all fields are filled
    if (name1.value !== "" && email1.value !== "" && mobile1.value !== "") {
       const thankyou=document.getElementById("Thank");
       thankyou.classList.add("thankyou")
       thankyou.style.color="green"
    //    thankyou.style.fontSize="2rem"
       thankyou.textContent="Thank you for your concern✅"
      
      

    }

    // event.preventDefault(); // Prevent default form submission
}