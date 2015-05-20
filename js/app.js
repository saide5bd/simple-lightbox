// Problem: Wser when clicking on image goes to a dead end
// Solution: Create and overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"> </div>');
var $image = $('<img>');
var $caption = $("<p> </p>")

//An Image to Overlay
$overlay.append($image);

// A Caption to Overlay
$overlay.append($caption);

//Add overlay
$('body').append($overlay);



//Capture the Click event on a link to an image
$('#imageGallery a').click( function(event){
  event.preventDefault();
  var imageLocation = $(this).attr('href');
  //1 Update overlay with the image linked in the link
  $image.attr('src', imageLocation);

  //2 Show the overlay
  $overlay.show();
  
  //3 Get child's alt attribute and set caption
  var captionText = $(this).children('img').attr('alt');
  $caption.text(captionText);
});
//When overlay is clicked
$overlay.click(function(){
  //1 Hide the overlay
  $overlay.hide();
});
