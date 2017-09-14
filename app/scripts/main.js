
$( '#sendForm' ).on( 'click', function() {
	$(this).prop('disabled', true);
	var arr = { first_name: $('#name').val(),
        last_name: $('#name').val(),
        email:$('#email').val(),
        mobile_number:$('#phone').val(),
        company:$('#company').val(),
        source:'Web'  
	}
	$.ajax({
		url: 'https://wt-7b4543ad807edea67f96206d71f57f26-0.run.webtask.io/leadsExpoTachira',
		type: 'POST',
		data: JSON.stringify(arr),
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		async: false,
		success: function(msg) {
			$('#name').val('')
			$('#email').val('')
			$('#phone').val('')
			$('#company').val('')
		    swal('Perfecto!', 'En breve nos pondremos en contacto!', 'success');
	}
	});
});
