function handleSubmit(event) {
    event.preventDefault()
    
    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })

    retrieveData();

}

//retrieve all the data
const retrieveData = async () =>{ 
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=quito&appid=ea3ab8e55606cf6bd6983f2eaf2387aa';
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  console.log(allData);
  document.getElementById('results').innerHTML = allData.id
  return allData;
  }
  catch(error) {
    console.log("error", error);
  }
};

export { handleSubmit }
