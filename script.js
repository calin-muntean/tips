document.getElementById('calculate-btn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('nota').value);
    let tipPercentage;
    const selectedTip = document.querySelector('input[name="tip"]:checked').value;
  
    if (selectedTip === "custom") {
      tipPercentage = parseFloat(document.getElementById('custom-tip').value);
    } else {
      tipPercentage = parseFloat(selectedTip);
    }
  
    if (isNaN(billAmount) || billAmount <= 0) {
      alert("Vă rugăm să introduceți o valoare validă pentru nota de plată.");
      return;
    }
  
    if (isNaN(tipPercentage) || tipPercentage < 0) {
      alert("Vă rugăm să introduceți un procent valid de bacșiș.");
      return;
    }
  
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
  
    document.getElementById('initial-amount').querySelector('span').textContent = billAmount.toFixed(2);
    document.getElementById('tip-amount').querySelector('span').textContent = tipAmount.toFixed(2);
    document.getElementById('total-amount').querySelector('span').textContent = totalAmount.toFixed(2);
  });
  
  document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('nota').value = '';
    document.getElementById('custom-tip').value = '';
    document.getElementById('no-tip').checked = true;
    document.getElementById('initial-amount').querySelector('span').textContent = '0';
    document.getElementById('tip-amount').querySelector('span').textContent = '0';
    document.getElementById('total-amount').querySelector('span').textContent = '0';
  });
  