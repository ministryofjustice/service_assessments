(function() {
  'use strict';

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

        $('h3').append(function(index, el) {
          //for each h3 found append "" link
          // var %name = $(this).text()
          return '<a href="#' + $(this).attr('id') + '" class="HashLink"> #</a>';
        })

        $('h4').append(function(index, el) {
          //for each h3 found append "" link
          return '<a href="#' + $(this).attr('id') + '" class="HashLink"> #</a>';
        })


      } //end bind events



  }; //moj.Modules.functions
}());

// On load get document.location.hash
// Get element by ID of the hash
// Find that elements parent collapsed element
// trigger the expand method of that element
