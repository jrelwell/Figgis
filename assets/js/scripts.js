$(document).ready(function() {
    $("#submit").click(function() {
        var name = $("#inputName").val();
        var email = $("#inputEmail").val();
        var phone = $("#inputPhone").val();
        var location = $("#inputLoc").val();
        var agent = $("#inputAgent").val();
        var desc = $("#inputDesc").val();
        console.log(name)
        if (name == '' || email == '' || phone == '' || location == '') {
            alert("Insertion Failed Some Fields are Blank....!!");
        } else {
            // Returns successful data submission message when the entered information is stored in database.
            $.post("formsubmit.php", {
                conName: name,
                conEmail: email,
                conPhone: phone,
                conLoc: location,
                conAgent: agent,
                conDesc: desc
            }, function(data) {
                alert(data);
                $('#contactForm')[0].reset(); // To reset form fields
            });
        }
    });
});