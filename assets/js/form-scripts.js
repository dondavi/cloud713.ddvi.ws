



$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "You are missing required information to submit.");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    $.ajax({
        type: "POST",
        url: "http://p1.ddvi.io/send.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == '\nsuccess'){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}


function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}



/*
 success : function(text){
 if (text == "success"){
 formSuccess();
 } else {
 formError();
 submitMSG(false,text);
 }
 }
 });
 */

/**
 * Created by dondavi on 3/5/18.
 */
