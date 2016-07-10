<b># jquery_pagination</b>

<i>use this library for web page pagination</i>

1. Add in your html <br>
  <b>&lt;div&gt;&lt;ul id="paging" class="pagination pull-right"&gt;&lt;/ul&gt;&lt;/div&gt;</b><br>

2. use <b><i>bootstrap</i></b> for css
3. add <b><i>jquery_pagination_custom.css</i></b>
4. Add<b><i>jquery_pagination.js</i></b><br><br>
  <b>function paging( limit, totRec, offset, callback )</b><br>
  <b>limit</b>    :  total number of records show on the page <br>
  <b>totRec</b>   :  total number of records in the table <br>
  <b>offset</b>   :  total number of records in the table  var offset = 0; <br>
  <b>callback</b> :  function name of the function which gets the records from database <br>

5. <b><i>Example</i></b>
    
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
    
