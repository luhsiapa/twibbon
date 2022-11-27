// js


$('[type="file"]').ezdz({
  
  text: 'Drop files here.',
  
  validators: {
    maxWidth: 1080,
    maxHeight: 1080
  },
  
  reject: function(file, errors) {
    
    if (errors.mimeType) {
      alert(file.name + ' harus berupa gambar');
    }
      
    if (errors.maxWidth) {
      alert(file.name + ' harus lebar:1024px max');
    }

    if (errors.maxHeight) {
      alert(file.name + ' harus tinggi:1024px max');
    }
    
  }
});
