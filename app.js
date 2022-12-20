// nombre_del_alumno
//Alberto Fernandez Baena
// Completar JS aqui
window.addEventListener("load", function () {

    document.querySelector('button.new_client').addEventListener('click', function(){
        document.querySelector('#new_client').classList.remove('display_none');
    });
    document.querySelector('button.close').addEventListener('click', function(){
        document.querySelector('#new_client').classList.add('display_none');
    });

});