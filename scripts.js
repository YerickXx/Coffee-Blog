//variables
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const mensajeInput = document.querySelector('#mensaje')
const form =  document.querySelector('.formulario')
const data = {
    name:'',
    email:'',
    mensaje:''
};

//Events
nameInput.addEventListener('input',leerTexto)
emailInput.addEventListener('input',leerTexto)
mensajeInput.addEventListener('input',leerTexto)
form.addEventListener('submit', Validation)


//functions

function Validation(e){
    e.preventDefault();
    const{name,email,mensaje} = data;
    if(name ===''|| email === '' || mensaje === ''){
        const wrong_form = new Notification(alert("Your form is incomplete!"))
        console.log(wrong_form,Alert("Your form is incomplete!"),true);
        return;
    }

    const success_form = new Notification(alert("Success!"));
    console.log(success_form,Alert("your form was sent!"));
    return;

}

function leerTexto(e){
    data[e.target.id] = e.target.value;
    console.log(data)
}

function Alert(mensaje,error=null){
    const alerts = document.createElement('P')
    alerts.textContent=mensaje;

    if(error){
        alerts.classList.add('wrong')
    }
    else{
        alerts.classList.add('success')
    }

    form.appendChild(alerts)

    setTimeout(() => {
        alerts.remove()
    }, 3000);

}


