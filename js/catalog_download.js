$(document).ready(function() {
  if(document.createElement("input").placeholder == undefined) {   
    $('#edit-firstname').val("First Name");
    $('#edit-lastname').val("Last Name");
    $('#edit-email').val("Email Address");
    $('#edit-phone').val("Phone Number");
    $('.form-text').focus(function() {
     $(this).val("");
    });
    $('#edit-firstname').blur(function() {
      $(this).val("First Name");
    });
    $('#edit-lastname').blur(function() {
      $(this).val("Last Name");
    });
    $('#edit-email').blur(function() {
      $(this).val("Email Address");
    });
    $('#edit-phone').blur(function() {
      $(this).val("Phone Number");
    });
   $('#edit-submit').click(function(){
     var text = this.attr('placeholder');
     var inputvalue = this.val();  // you need to collect this anyways
     if (text === inputvalue) inputvalue = "";
   });
  }
}); 
