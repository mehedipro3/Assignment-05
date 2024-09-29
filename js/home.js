
// Noakhali-Balance task //

document.getElementById('noakhali-btn')
  .addEventListener('click', function () {
    const noakhaliInput = getInputFieldById('noakhali-donate-input');
    if (isNaN(noakhaliInput) || noakhaliInput < 0) {
      alert('Failed to Donate');
      return;
    }
    const balance = getTextFieldById('account-balance');
    const noakhaliBalance = getTextFieldById('noakhali-balance');

    const accountNewBalance = balance - noakhaliInput;
    document.getElementById('account-balance').innerText = accountNewBalance;

    const noakhaliNewBalance = noakhaliInput + noakhaliBalance;
    document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;

    const p = document.createElement('p');
    p.innerText = `${noakhaliInput} taka is donated for Donate for Flood at Noakhali, Bangladesh`;
    document.getElementById('transaction-container').appendChild(p);
    
    const d = new Date();
    document.getElementById('transaction-container').innerHTML = d;

  });

// Flood-Balance task //

document.getElementById('flood-btn')
  .addEventListener('click', function () {
    const floodInput = getInputFieldById('flood-donate-input');
    if (isNaN(floodInput) || floodInput < 0) {
      alert('Failed to Donate');
      return;
    }
    const balance = getTextFieldById('account-balance');
    const floodBalance = getTextFieldById('flood-balance');

    const accountNewBalance = balance - floodInput;
    document.getElementById('account-balance').innerText = accountNewBalance;

    const floodNewBalance = floodInput + floodBalance;
    document.getElementById('flood-balance').innerText = floodNewBalance;

    const p = document.createElement('p');
    p.innerText = `${floodInput} taka is donated for Donate for Flood Relief in Feni,Bangladesh`;

    const d = new Date();
    document.getElementById('transaction-container').innerHTML = d;
    document.getElementById('transaction-container').appendChild(p);
  });



// Quota-Balance task //

document.getElementById('quota-btn')
  .addEventListener('click', function () {
    const quotaInput = getInputFieldById('quota-donate-input');
    if (isNaN(quotaInput) || quotaInput < 0) {
      alert('Failed to Donate');
      return;
    }
    const balance = getTextFieldById('account-balance');
    const quotaBalance = getTextFieldById('quota-balance');

    const accountNewBalance = balance - quotaInput;
    document.getElementById('account-balance').innerText = accountNewBalance;

    const quotaNewBalance = quotaInput + quotaBalance;
    document.getElementById('quota-balance').innerText = quotaNewBalance;



    const p = document.createElement('p');
    p.innerText = `${quotaInput} taka is donated for Aid for Injured in the Quota Movement`;

    const d = new Date();
    document.getElementById('transaction-container').innerHTML = d;
    document.getElementById('transaction-container').appendChild(p);
  });
