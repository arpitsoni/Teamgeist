$.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
{
    return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
        return $('input', td).val();
    } );
}
 
/* Create an array with the values of all the input boxes in a column, parsed as numbers */
$.fn.dataTable.ext.order['dom-text-numeric'] = function  ( settings, col )
{
    return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
        return $('input', td).val() * 1;
    } );
}
 
/* Create an array with the values of all the select options in a column */
$.fn.dataTable.ext.order['dom-select'] = function  ( settings, col )
{
    return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
        return $('select', td).val();
    } );
}

/* numeric comma */ 
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "numeric-comma-pre": function ( a ) {
        var x = (a == "-") ? 0 : a.replace( /,/, "." );
        return parseFloat( x );
    },
 
    "numeric-comma-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
 
    "numeric-comma-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
} ); 


jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "formatted-num-pre": function ( a ) {
        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
        return parseFloat( a );
    },
 
    "formatted-num-asc": function ( a, b ) {
        return a - b;
    },
 
    "formatted-num-desc": function ( a, b ) {
        return b - a;
    }
} );



function fnFormatDetails ( oTable, nTr )
{
    var aData = oTable.fnGetData( nTr );
    var sOut = '<form class="form-horizontal "><div class="form-group"><label class="col-sm-2 control-label">Ansprechpartner Name</label><div class="col-sm-10"><input type="text" class="form-control" maxlength="20"></div></div>';
    
    
     sOut += '<div class="form-group"><label class="col-sm-2 control-label">Email</label><div class="col-sm-10"><input type="text" class="form-control" maxlength="20" ></div></div>';
     sOut += '<div class="form-group"><label class="col-sm-2 control-label">Tel</label><div class="col-sm-10"><input type="text" class="form-control" maxlength="20" ></div></div>';
     sOut += '<div class="form-group"><label class="col-sm-2 control-label">Firma</label><div class="col-sm-10"><input type="text" class="form-control" maxlength="20" ></div></div>';
     sOut += '<div class="form-group"><label class="col-sm-2 control-label">Ort</label><div class="col-sm-10"><input type="text" class="form-control" maxlength="20" ></div></div>';
     sOut += '<div class="form-group"><label class="col-sm-2 control-label">Datum</label><div class="col-sm-10"><input type="text" class="form-control" maxlength="20" ></div></div>';
     sOut += '<div class="form-group"><label class="col-sm-2 control-label">Notiz</label><div class="col-sm-10"><textarea class="form-control" rows="3" cols="50"></textarea></div></div>';     
     sOut += '<div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button type="submit" class="btn btn-primary">speichern</button></div></div><hr/>';

     sOut += '<div class="form-group"><label class="col-sm-2 control-label">12.08.2015 23:55</label><div class="col-sm-10"><span class="form-control bagde light-green-badge" maxlength="20" >Zentrale: Standort Berlin zugerordnet</span></div></div>';
     sOut += '<div class="form-group"><label class="col-sm-2 control-label">12.08.2015 23:55</label><div class="col-sm-10"><span class="form-control bagde light-green-badge" maxlength="20" >Admin: Standort Berlin zugerordnet</span></div></div>';
     sOut += '<div class="form-group"><label class="col-sm-2 control-label">12.08.2015 23:55</label><div class="col-sm-10"><span class="form-control bagde light-green-badge" maxlength="20" >West: Standort Berlin zugerordnet</span></div></div>';    
     sOut += '<div class="form-group"><label class="col-sm-2 control-label">12.08.2015 23:55</label><div class="col-sm-10"><span class="form-control bagde light-green-badge" maxlength="20" >Nord: Standort Berlin zugerordnet</span></div></div>';    
     sOut += '<div class="form-group"><label class="col-sm-2 control-label"></label><div class="col-sm-10"><textarea class="form-control" rows="3" cols="50" placeholder="Kommentar hinzufugen"></textarea></div></div>';  
     sOut += '<div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button type="submit" class="btn btn-primary">Kommentar hinzufugen</button></div></div>';

     sOut += '</form>';


   


    return sOut;
}

$(document).ready(function() {

   
    /*
     * Insert a 'details' column to the table
     */
    var nCloneTh = document.createElement( 'th' );
    var nCloneTd = document.createElement( 'td' );
    nCloneTh.innerHTML = 'Action';
    nCloneTd.innerHTML = '<img src="img/details_open.png">';
    nCloneTd.className = "center";
    
    $('#hidden-table-info thead tr').each( function () {
        this.insertBefore( nCloneTh, this.childNodes[0] );
    } );

    $('#hidden-table-info tbody tr').each( function () {
        this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
    } );

    /*
     * Initialse DataTables, with no sorting on the 'details' column
     */
    var oTable = $('#hidden-table-info').dataTable( {
<<<<<<< HEAD
        // "aoColumnDefs": [
        //     { "bSortable": false, "aTargets": [ 1 ] }
        // ],
        "columns": [
=======
         "columns": [
>>>>>>> origin/master
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            { "orderDataType": "dom-select" },
<<<<<<< HEAD
            { "orderDataType": "dom-text-numeric" },
            { "orderDataType": "dom-select" },
            { "orderDataType": "dom-text-numeric" },
            { "orderDataType": "dom-select" }
=======
            // { "orderDataType": "dom-text-numeric" },            
            { "orderDataType": "numeric-comma" },
            { "orderDataType": "dom-select" },
            // { "orderDataType": "dom-text-numeric" },            
            { "orderDataType": "numeric-comma" },
            { "orderDataType": "dom-select" }
            
        ],
        columnDefs: [
             { type: 'numeric-comma', targets: 8}
        ],
        "aoColumnDefs": [
            { "bSortable": false, "aTargets": [ 0 ] }
>>>>>>> origin/master
        ],
        "aaSorting": [[1, 'desc']]
        
    });

    /* Add event listener for opening and closing details
     * Note that the indicator for showing which row is open is not controlled by DataTables,
     * rather it is done here
     */
    $(document).on('click','#hidden-table-info tbody td:first-child img',function () {
        var nTr = $(this).parents('tr')[0];
        if ( oTable.fnIsOpen(nTr) )
        {
            /* This row is already open - close it */
            this.src = "img/details_open.png";
            oTable.fnClose( nTr );
        }
        else
        {
            /* Open this row */
            this.src = "img/details_close.png";
            oTable.fnOpen( nTr, fnFormatDetails(oTable, nTr), 'details' );
        }
    } );
} );