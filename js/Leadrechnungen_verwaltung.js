var EditableTable = function () {

    return {

        //main function to initiate the module
        init: function () {
            function restoreRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);

                for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                    oTable.fnUpdate(aData[i], nRow, i, false);
                }

                oTable.fnDraw();
            }

            function editRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);

                //get current month                
                var currDate = new Date();
                var currMonth = currDate.getMonth();
                
                for ( var i=0; i<currMonth+1; i++){
                    jqTds[i+1].innerHTML = '<input type="text" class="form-control small" value="' + aData[i+1] + '">';

                }
               
                jqTds[14].innerHTML = '<a class="edit" href="">Save</a> <a class="cancel" href="">Cancel</a>';                
            }

            function saveRow(oTable, nRow) {
                debugger;
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 1, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 2, false);
                oTable.fnUpdate(jqInputs[2].value, nRow, 3, false);
                oTable.fnUpdate(jqInputs[3].value, nRow, 4, false);
                oTable.fnUpdate(jqInputs[4].value, nRow, 5, false);
                oTable.fnUpdate(jqInputs[5].value, nRow, 6, false);
                oTable.fnUpdate(jqInputs[6].value, nRow, 7, false);
                oTable.fnUpdate(jqInputs[7].value, nRow, 8, false);
                oTable.fnUpdate(jqInputs[8].value, nRow, 9, false);
                oTable.fnUpdate(jqInputs[9].value, nRow, 10, false);
                oTable.fnUpdate(jqInputs[10].value, nRow, 11, false);
                oTable.fnUpdate(jqInputs[11].value, nRow, 12, false);
                oTable.fnUpdate(jqInputs[12].value, nRow, 13, false);
                // oTable.fnUpdate(jqInputs[13].value, nRow, 13, false);                
                oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 14, false);               
                oTable.fnDraw();
            }

            function cancelEditRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 1, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 2, false);
                oTable.fnUpdate(jqInputs[2].value, nRow, 3, false);
                oTable.fnUpdate(jqInputs[3].value, nRow, 4, false);
                oTable.fnUpdate(jqInputs[4].value, nRow, 5, false);
                oTable.fnUpdate(jqInputs[5].value, nRow, 6, false);
                oTable.fnUpdate(jqInputs[6].value, nRow, 7, false);
                oTable.fnUpdate(jqInputs[7].value, nRow, 8, false);
                oTable.fnUpdate(jqInputs[8].value, nRow, 9, false);
                oTable.fnUpdate(jqInputs[9].value, nRow, 10, false);
                oTable.fnUpdate(jqInputs[10].value, nRow, 11, false);
                oTable.fnUpdate(jqInputs[11].value, nRow, 12, false);
                oTable.fnUpdate(jqInputs[12].value, nRow, 13, false);
                //oTable.fnUpdate(jqInputs[13].value, nRow, 13, false);                
                oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 14, false);
                oTable.fnDraw();
            }

            var oTable = $('#ausTable').dataTable({
               
                // set the initial value
                "iDisplayLength": 6,
                "sDom": "<'row'<'col-lg-6'l><'col-lg-6'f>r>t<'row'<'col-lg-6'i><'col-lg-6'p>>",
                "sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ records per page",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
                },
               
                "bSort": false,
                //"sScrollX": "100%",
                "bLengthChange": false,
                "bPaginate": false,

            });

            jQuery('#editable-sample_wrapper .dataTables_filter input').addClass("form-control medium"); // modify table search input
            jQuery('#editable-sample_wrapper .dataTables_length select').addClass("form-control xsmall"); // modify table per page dropdown

            var nEditing = null;

            $('#ausTable a.cancel').live('click', function (e) {
                e.preventDefault();
                if ($(this).attr("data-mode") == "new") {
                    var nRow = $(this).parents('tr')[0];
                    oTable.fnDeleteRow(nRow);
                } else {
                    restoreRow(oTable, nEditing);
                    nEditing = null;
                }
            });

            $('#ausTable a.edit').live('click', function (e) {
                e.preventDefault();

                /* Get the row as a parent of the link that was clicked on */
                var nRow = $(this).parents('tr')[0];

                if (nEditing !== null && nEditing != nRow) {
                    /* Currently editing - but not this row - restore the old before continuing to edit mode */
                    restoreRow(oTable, nEditing);
                    editRow(oTable, nRow);
                    nEditing = nRow;
                } else if (nEditing == nRow && this.innerHTML == "Save") {
                    /* Editing this row and want to save it */
                    saveRow(oTable, nEditing);
                    nEditing = null;
                    alert("Updated! Do not forget to do some ajax to sync with backend :)");
                } else {
                    /* No edit in progress - let's start one */
                    editRow(oTable, nRow);
                    nEditing = nRow;
                }
            });
        }

    };

}();