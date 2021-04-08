
function fetchData() {

  let raw = "";

  const requestOptions = {
    method: 'GET',
    body: raw,
    mode: 'no-cors',
  };
  
  fetch("https://questionnaire-148920.appspot.com/swe/data.html", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .then(response => {
    document.getElementById("result").innerHTML = response;
  })
  .catch(error => console.log('error', error));
}

fetchData();


    // const doc = new DOMParser().parseFromString(resText, 'text/html');
    
    // const container = resText.querySelector(".player-salary")

    // const salaryNodes = container.querySelectorAll(".player-salary");
    // const nonDigitsRegex = /[^0-9.-]+/g;
    

    // return salaryNodes
    //   .map(node => node.innerText.replace(nonDigitsRegex, '')) //removing symbols from numbers
    //   .sort((a, b) => Number(b) - Number(a))
    //   .slice(0, 125)
    //   .map(val => '$' + new Intl.NumberFormat('en-IN').format(Number))