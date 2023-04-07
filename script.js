



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    for (let i = 1; i < 6; i++) {
      tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    
    }

  verifFunc(tableauResultats)

  // console.log(tableauResultats)
  tableauResultats = []
    
})
