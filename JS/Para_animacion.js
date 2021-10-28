// Creo el observer DOWN
const observer = new IntersectionObserver(entries => { 
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('entrada--abajo');
             console.log(entry.isIntersecting);
             return;
        }
    });
});
  
  document.querySelectorAll('.DOWN').forEach((el)=>{
      observer.observe(el);
  })

// Creo el observer UP
const observer2 = new IntersectionObserver(entries => { 
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('entrada--arriba');
            console.log("te vi");
            return;
       }
   });
});
 
 document.querySelectorAll('.UP').forEach((el)=>{
     observer2.observe(el);
 })