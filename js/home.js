
            // noakhaliBalance task //

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