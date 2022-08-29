

var submit = document.querySelector("#sub");

submit.addEventListener("click", () => {
	let pinCode = document.getElementById("pincode").value;
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = dd + '-' + mm + '-' + yyyy;
	console.log(today);

fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pinCode}&date=${today}`)
	.then(response => response.json())
	.then(response => {
		currentCovidData = response;
		console.log(currentCovidData);
		
		var html = "<table border='1|1'>";

		html+="<td>"+'Hospital Name'+"</td>";
		    html+="<td>"+'State'+"</td>";
		    html+="<td>"+'Timing'+"</td>";
		    html+="<td>"+'Vaccine'+"</td>";
		    html+="<td>"+'Total Capacity'+"</td>";

		for (var i in currentCovidData.sessions) {
		    html+="<tr>";
		    html+="<td>"+currentCovidData.sessions[i].name+"</td>";
		    html+="<td>"+currentCovidData.sessions[i].state_name+"</td>";
		    html+="<td>"+currentCovidData.sessions[i].from + '-' + currentCovidData.sessions[i].to+"</td>";
		    html+="<td>"+currentCovidData.sessions[i].vaccine+"</td>";
		    html+="<td>"+currentCovidData.sessions[i].available_capacity+"</td>";
		    
		    html+="</tr>";

		}
		html+="</table>";
		document.getElementById("myTable").innerHTML = html;

	})
	.catch(err => console.error(err));
});
