const myMap = L.map('mapArea').setView([34.0709, -118.444], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

function addMarker(data){
    // console.log(data)
    // these are the names of our fields in the google sheets
    L.marker([data.lat,data.lng]).addTo(myMap).bindPopup(`<h3>Fluent English: ${data.doyouspeakenglishfluently}</h3>`+ `<h3>Location: ${data.location}</h3>`+ `<h3>Previous Title IX Knowledge:${data.didyouknowuclahasatitleixoffice}</h3>`)
    return data.location
 }


let url = "https://spreadsheets.google.com/feeds/list/1OQl-LHXk1y1bA33bpsDj1bdu71Nqkny_5VOdNqPWciE/of9zpxw/public/values?alt=json"

fetch(url)
	.then(response => {
		return response.json();
		})
    .then(data =>{
        // console.log(data)
        processData(data)
    }
)

function processData(theData){
    const formattedData = [] 
    const rows = theData.feed.entry
    for(const row of rows) {
      const formattedRow = {}
      for(const key in row) {
        if(key.startsWith("gsx$")) {
              formattedRow[key.replace("gsx$", "")] = row[key].$t
        }
      }
      formattedData.push(formattedRow)
    }
    console.log(formattedData)
    formattedData.forEach(addMarker)   
   
}