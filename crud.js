var selectedRow = null;

function onFormSubmit(){
    event.preventDefault()
     var submitbutton = document.getElementById("sub");
     var formData= readFormData();

        insertNewRecord(formData);
}

//retreave data
function readFormData(){
    var formData = {};
    formData["email"] = document.getElementById("email").value;
    formData["password"] = document.getElementById("password").value;
    return formData;
}

//insert the data
function insertNewRecord(data) {
    var table = document.getElementById("personalDetails").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
         cell1.innerHTML = data.email

    var cell2 = newRow.insertCell(1);
         cell2.innerHTML = data.password

    var cell3 = newRow.insertCell(2);    
        cell3.innerHTML = `<button> Edit </button
                            <button> Delete </button>`
}