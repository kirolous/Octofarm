	getPrinterInfo();
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
		var tabBody = document.getElementsByTagName("tbody").item(0);
		row0=document.createElement("tr");
		
			PrinterNamecell = document.createElement("td");
			URLcell = document.createElement("td");
			
			textnodename=document.createTextNode("Printer Name");  			
         	textnodeurl=document.createTextNode("URL"); 					
			
			PrinterNamecell.appendChild(textnodename);
        	URLcell.appendChild(textnodeurl);
			
			row0.appendChild(PrinterNamecell);
         	row0.appendChild(URLcell);
			tabBody.appendChild(row0);
			
			
			for(i=0; i<time.length; i++){
				
				row=document.createElement("tr");
         		
				cell1 = document.createElement("td");
         		cell2 = document.createElement("td");
				cell3 = document.createElement("td");
				
				textnode1=document.createTextNode(time[i].Printer_Name);
				textnode2=document.createTextNode(time[i].Printer_URL);
				textnode3=document.createTextNode("Select");
				
				cell1.appendChild(textnode1);
				cell2.appendChild(textnode2);
				
				var a = document.createElement("a");
				a.click = SetVar(time[i].Printer_URL,time[i].Printer_APIKey);
				a.href = "/nwhtmls/filestab";
				a.appendChild(document.createTextNode("Select"));
			
				
				row.appendChild(cell1);
				row.appendChild(cell2);
				row.appendChild(a);
				
				tabBody.appendChild(row);
			}
	}
	
	function SetVar(URL,API){
		var BASEURL = URL;
		var X_API_KEY = API;
	}