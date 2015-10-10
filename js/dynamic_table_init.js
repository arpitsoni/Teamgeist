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
        // "aoColumnDefs": [
        //     { "bSortable": false, "aTargets": [ 1 ] }
        // ],
        "columns": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            { "orderDataType": "dom-select" },
            { "orderDataType": "dom-text-numeric" },
            { "orderDataType": "dom-select" },
            { "orderDataType": "dom-text-numeric" },
            { "orderDataType": "dom-select" }
        ],
        "aaSorting": [[1, 'asc']]
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