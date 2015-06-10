	getPrinterInfo();
	var JSONObj = {};
	var JSONObj = new Object();
	function getPrinterInfo() {
                var request = new XMLHttpRequest(); 
                var url = "/static/php/logindb.php";
		  var connectedflag = 0;
             	request.open("GET", url, true);	
				request.onreadystatechange = function(){
					if(request.readyState == 4 && request.status==200)
					{
						showTable(request.responseText);
					}
				}
				request.send();} 
	

				
	function showTable(response)
	{
		
		var time = JSON.parse(response);
		var tabBody = document.getElementsByTagName("select").item(0);	
			for(i=0; i<time.length; i++){
				cell1 = document.createElement("option");
				textnode1=document.createTextNode(time[i].Printer_Name);
				cell1.appendChild(textnode1);
				tabBody.appendChild(cell1);
			}
			var button = document.getElementsByTagName("button").item(0);
	button.onclick = function(){
				var JSONObj = { "Printer_URL":time[tabBody.selectedIndex].Printer_URL, "API":time[tabBody.selectedIndex].Printer_APIKey};
				$.post("/static/php/selected_printer.php", {json : JSON.stringify(JSONObj)});
				window.location.href = "/nwhtmls/thankyou.html";
	}
			
		
	}
	function SetVar(URL,API){
		document.write(URL);

	//	var BASEURL = URL+ "/";
		//var X_API_KEY = API;
	}