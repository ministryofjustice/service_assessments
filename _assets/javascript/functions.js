(function() {
  'use strict';

  moj.Modules.functions = {
    init: function() {
      this.cacheEls();
      this.bindEvents();
      this.render();
      this.expand();
    },

    cacheEls: function() {
      this.$allResponses = $('h2').nextUntil('h2'); //cache the elements we are going to use the most, do it once. 
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

      this.$allResponses
        .filter(':visible') //Find all the visible responses
        .not($response) //That are not the current set of responses
        .hide(); // them

      //if the current set of response is visible then hide it, else show it
      if ($response.filter(':visible').length != 0) {
        $response.hide();
        $element.removeClass('is-open');
      } else {
        $response.show();
        $element.addClass('is-open');
      };

    }, //end toggle section


    render: function() {
      this.$allResponses.hide(); // new call to render the h3/h4 href below...

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
    }, //end render

    expand: function() {

      $('#Expand').click(function() {

        var $input = $(this).toggleClass('showall');

        if ($input.hasClass('showall')) {
          $('#content > *').show();
        } else {
          // $('#content > h3,h4,p,#content >ul,hr').hide();
          $('#content').find('h3, h4, p, ul, hr').hide();
        }
      });
    }

  }; //moj.M odules.functions
}());
