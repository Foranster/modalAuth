$(document).ready( function() {
	$('#bLogin').click( function() {
		$.ajaxSetup({
		  headers: {
		    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		  }
		});

        $.ajax({
			type: 'POST',
			url: '/login',
			data: {
				email: $("#login input[name=email]").val(),
	            password: $("#login input[name=password]").val(),
			},
			dataType: 'json',
			success: function(data) {
				if(data.status === 'success') {
					//$('#login').trigger("reset");
					$("#login :input").val('');
	            	$("#login .close").click();
	            	window.location.assign('/');
	            	//window.location.reload();
				} else {
	            	$('#add-errors').html('');
	            	$('#add-errors').append('<li>' + data.message + '</li>');
	            	$("#add-error-bag").show();
				}
	            //window.location.reload();
	        },
	        error: function(data) {
	            var errors = $.parseJSON(data.responseText);
	            $('#add-errors').html('');
	            $.each(errors.messages, function(key, value) {
	                $('#add-errors').append('<li>' + value + '</li>');
	            });
	            $("#add-error-bag").show();
	        }
		});
	});
});

function arrange() {
    $(document).ready(function() {
        $("#add-error-bag").hide();
        $('#login').modal('show');
    });
}

