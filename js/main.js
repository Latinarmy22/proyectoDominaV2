//se asegura de cargar la pagina para luego llamar a la funcion que llena el select.
window.addEventListener('load', function() {
    addOptionsToSelect();   
}); 

function addOptionsToSelect(selectDelivery){
    const deliverys = ["Daniel Hernandez Agredo", "Sergio Perez" , "Carlos Menchaca", "Luna Uribe"];
    let select = document.getElementById('selectDelivery');

    for(i=1;i<=deliverys.length;i++){
        select.options[i] = new Option(deliverys[i-1]);
    }
}

let form = document.getElementById('formGuide');

form.addEventListener('submit',function(e){
    e.preventDefault();

    let data = new FormData(form);

    fetch('validation.php',{
        method: 'POST',
        body: data
    })
        .then( res => res.json())
        .then( data => {
            if(data === 'proccess'){
                Swal.fire({
                    icon: 'question',
                    title: 'Quieres asignar esta guia?',
                    showDenyButton: true,
                    confirmButtonText: 'Guardar',
                    denyButtonText: 'No guardar'
                }).then((result) => {
                    if (result.isConfirmed){
                        Swal.fire({
                            icon:'success',
                            title:'Guia guardada'
                        })
                    } else if (result.isDenied){
                        Swal.fire({
                            icon: 'error',
                            title: 'No se guardo la guia'
                        })
                    }
                })
            } else if (data === 'error'){
                Swal.fire({
                    icon: 'error',
                    title: 'Error en las validaciones',
                    text: 'Por favor verifica los datos de entrada'
                })
            }
        });
})
