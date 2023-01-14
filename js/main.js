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
                        });
                        form.reset();
                        saveGuide();
                    } else if (result.isDenied){
                        Swal.fire({
                            icon: 'error',
                            title: 'No se guardo la guia'
                        })
                        form.reset();
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
});

//crea el objeto assignedGuide a los que les asigna el valor de lo obtenido en el form
function saveGuide(){
    function assignedGuide(delivery,numberGuide){
        this.delivery=delivery;
        this.numberGuide=numberGuide;
    }
    let delivery = document.getElementById('selectDelivery').value;
    let guide = document.getElementById('numberGuide').value;

    newGuide = new assignedGuide(delivery,guide)

    //llama a la funcion que crea el array de objetos
    createArrayObj(newGuide);
}

function createArrayObj(newGuide){
    //crea un array que evalua si ya existe un array en el localstorage sino crea uno nuevo
    let guideList = JSON.parse(localStorage.getItem("guideList")) || [];
    //hace un push al array
    guideList.push(newGuide);
    localStorage.guideList =  JSON.stringify(guideList);

    //cuenta los datos del array y los utiliza para el contador.
    localStorage.counter = parseInt(guideList.length);
    document.querySelector('.count').textContent = parseInt(localStorage.counter);
}

//crea la escucha para el nboton de reinicio
const restartButton = document.querySelector('.btn-restart');
restartButton.addEventListener('click', deleteLocalStorage); 

//borra las variables en el localStorage, array y contador.
function deleteLocalStorage(){
    localStorage.clear();
    //actualiza el contador
    document.querySelector('.count').textContent = parseInt(localStorage.counter);
}

//crea el evento para el boton de la descarga.
const downloadButton = document.querySelector('.btn-download');
downloadButton.addEventListener('click', generateNameFile);

//genera el nombre del archivo
function generateNameFile(){
    let date = new Date();
    let dateNotFormat = date.toLocaleDateString();
    let dateFormat = dateNotFormat.replaceAll('/','')
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let nameFile = 'ASIGNACION_' + dateFormat + hours + minutes + seconds;
    let content = JSON.stringify(localStorage.getItem('guideList'));
    //llama a la funcion que crea el archivo
    createFile(content,nameFile);
}

//crea el archivo creando un blob.
function createFile(content,name){
    const a = document.createElement("a");
        const archivo = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(archivo);
        a.href = url;
        a.download = name;
        a.click();
        URL.revokeObjectURL(url);
}

