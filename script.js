//DOM
//Fundamentals
// communication with the server

//bring data from the database
    //identift where i will be placing the data
        //select it by id
//fetch the data 
    //convert to readble format => json
//display
    //loop through the data
    //created a div for each piece of data we have
    //add data from the div for each item
    //append the data


let entry_list = document.getElementById('entries');
let dataUrl = 'http://localhost:3000/diaryEntries'
//Get
fetch (dataUrl)
.then (response => response.json())
.then (data => displayScreen(data))

//display screen function 
let displayScreen = (data) => {
    data.map(i => {
        let entry = document.createElement('div');
        entry.innerHTML = `
            <h3>Title : ${i.title}</h3>
            <h6>Date : ${i.date}</h6>
            <p>${i.content}</p>     
        `
        console.log(entry)
        entry_list.appendChild(entry)

    })
}