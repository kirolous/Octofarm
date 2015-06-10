	getServerTime();
	function getServerTime() {
                var request = new XMLHttpRequest(); 
                var url = "http://99.230.120.96/api/files";
				var api = "767DABB893EB46D8845F34A10E4DB0F7";
		var connectedflag = 0;
             	request.open("GET", url, true);	
                request.setRequestHeader('X-Api-Key', api);
		request.onreadystatechange = function(){
			if(request.readyState == 4 &&request.status==200)
			{
				showTable(request.responseText);
			}
		}


		request.send();} 
		function showTable(response) 
		{
			var time = JSON.parse(response); // Parsing the JSON value from the response
         	var tabBody = document.getElementsByTagName("tbody").item(0);
			var download = "download";
			
			
			row0=document.createElement("tr");
				
			// Creating the column titles for the table
			namecell = document.createElement("td");
			datecell = document.createElement("td");
			volumecell = document.createElement("td");
			lengthcell = document.createElement("td");
			sizecell = document.createElement("td");
			timecell = document.createElement("td");

				
				
			textnodename=document.createTextNode("File Name");  			// File name Column
         	textnodedate=document.createTextNode("Date"); 					// Date Column
			textnodevolume=document.createTextNode("Volume");				// Volume Column
			textnodelength=document.createTextNode("Length");				// Length Column
			textnodesize=document.createTextNode("size");					// Size Column
			textnodetime=document.createTextNode("Estimated Print Time"); 	// Estimated Print Time Column 					

			
			namecell.appendChild(textnodename);
        	datecell.appendChild(textnodedate);
			volumecell.appendChild(textnodevolume);
			lengthcell.appendChild(textnodelength);
			sizecell.appendChild(textnodesize);
			timecell.appendChild(textnodetime);

				
         	row0.appendChild(namecell);
         	row0.appendChild(datecell);
			row0.appendChild(volumecell);
			row0.appendChild(lengthcell);
			row0.appendChild(sizecell);
			row0.appendChild(timecell);

			
			tabBody.appendChild(row0);

			//Populating the table with the files information taken from
			//The URL Stated Above.
			for(i=0; i<time.files.length; i++){
				
				row=document.createElement("tr");
         		
				cell1 = document.createElement("td");
         		cell2 = document.createElement("td");
				cell4 = document.createElement("td");
				cell5 = document.createElement("td");
				cell6 = document.createElement("td");
				cell7 = document.createElement("td");
				cell8 = document.createElement("td");

			
         		textnode1=document.createTextNode(time.files[i].name);		// Gets the Name of the File
				
				var date = new Date(time.files[i].date*1000);				// Convert the Unix Times-stamp to the normal date
         		textnode2=document.createTextNode(date.toUTCString());
				
				textnode4=document.createTextNode(time.files[i].gcodeAnalysis.filament.tool0.volume.toFixed(2)+"cm3");  // Prints out the volume with a 2 decimal digit
				
				textnode5=document.createTextNode(time.files[i].gcodeAnalysis.filament.tool0.length.toFixed(2)+"mm");   // Prints out the filament length with 2 decimal digit
				
				textnode6=document.createTextNode(time.files[i].size.toFixed(2) + "B");									// Prints out the size of the files with 2 decimal digit
				
				// Gets Estimated Print Time and Convert
				// Checks if the Estimated Print time has a value or not if not it will print out N/A
				if(time.files[i].gcodeAnalysis.estimatedPrintTime){					 
					var esttime = time.files[i].gcodeAnalysis.estimatedPrintTime; // Gets The time in seconds
					var hours = Math.floor(esttime / 3600);							// Calculated for the hours
					esttime = esttime - hours * 3600;								// Takes the hours and subtract the total time to get the remainder
					var min = Math.floor(esttime/60);								// take the remainder and calculate the mins
					var sec = esttime - min*60;										// the rest is the seconds
					textnode7=document.createTextNode(hours +":"+min+":"+sec.toFixed(0));	// Print out the hours mins and sec with the format hours:min:Seconds
				}else{
					textnode7=document.createTextNode("N/A");
				}
				
				var a = document.createElement("a");
				a.href = time.files[i].refs.download;
				a.appendChild(document.createTextNode("download"));
				
				
				cell1.appendChild(textnode1);
        		cell2.appendChild(textnode2);
				cell4.appendChild(textnode4);
				cell5.appendChild(textnode5);
				cell6.appendChild(textnode6);
				cell7.appendChild(textnode7);
				cell8.appendChild(a);
				
        		row.appendChild(cell1);
         		row.appendChild(cell2);
				row.appendChild(cell4);
				row.appendChild(cell5);
				row.appendChild(cell6);
				row.appendChild(cell7);
				row.appendChild(cell8);
				
         		tabBody.appendChild(row);
			}
			
        }
		function postMessage() {
		}

