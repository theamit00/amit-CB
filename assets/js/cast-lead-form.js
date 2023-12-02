$('#cast-lead-form').submit(function (e) {
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

  const congratulationBannerEl = document.getElementById('congratulation-banner');
  const formCardEl = document.getElementById('cast-lead-form');

  request.done(function(response) { 
    // const randomContestId = contestIds[Math.floor(Math.random() * contestIds.length)]
    // window.location = `https://hack.codingblocks.com/app/contests/${randomContestId}`
    // window.location = 'https://codingblocks.com/isa-test.html'
    
    formCardEl.style.display = 'none';
    congratulationBannerEl.style.display = 'flex';
    // $('#congratulation-banner span').text(`Congratulation! Your application for "${$('#course').find(":selected").val()}" has been received.`)
  })
    
  request.fail(function (xhr, textStatus, errorThrown) {
    //   console.log(xhr)
    //         window.location = 'https://codingblocks.com/isa-test.html'

    })
})