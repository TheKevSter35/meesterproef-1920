// Upload image input
let inputImageUpload    = document.querySelector('#uploadFotoInput');

// On image upload
inputImageUpload.addEventListener('input', function () {

    if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
        alert(e.target.result);
      document.getElementById('blah').src=e.target.result;
    }

    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }

});

