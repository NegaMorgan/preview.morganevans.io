'use strict';

/* global jQuery:false */

(function($){

  $(function() {
  // document is ready

    var $form = $( '#contact-form' );
    var $summary = $( '#contactus #summary' );
    var $summaryCopy = $( '#contactus #summary p:first-child' );
    var $retry = $( '#contactus #summary a' );

    $form.submit(function(e) {
      var active = $('input[type="radio"][name="optionsRadios"]:checked');
      if ( active.length > 0 ) {
        toggleSection($form, $summary);
        getContent(active.val());
      }
      e.preventDefault();
    });

    $retry.click(reloadForm);

    function reloadForm() {
      $summaryCopy.empty();
      toggleSection($summary, $form);      
    }

    function toggleSection($previousSection, $newSection) {
      $previousSection.hide();
      $newSection.show();
    }

    function getContent(key) {
      if ( 'option' + 4 === key ) {
        $summaryCopy.append(copyB);
      } else {
        $summaryCopy.append(copyA);
      }
    }

    function copyA() {
      return 'Sorry, I only accept inquiries from humans at this time.';
    }

    function copyB() {
      var section = $( '#contactus h2' ).html().toLowerCase();
      return section.concat('&#6','4;','evans','.','uno');
    }

  });

})(jQuery);