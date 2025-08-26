// login button functionality 

document.getElementById('btn-login')
    .addEventListener('click', function (){
        const mobileNumber = 88017123456789 ;
        const pinNumber = 1234;


        const mobileNumberValue = document.getElementById('mobile-number').value
        const mobileNumberValueConverted = parseInt(mobileNumberValue);

        const pinNumberValue = document.getElementById('pin-number').value;
        const pinNumberValueConverted = parseInt(pinNumberValue);

        
        // console.log(typeof mobileNumberValueConverted,typeof pinNumberValueConverted);
        if(isNaN(mobileNumberValueConverted) || isNaN(pinNumberValueConverted) ){
            alert("Empty credential")
            return
        }
        if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber ){
            window.location.href = '../html/home.html'
            
        }else{
           alert('Invalid Credential')
            
        }
    })