$('.parse-json').on('click', function() {
  var res = $('#builder').queryBuilder('getSQL', $(this).data('stmt'), false);
   console.log(
      res.sql + (res.params ? '\n\n' + JSON.stringify(res.params, undefined, 2) : '')
    );
});

$('.parse-mongo').on('click', function() {
  console.log(JSON.stringify(
      $('#builder').queryBuilder('getMongo'),
      undefined, 2
    ));
});