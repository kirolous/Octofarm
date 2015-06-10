var url = "http://99.230.120.96/api/files/local";
var api = "767DABB893EB46D8845F34A10E4DB0F7";

var _submit = document.getElementById('_submit'), 
_file = document.getElementById('_file'),
_result = document.getElementById('result'),
_progress = document.getElementById('_progress');

var upload = function(){

    if(_file.files.length === 0){
        return;
    }

    var data = new FormData();
    data.append('file', _file.files[0]);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState == 4){
            try {
                var resp = JSON.parse(request.response);
            } catch (e){
                var resp = {
                    status: 'error',
                    data: 'Unknown error occurred: [' + request.responseText + ']'
					
                };
			
            }
	if(resp.done)
    {
        _result.innerHTML =("File was created");
        console.log(resp.status + ': ' + resp.data);
       // alert("File was Created");    
    }
    else
    {
       _result.innerHTML =("An error occurred");
    }			
			//_result.innerHTML =(resp.done + ': ' + resp.data+request.responseText );
            console.log(resp.status + ': ' + resp.data);
        }
    };

    request.upload.addEventListener('progress', function(e){
      _progress.style.width = Math.ceil(e.loaded/e.total) * 100 + '%';
    }, false);

    request.open('POST', url);
	request.setRequestHeader('X-Api-Key', api);
    request.send(data);
}

_submit.addEventListener('click', upload);