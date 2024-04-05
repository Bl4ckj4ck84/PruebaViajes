// Crear un objeto de ScrollSpy para el body, con el target especificado
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar-example",  // El elemento al que se hará scroll
  });
  
  // Obtener una lista de todos los elementos con data-bs-toggle="tooltip"
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  
  // Crear una instancia de Tooltip para cada elemento de la lista
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Obtener el botón con el id "enviarCorreo"
  let enviarCorreoBtn = document.getElementById("enviarCorreo");
  
  // Agregar un evento "click" al botón "enviarCorreo"
  $('#enviarCorreo').on('click', function () {
    // Mostrar una alerta cuando se haga clic en el botón
    alert('El mensaje fue enviado correctamente...');
  });
  