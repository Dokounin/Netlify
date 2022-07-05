document.getElementById("nav-toggle").onclick = function () {
  document.getElementById("nav-content").classList.toggle("hidden");
};

document.getElementById("cross").onclick = function () {
  document.getElementById("nav-content").classList.toggle("hidden");
};



// De que on appui sur la buuton 'Nous contacter' ça affiche forme 
function formVisibility() {
  if (document.getElementById("form").style.display == "none") {
    document.getElementById("form").style.display = "block";
  } else if (document.getElementById("form").style.display == "block") {
    document.getElementById("form").style.display = "none";
  }
}


function searchVisibility() {
  if (document.getElementById("nav").style.display != "none") {
    document.getElementById("nav").style.display = "none";
    document.getElementById("search").style.display = "block";
  } else {
    document.getElementById("nav").style.display = "block";
    document.getElementById("search").style.display = "none";
  }
}



function ChangeImageNavBar() {
  if (document.getElementById("nav-toggle").style.display != "none") {
    document.getElementById("nav-toggle").style.display = "none";
    document.getElementById("cross").style.display = "block";
  } else {
    document.getElementById("nav-toggle").style.display = "block";
    document.getElementById("cross").style.display = "none";
  }
}

// //! Validation de form
// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("form");
//   form.addEventListener("submit", formSend);

//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form);

//     let formData = new FormData(form);

//     if (error === 0) {
//       form.classList.add("_sending");
//       let response = await fetch("sendmail.php", {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         let result = await response.json();
//         alert(result.message);
//         form.reset();
//         form.classList.remove("_sending");
//       } else {
//         alert("Error");
//         form.classList.remove("_sending");
//       }
//     } else {
//       alert("remplissez les champs obligatoires");
//     }
//   }

//   function formValidate(form) {
//     let error = 0;
//     let formReq = document.querySelector("._req");

//     for (let index = 0; index < formReq.length; index++) {
//       const input = formReq[index];
//       formRemoveError(input);

//       if (input.classList.contains("_email")) {
//         if (emailTest(input)) {
//           formAddError(input);
//           error++;
//         }
//       } else if (
//         input.getAttribute("type") === "checkbox" &&
//         input.cheked === false
//       ) {
//         formAddError(input);
//         error++;
//       } else {
//         if (input.value === "") {
//           formAddError(input);
//           error++;
//         }
//       }
//     }
//     return error;
//   }
//   function formAddError(input) {
//     input.parentElement.classList.add("_error");
//     input.classList.add("_error");
//   }
//   function formRemoveError(input) {
//     input.parentElement.classList.remove("_error");
//     input.classList.remove("_error");
//   }
//   // fonction de test email
//   function emailTest(input) {
//     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//   }
// });
