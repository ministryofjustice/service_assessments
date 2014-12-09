moj.Modules.functions = {
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    //cache all the responses on the page
    var $allResponses = $('h2').nextUntil('h2');

    // hide all the responses onload
    $allResponses.hide();

    //add an click event handle on body to listen for clicks on h2
    $('body').on('click', 'h2', function() {
      //cache the h2 that triggered the event
      var $element = $(this),
        //Cache the content between the clicked h2 and the next H2    
        $response = $element.nextUntil('h2'),
        $icon = $element.find('span');

      //looking at all the responses 
      $allResponses
        .filter(':visible') //Find all the visible responses
        .not($response) //That are not the current set of responses
        .hide(); //hide them

      //if the current set of response is visible then hide it else show it
      if ($response.filter(':visible').length != 0) {
        $response.hide();
        $element.removeClass('is-open');

      } else {
        $response.show();
        $element.addClass('is-open');


      };

    });

    $('h3').append(function(index, element) {
      //for each h3 found append "" link
      return '<a href="#HashLink-' + index + '" class="HashLink"> #</a>';
    }).attr('id', function(index) {
      //for each h3 
      return 'HashLink-' + index;
    });

    $('h4').append(function(index, element) {
      //for each h4 found append "" link
      return '<a href="#HashLink-' + index + '" class="HashLink"> #</a>';
    }).attr('id', function(index) {
      //for each h4 
      return 'HashLink-' + index;
    });


  }

};
// }());
