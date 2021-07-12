const myMap = L.map('mapArea').setView([34.0709, -118.444], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// create a function to add markers
function addMarker(lat,lng,title,message,zoom){
    console.log(message)
    L.marker([lat,lng]).addTo(myMap).bindPopup(`<h2>${title}</h2>`)
    createButtons(lat,lng,title,zoom); // new line!!!
    return message
}

// create a function to add buttons with a fly to command
function createButtons(lat,lng,title,zoom){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('mouseover', function(){
        myMap.flyTo([lat,lng],zoom); 
    })
    document.body.appendChild(newButton); //this adds the button to our page.
} 

// use our marker functions
addMarker(49.895, -97.138,'Grandma', 'Canada')
addMarker(41.878,-87.629,'Mommy','Chicago')
addMarker(34.697,-118.144,'Brother','Lancaster')
addMarker(33.835,-118.340,'Me (Liz)','Torrance')

