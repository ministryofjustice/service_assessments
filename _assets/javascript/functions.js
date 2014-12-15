(function() {
  'use strict';

  moj.Modules.functions = {
    init: function() {
      this.cacheEls();
      this.bindEvents();
      this.render();
      // this.FindElement();
    },

    cacheEls: function () {
      this.$allResponses = $('h2').nextUntil('h2'); //cachEls the elemtns we are going to use the most , do it once 
    },

    bindEvents: function() {
      var that = this;

      $('body').on('click', 'h2', function(e) {
        that.toggleSection($(this));
      });
    }, //end bind events

    toggleSection: function($element) {
      //Cache the content between the clicked h2 and the next H2    
      var $response = $element.nextUntil('h2');
      var $icon = $element.find('span');

      //looking at all the responses 
      this.$allResponses
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
    },

    FindElement: function() {
        var that = this;
        // that.toggleSection();

        // var $TheID = $(document).showPage(location.hash); // does include the # for the record

        var $URLstring = document.location;
        console.log($URLstring);

        var hash = window.location.hash; //get the hash for the url string
        // $(hash).show(); //displays the hash link on the page
        console.log('The hash: ' + hash);

        var hash2 = document.URL.substr(document.URL.indexOf('#') + 1)
        console.log('The hash index: ' + hash2);

        var id = hash2;
        console.log('the id : ' + id);
        var element = document.getElementById(id); //find the element by its ID
        console.log('The element: ' + element);

        // if the hash is hidden 
        if ($(element).is(':hidden') === true) {

          console.log('object (h3/h4) id shown as Hidden: ' + id);

          //find the top h2 and unhide the section 
          var $response = $('h2').prev().nextUntil('h2');
          $response.show();
          $response.addClass('is-open');

        };


    },

    render: function () { // what we see on the page 
      this.$allResponses.hide(); // new call to render the h3 / h4 href below.........

      $('h3').append(function(index, el) {
        //for each h3 found append "" link
        return '<a href="#' + $(this).attr('id') + '" class="HashLink"> #</a>';
      })
      $('h4').append(function(index, el) {
        //for each h4 found append "" link
        return '<a href="#' + $(this).attr('id') + '" class="HashLink" > #</a>';
      })

      var hash = window.location.hash;
      if (hash) {
        $(hash).prevAll('h2').first().click();
      }
    }

  }; //moj.Modules.functions
}());

// On load get document.location.hash
// Get element by ID of the hash
// Find that elements parent collapsed element
// trigger the expand method of that element
