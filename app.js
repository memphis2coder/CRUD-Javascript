var selectedRow = null;

function onFormSubmit() {
    var formData = readFormData();
    if(selectedRow == null)
        insertNewRecord(formData);
        else
        updateRecord(formData)
    resetForm();
};

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById('fullName').value;
    formData["number"] = document.getElementById('number').value;
    formData["email"] = document.getElementById('email').value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById('list').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.number;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById('fullName').value = "";
    document.getElementById('number').value = "";
    document.getElementById('email').value = "";
    selectedRow = null; 
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('number').value = selectedRow.cells[1].innerHTML;
    document.getElementById('email').value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.number;
    selectedRow.cells[2].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm("Are you sure you want to delete?")){
    row = td.parentElement.parentElement;
    document.getElementById("list").deleteRow(row.rowIndex);
    resetForm();
    }
}