
$('#prof-courses-lead-form').submit(function (e) {
  e.preventDefault();

  var form = $(this)
  var url = form.attr('action')

  const course = $('#prof-courses-lead-form select').val();

  const dataArr = form.serializeArray();
  let newDataArr = [];

  // this is specifically done for `careerbootcamp-professionals.html` page.
  // This page has two fields `firstname` and `lastname` but 
  // there is only `name` field in database
  // so we modify the form before serializing and add `name` field manually
  if (course === 'Career Bootcamp') {
    for (let item of dataArr) {
      if (item.name === 'firstname' || item.name === 'lastname') continue;
      else newDataArr.push(item);
    }

    newDataArr.push({
      name: 'name',
      value: `${dataArr[0].value} ${dataArr[1].value}`
    })
  } else {
    newDataArr = dataArr
  }


  var request = $.ajax({
    method: "POST",
    url: url,
    data: $.param(newDataArr), // this will serialize the form array
    json: true,
    xhrFields: {
    withCredentials: true
    }
  })

  request.done(function(response) { 
    
    if (window.location.pathname.includes('prof-courses')) {
      const course = $('#prof-courses-lead-form select').val();
      if (course === 'Full Stack Web Development with Data Structures') {
        window.location = 'https://codingblocks.com/prof-full-stack-web-development-with-data-structures.html';
      } else {
        window.location = 'https://codingblocks.com/prof-data-science-and-machine-learning.html';
      }
    } else {
      const congratulationBannerEl = document.getElementById('congratulation-banner');
      const formCardEl = document.getElementById('prof-courses-lead-form');
      formCardEl.style.display = 'none';
      congratulationBannerEl.style.display = 'flex';
        // $('#congratulation-banner span').text(`Congratulation! Your application for "${$('#course').find(":selected").val()}" has been received.`)
    }

    
  })
    
  request.fail(function (xhr, textStatus, errorThrown) {
    // show some error
  })
})
