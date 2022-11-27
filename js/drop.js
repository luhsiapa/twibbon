// js


$('[type="file"]').ezdz({
  
  text: 'Drop files here.',
  
  validators: {
    maxWidth: 1024,
    maxHeight: 1024
  },
  
  reject: function(file, errors) {
    
    if (errors.mimeType) {
      alert(file.name + ' must be an image');
    }
      
    if (errors.maxWidth) {
      alert(file.name + ' must be width:1024px max');
    }

    if (errors.maxHeight) {
      alert(file.name + ' must be height:1024px max');
    }
    
  }
});
