
$('#java-springboot-lead-form').submit(function (e) {
  e.preventDefault();

  var form = $(this)
  var url = form.attr('action')

  var request = $.ajax({
    method: "POST",
    url: url,
    data: form.serialize(),
    json: true,
    xhrFields: {
    withCredentials: true
    }
  })

  request.done(function(response) { 
    
    const congratulationBannerEl = document.getElementById('congratulation-banner');
    const formCardEl = document.getElementById('java-springboot-lead-form');
    formCardEl.style.display = 'none';
    congratulationBannerEl.style.display = 'flex';
  })
    
  request.fail(function (xhr, textStatus, errorThrown) {
    // show some error
  })
})
