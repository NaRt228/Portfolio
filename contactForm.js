//   https://script.google.com/macros/s/AKfycbyeHZVm5H6rq33IcbxZGa19DslbnhCNQiXqDd0D22gF7zlwtPfQz-jbLNfNDuMO46sG/exec


const scriptURL = 'https://script.google.com/macros/s/AKfycbyuHmivnorMWfLBcvU90SC8t0i7hCcr7DopWx6F3XIq2bFkCUrr1R9yQXPNtJ7pvG9T/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message has sent successfully!"
        setTimeout(function(){
            msg.innerHTML = "";
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
