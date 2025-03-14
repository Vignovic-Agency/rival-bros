document.addEventListener('DOMContentLoaded', function () { 
  console.log('focal')
  var images = document.querySelectorAll('.focal-point-image'); 
  console.log(images)
  images.forEach(function (image) { 
    var focalX = parseFloat(image.getAttribute('data-focal-x')) || 0.5; 
    var focalY = parseFloat(image.getAttribute('data-focal-y')) || 0.5; 
    image.style.objectPosition = (focalX * 100) + '% ' + (focalY * 100) + '%'; 
    console.log('image')
  }); 
});