# jquery_pagination

use this library for web page pagication

1. Add in your html <br>
  &lt;div&gt;&lt;ul id="paging" class="pagination pull-right"&gt;&lt;/ul&gt;&lt;/div&gt;<br>

2. use bootstrap for css
3. add custom.css
4. Add jquery_pagination.js<br>
  function paging( limit, totRec, offset, callback )<br>
  limit total number of records show on the page <br>
  totRec total number of records in the table <br>
  offset total number of records in the table  var offset = 0; <br>
  callback function name of the function which gets the records from database <br>

5. Example
    
    function main_unit_master( offset )<br>
    {<br>
    	$.ajax({<br>
    		url: 'file_name.php',<br>
    		method: 'POST',<br>
    		dataType: 'JSON',<br>
    		data: {<br>
    			offset: offset<br>
    		},<br>
    		success: function( retdata ) {<br>
    			paging( retdata.limit, retdata.total_records, offset, 'function_name');<br>
    		},<br>
    		error: function(e){<br>
    			console.log(e);<br>
    		}<br>
    	});<br>
    }
    
