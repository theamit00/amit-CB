$(function() {
  // var $regexname = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g;
  // $('#phoneNumber').on('keypress keydown keyup', function () {
  //   if (!$(this).val().match($regexname)) {
  //     $('#otp-error').addClass('display-none')
  //     $('#invalid-otp-error').addClass('display-none')
  //     $('#invalid-mobile-error').addClass('display-none')
  //     $('#invalid-phone-number-error').removeClass('display-none');
  //     $('#invalid-phone-number-error').show();
  //     $('#otp-btn').prop('disabled', true)
  //   }
  //   else {
  //     $('#invalid-phone-number-error').addClass('display-none');
  //     $('#otp-btn').prop('disabled', false)
  //   }
  // });

  // $("#graduation_year").click(function() {
  //     if ($('#email').val() !=="" && $('#firstname').val() !=="" && $('#lastname').val() !==""){
  //     var form = $(this)
  //     var url = "https://app.codingblocks.com/student_leads"
  //     var request = $.ajax({
  //       method: "POST",
  //       url: url,
  //       data: {
  //           firstname: $('#firstname').val(),
  //           lastname: $('#lastname').val(),
  //           email: $('#email').val(),
  //           graduation_year: 1990,
  //           phoneNumber: 'PARTIALFILLED',
  //           is_working_professional: true,
  //       },
  //       json: true,
  //       xhrFields: {
  //       withCredentials: true
  //       }
  //     })

  //     request.fail(function (xhr, textStatus, errorThrown) {
  //       console.log(xhr)
  //             window.location = 'https://codingblocks.com/isa-test.html'

  //     })

  //     }
  // });


  $('#student-lead-form').submit(function (e) {
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
      // const randomContestId = contestIds[Math.floor(Math.random() * contestIds.length)]
      // window.location = `https://hack.codingblocks.com/app/contests/${randomContestId}`
      window.location = 'https://codingblocks.com/isa-test.html'
    })
      
    request.fail(function (xhr, textStatus, errorThrown) {
        console.log(xhr)
              window.location = 'https://codingblocks.com/isa-test.html'

      })
  })
})

function requestOtp() {
  $('#otp-error').addClass('display-none')
  $('#invalid-otp-error').addClass('display-none')
  $('#invalid-mobile-error').addClass('display-none')

  var $regexname = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g;
  if (!$('#phoneNumber')[0].value.match($regexname)) {
    return
  }

  var request = $.ajax('https://app.codingblocks.com/student_leads/get_otp', {
    method: "POST",
    data: {
      mobile: $('#phoneNumber')[0].value
    },
    json: true
  })
  
  request.done(function (response) {
    $('#otp-and-submit').removeClass('display-none')
    $('#otpId')[0].value = response.id
  })
  
  request.fail(function(err) {
    $('#otp-error').removeClass('display-none')
  })
}