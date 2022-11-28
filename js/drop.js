// js

document.getElementById('danger').textContent = "";

$('[type="file"]').ezdz({
  
  text: 'drop a picture.',
  
  validators: {
    maxWidth: 1024,
    maxHeight: 1024
  },
  
  reject: function(file, errors) {
    
    if (errors.mimeType) {
     // alert(file.name + ' harus berupa gambar');
        document.getElementById('warning').textContent = "Harus berupa gambar!";

    }
      
    if (errors.maxWidth) {
      alert(file.name + ' harus lebar:1024px max');        
    }

    if (errors.maxHeight) {
      alert(file.name + ' harus tinggi:1024px max');        
    }
    
  }
});
