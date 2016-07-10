<b># jquery_pagination</b>

<i>use this library for web page pagination</i>

1. Add below div in your html where you want the paginations links to be display <br>
  <b>&lt;div&gt;&lt;ul id="paging" class="pagination pull-right"&gt;&lt;/ul&gt;&lt;/div&gt;</b><br>

2. use <b><i>bootstrap</i></b> for css
3. add <b><i>jquery_pagination_custom.css</i></b> in your assets or css folder<br><br>
4. Add <b><i>jquery_pagination.js</i></b> in your assets or js folder<br>
5. Call below javascript <b><i>function (paging)</i></b> with mentioned parameters<br><br>
  <b><i>function paging( limit, totRec, offset, callback )</i></b><br><br>
  <b><i>limit</i></b>    :  total number of records show on the page <br>
  <b><i>totRec</i></b>   :  total number of records in the table <br>
  <b><i>offset</i></b>   :  total number of records in the table  var offset = 0; <br>
  <b><i>callback</i></b> :  function name of the function which gets the records from database <br>

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
          //function name would be the name of your same function as in this example is main_unit_master
    			paging( retdata.limit, retdata.total_records, offset, 'function_name'); <br>
    		},<br>
    		error: function(e){<br>
    			console.log(e);<br>
    		}<br>
    	});<br>
    }
    
