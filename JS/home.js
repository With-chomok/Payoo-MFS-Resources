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

// trogolling features 

document.getElementById('add-button')
    .addEventListener('click', function(){
        document.getElementById('cash-out-parent').style.display = 'none';
        document.getElementById('transfer-money-parent').style.display = 'none';
        document.getElementById('get-bonus-parent').style.display = 'none';
        document.getElementById('pay-bill-parent').style.display = 'none';
        
        document.getElementById('add-money-parent').style.display = 'block'

 })
        // document.getElementById('transfer-money-parent').style.display = 'block';
        // document.getElementById('get-bonus-parent').style.display = 'block';
        // document.getElementById('pay-bill-parent').style.display = 'block';
   

document.getElementById('cashout-button')
    .addEventListener('click', function(){
        document.getElementById('add-money-parent').style.display = 'none';
        document.getElementById('transfer-money-parent').style.display = 'none';
        document.getElementById('get-bonus-parent').style.display = 'none';
        document.getElementById('pay-bill-parent').style.display = 'none';
        
        document.getElementById('cash-out-parent').style.display = 'block'

 })



 
     