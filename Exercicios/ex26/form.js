document.getElementById('telefone').addEventListener('input', function(e) {
    var telefone = e.target.value.replace(/\D/g, '');
    if (telefone.length === 11) {
      telefone = telefone.replace(/^([0-9]{2})([0-9]{9})$/, '($1) $2');
    }
    e.target.value = telefone;
   });