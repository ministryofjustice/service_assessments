$(document).ready(function() {
  'use strict';


  // $(window).load(function() {
 

  //cache all the responses on the page
  var $allResponses = $('h2').append('<img src="/images/expand.png">').nextUntil('h2');

  // hide all the responses onload
  $allResponses.hide();

  //add an click event handle on body to listen for clicks on h2
  $('body').on('click', 'h2', function() {
    //cache the h2 that triggered the event
    var $element = $(this),
      //Cache the content between the clicked h2 and the next H2    
      $response = $element.nextUntil('h2');
    // $icon = $('h2').append( "<span>+</span>" );

    //looking at all the responses 
    $allResponses
    //Find all the visible responses
      .filter(':visible')
      //That are not the current set of responses
      .not($response)
      //hide them
      .hide();

    //if the current set of response is visible then hide it else show it
    if ($response.filter(':visible').length != 0) {
      $response.hide();
      // $icon = $('h2').append( "<span>+</span>" );
    } else {
      $response.show();
      // $icon = $('h2').append( "<span>-</span>" );
      // $('h2').append('<img src="/images/expand.png">')
    };


    // });


  });

  moj.Modules.functions = {
    init: function() {
      this.bindEvents();
    },
    bindEvents: function() {



    }
  };
}());
