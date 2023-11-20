//   https://script.google.com/macros/s/AKfycbyeHZVm5H6rq33IcbxZGa19DslbnhCNQiXqDd0D22gF7zlwtPfQz-jbLNfNDuMO46sG/exec


const scriptURL = 'https://script.google.com/macros/s/AKfycbwgckHKw91Otno5-4myG2kIy8-AhxbXxgOi_FVX5tdGWHhEGpi8Tj2a3N0Kvu95q91CRw/exec'
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
