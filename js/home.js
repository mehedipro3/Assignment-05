
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

    if (noakhaliInput > balance) {
      alert('Failed to Donate');
      return;
    }

    const accountNewBalance = balance - noakhaliInput;
    document.getElementById('account-balance').innerText = accountNewBalance;

    const noakhaliNewBalance = noakhaliInput + noakhaliBalance;
    document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;
    
    const p = document.createElement('p');
    p.innerText = `${noakhaliInput} taka is donated for Donate for Flood at Noakhali, Bangladesh`;
    document.getElementById('transaction-container').appendChild(p);
    const p2 = document.createElement('p');
    
    p2.innerText = new Date();
    document.getElementById('transaction-container').appendChild(p2);

    document.getElementById('my_modal_5').showModal();

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

    if (floodInput > balance) {
      alert('Failed to Donate');
      return;
    }

    const accountNewBalance = balance - floodInput;
    document.getElementById('account-balance').innerText = accountNewBalance;

    const floodNewBalance = floodInput + floodBalance;
    document.getElementById('flood-balance').innerText = floodNewBalance;

    const p = document.createElement('p');
    p.innerText = `${floodInput} taka is donated for Donate for Flood Relief in Feni,Bangladesh`;
    document.getElementById('transaction-container').appendChild(p);

    const p2 = document.createElement('p');
    p2.innerText = new Date();
    document.getElementById('transaction-container').appendChild(p2);

    document.getElementById('my_modal_5').showModal();

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

    if (quotaInput > balance) {
      alert('Failed to Donate');
      return;
    }

    const accountNewBalance = balance - quotaInput;
    document.getElementById('account-balance').innerText = accountNewBalance;

    const quotaNewBalance = quotaInput + quotaBalance;
    document.getElementById('quota-balance').innerText = quotaNewBalance;



    const p = document.createElement('p');
    p.innerText = `${quotaInput} taka is donated for Aid for Injured in the Quota Movement`;
    document.getElementById('transaction-container').appendChild(p);

    const p2 = document.createElement('p');
    p2.innerText = new Date();
    document.getElementById('transaction-container').appendChild(p2);

    document.getElementById('my_modal_5').showModal();

  });








  