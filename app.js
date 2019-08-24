$(document).ready(function() {


	var options = {
		allow_empty: true,

		filters: [
			{
				id: 'name',
				label: 'Name',
				type: 'string',
				// optgroup: 'core',
				default_value: 'gaur',
				size: 30,
				unique: true
			}
		]
	};


	$('#builder').queryBuilder(options);

	$('.parse-json').on('click', function() {
		console.log(JSON.stringify(
			$('#builder').queryBuilder('getMongo'),
			undefined, 2
		));
	});



});