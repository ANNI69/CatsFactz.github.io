let generate_btn = document.querySelector('.generate_btn')
let animal_type = document.querySelector('#animal_type')
let num_facts = document.querySelector("#num_facts")


// Get Data from User
generate_btn.addEventListener('click', function () { 
  let animal_value = animal_type.value.toLowerCase()
  
  if (parseInt(num_facts.value) > 500) {
    alert(' Max is 500')
  }
  
  // Fetch Api
  function fetchFacts() {

    fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${animal_value}&amount=1`)
      .then(response => response.text())
      .then(data => {
       let fact = JSON.parse(data).text
       console.log(fact) 
       var para = document.createElement("p");
       para.classList.add('list-group-item')
       para.classList.add('text-dark')
       para.classList.add('p-3')
       var node = document.createTextNode(fact);
       para.appendChild(node);

       let facts = document.querySelector(".facts");
       facts.appendChild(para);
      })
      .catch(err => console.log(err))
  }

  //  Create clear button
       var btn = document.createElement("button");
       btn.innerHTML = 'Clear'
       btn.classList.add("btn")
       btn.classList.add("btn-danger")
       btn.classList.add("clear")
       let head = document.querySelector(".head");
       head.appendChild(btn);

       const clear_btn = document.querySelector('.clear')
       clear_btn.addEventListener('click', function() {
        let facts = document.querySelector(".facts");
        facts.innerHTML = '';
        clear_btn.parentNode.removeChild(clear_btn)
       })


  for(let i=0; i< num_facts.value; i++) {
    fetchFacts()
  }

})
