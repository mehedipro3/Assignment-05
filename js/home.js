
            // Noakhali-Balance task //

document.getElementById('noakhali-btn')
  .addEventListener('click', function() {
    const noakhaliInput = getInputFieldById('noakhali-donate-input');
    if (isNaN(noakhaliInput)) {
     alert('Failed to Donate');
     return;
   }
   const balance = getTextFieldById('account-balance');
   const noakhaliBalance = getTextFieldById('noakhali-balance');
   
   const accountNewBalance = balance - noakhaliInput ;
   document.getElementById('account-balance').innerText = accountNewBalance ;
   
   const noakhaliNewBalance = noakhaliInput + noakhaliBalance ;
   document.getElementById('noakhali-balance').innerText = noakhaliNewBalance ;
  });

            // Flood-Balance task //

document.getElementById('flood-btn')
  .addEventListener('click', function() {
    const floodInput = getInputFieldById('flood-donate-input');
    if (isNaN(floodInput)) {
     alert('Failed to Donate');
     return;
   }
   const balance = getTextFieldById('account-balance');
   const floodBalance = getTextFieldById('flood-balance');
   
   const accountNewBalance = balance - floodInput ;
   document.getElementById('account-balance').innerText = accountNewBalance ;
   
   const floodNewBalance = floodInput + floodBalance ;
   document.getElementById('flood-balance').innerText = floodNewBalance ;
  });


  
            // Quota-Balance task //

document.getElementById('quota-btn')
.addEventListener('click', function() {
  const quotaInput = getInputFieldById('quota-donate-input');
  if (isNaN(quotaInput)) {
   alert('Failed to Donate');
   return;
 }
 const balance = getTextFieldById('account-balance');
 const quotaBalance = getTextFieldById('quota-balance');
 
 const accountNewBalance = balance - quotaInput ;
 document.getElementById('account-balance').innerText = accountNewBalance ;
 
 const quotaNewBalance = quotaInput + quotaBalance ;
 document.getElementById('quota-balance').innerText = quotaNewBalance ;
});
