// let url =
// let promise =  fetch(url)

// let classes =  Response.formData();

// console.log(classes);


fetch('https://www.dnd5eapi.co/api/classes/bard')
  .then((response) => {
    return response.json();
  })
 .then((data) => {
  let bard = data;
  console.log(bard);
 });