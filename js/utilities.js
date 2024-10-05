function getInputFieldById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldById(id){
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

// function getModalBoxById(id){
//   const showModal = noakhali-btn.showModal();
//   //const showModal = document.createElement();


//   showModal.innerHTML = `
//   <dialog id="my_modal_1" class="modal">
//               <div class="modal-box w-11/12 max-w-5xl">
//                 <h3 class="text-lg font-bold">Hello!</h3>
//                 <p class="py-4">Click the button below to close</p>
//                 <div class="modal-action">
//                   <form method="dialog">
//                     <!-- if there is a button, it will close the modal -->
//                     <button class="btn">Close</button>
//                   </form>
//                 </div>
//               </div>
//             </dialog>

//       `       
//  }


function showSectionById(id){
  // hide all the sections
  document.getElementById('transactions-section').classList.add('hidden');
  document.getElementById('donation-part').classList.add('hidden');
  
  // show the section with the provide id as parameter
  document.getElementById(id).classList.remove('hidden');
}