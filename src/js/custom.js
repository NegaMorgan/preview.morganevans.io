'use strict';

/* global jQuery:false */

(function($){

  $(function() {
  // document is ready

    var $form = $( '#contact-form' );
    var $summary = $( '#contact #summary' );
    var $summaryCopy = $( '#contact #summary p:first-child' );

    $form.submit(function(e) {
      var opt = $('input[type="radio"][name="optionsRadios"]:checked');
      toggleSection($form, $summary);
      getContent(opt);
      e.preventDefault();
    });    

    function toggleSection($previousSection, $newSection) {
      $previousSection.hide();
      $newSection.show();
    }

    function getContent(key) {
      if ( key.length > 0 ) {
        $summaryCopy.append(copyA);
      } else {
        $summaryCopy.append(copyB);
      }
    }

    function sendTo(address) {
      return '<a href="mailto:' + address + '">' + address + '</a>';
    }

    function copyA() {
      return 'Thank you for your inquiry!';
    }

    function copyB() {
      var section = $summary.parent().attr('id').toLowerCase();
      return sendTo(section.concat('&#6','4;','evans','.','uno'));
    }

  });

})(jQuery);