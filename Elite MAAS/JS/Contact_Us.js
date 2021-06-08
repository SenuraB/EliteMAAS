function validateForm() {
    var jsfname = document.forms["queryFormName"]["First Name"].value;
    var jslname = document.forms["queryFormName"]["Last Name"].value;
    var jsemail = document.forms["queryFormName"]["Email"].value;
    var jssubject = document.forms["queryFormName"]["Subject"].value;
    var jsdescription = document.forms["queryFormName"]["Description"].value;

    if ((jsfname && jslname && jsemail && jssubject && jsdescription)=="") {
        if (jsfname == "") {
          alert("First Name cannot be empty");
        }
        else if(jslname == "") {
          alert("Last Name cannot be empty");
        }
        
        else if(jsemail == "") {
          alert("Email cannot be empty");
        }   
        else if(jssubject == "") {
          alert("Subject cannot be empty");
        }
        else if (jsdescription == "") {
          alert("Description cannot be empty");
        }
        return false;
    }
    else {
        document.getElementById("qformId").style.display = "none"; //Hide the form by using css 
        var editFname = document.getElementById("qfname").value
        var editLname = document.getElementById("qsname").value
        var editEmail = document.getElementById("qemail").value
        var editSubject = document.getElementById("qsubject").value
        var editDescription = document.getElementById("qdescription").value

        document.getElementById("formdata1").innerHTML= 
        `<div class="editdetails">
          <div class="editinformation">
            <div class="editlines"> FIRST NAME &nbsp;: ${editFname} </div> 
            <div class="editlines"> LAST NAME &nbsp; :  ${editLname} </div> 
            <div class="editlines"> EMAIL &nbsp; &nbsp; &nbsp; : ${editEmail} </div> 
            <div class="editlines"> SUBJECT &nbsp; &nbsp; : ${editSubject} </div>
            <div class="editlines"> DETAILS &nbsp; &nbsp; : ${editDescription} </div> 
          </div>
          <div class="editbuttons"> 
            <input name='queryEdit' id='qedit' onclick='EditbtnClick()' type='reset' value='Edit'>  
            <input name='querySubmit' id='qsubmit' onclick='SubmitButtonClick()' type='button' value='Send'>
          </div>
        </div>`
    }
}


function EditbtnClick() {
        document.getElementById("qformId").style.display = "block";
        document.getElementById("formdata1").innerHTML="";
}

function SubmitButtonClick() {
    document.getElementById("qformId").submit();
}
