
let covidData;

let currentCovidData;

let load = document.getElementById("load");
	
var table = document.getElementById("myTable");

const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
		'X-RapidAPI-Key': '9cec7dbf46mshb803b7882e73240p1022d2jsn79cebec91a13'
	}
};

fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/India/IND', options1)
	.then(response => response.json())
	.then(response => {
		currentCovidData = response;
		console.log(currentCovidData[0].ActiveCases)
		document.getElementById("ActiveCases").innerText = currentCovidData[0].ActiveCases;
		document.getElementById("TotalCases").innerText = currentCovidData[0].TotalCases;
		document.getElementById("NewCases").innerText = currentCovidData[0].NewCases;
	})
	.catch(err => console.error(err));


const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
		'X-RapidAPI-Key': '9cec7dbf46mshb803b7882e73240p1022d2jsn79cebec91a13'
	}
};

fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/api-covid-data/reports/IND', options2)
	.then(response => response.json())
	.then(response => {
		covidData = response;
		var html = "<table border='1|1'>";

		html+="<td>"+'No.'+"</td>";
		    html+="<td>"+'State'+"</td>";
		    html+="<td>"+'Active Cases'+"</td>";
		    html+="<td>"+'Total Deaths'+"</td>";
		    html+="<td>"+'Confirmed'+"</td>";

		for (var i = 0; i < covidData.length; i++) {
		    html+="<tr>";
		    html+="<td>"+(i+1)+"</td>";
		    html+="<td>"+covidData[i].province+"</td>";
		    html+="<td>"+covidData[i].active+"</td>";
		    html+="<td>"+covidData[i].deaths+"</td>";
		    html+="<td>"+covidData[i].confirmed+"</td>";
		    
		    html+="</tr>";

		}
html+="</table>";
document.getElementById("myTable").innerHTML = html;
	document.getElementById("load").style.visibility="hidden";
	})
	.catch(err => console.error(err));
