document.getElementById('add-money-btn')
    .addEventListener('click', function(e){
        e.preventDefault();
        
        const bank = document.getElementById('bank').value 
        const accountNumber = document.getElementById('bank-account').value 
        const addAmount = parseInt(document.getElementById('add-amount').value) 
        const addPin = document.getElementById('add-pin').value 
        // console.log(bank, accountNumber, addAmount, addPin);
        
      
        const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    
        const totalBalance = addAmount + availableBalance;
        document.getElementById('available-balance').innerText = totalBalance
    })





