//Defino valor de la entrada y de los descuentos

var valorTicket=200;
let dtoEstudiante=0.8;
let dtoTrainee=0.5;
let dtoJunior=0.15;


//capturar en variables los datos

    let nombre=document.getElementById("nombre");
    let apellido=document.getElementById("apellido");
    let email=document.getElementById("email");
    let cantidadTickets=document.getElementById("cant");
    var categoria=document.getElementById("tipo");
    let boton = document.getElementById("boton");
  
  function total_a_pagar()
    {
        quitarClaseError();

        if(nombre.value==="")
        {
            alert("Escribir nombre...");
            nombre.classList.add("is-invalid");
            nombre.focus();
            return ;
        }
    
        if(apellido.value==="")
        {
            alert("Escribir apellido...");
            apellido.classList.add("is-invalid");
            apellido.focus();
            return ;
        }
        
        if(email.value==="")
        {
            alert("Escribir email...");
            email.classList.add("is-invalid");
            email.focus();
            return ;
        }
                   
    
        if( (cantidadTickets.value<=0) || (isNaN(cantidadTickets.value)))
        {
            alert("Elegir cantidad de tickets");
            cantidadTickets.classList.add("is-invalid");
            cantidadTickets.focus();
            return ;
        }
    
      
    
           
        let totalValorTickets=(cantidadTickets.value)*valorTicket;
    
        if(categoria.value==0)
        {
            totalValorTickets=totalValorTickets;
        }
        if(categoria.value==1)
        {
            totalValorTickets=totalValorTickets-(dtoEstudiante*totalValorTickets);
        }
        if(categoria.value==2)
        {
            totalValorTickets=totalValorTickets-(dtoJunior*totalValorTickets);
        }
        if(categoria.value==3)
        {
            totalValorTickets=totalValorTickets-(dtoTrainee*totalValorTickets);
        }
        pagar.innerHTML=totalValorTickets;
        
    } 

    function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}


function reset_total_a_pagar()
{
    document.getElementById("ticket").reset();
    pagar.innerHTML="";
}
    
    btnResumen.addEventListener('click',total_a_pagar)
    
    btnBorrar.addEventListener("click",reset_total_a_pagar);