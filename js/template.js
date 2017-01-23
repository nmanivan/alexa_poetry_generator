
function typing() {
  $(function(){
          $("#topic").typed({
          strings: ["Love", "Death","War","Time"],
          typeSpeed: 10,
          loop: true,
          });
  });
}

function return_button() {
  $('#return_button').click(function() {
    $('#poem').hide();
    $('#title').show();
    // clear form
    $('#topic').val("");

  });


}


function get_input() {
  $('#enter').click(function() {
    // Get Data
    var topic = $("#topic").val();
    // Change to lowercase
    topic = topic.toLowerCase();
    if (topic == "") {
      $('#error').html("Please enter something.");
    } else {
      get_poem(topic);
    }
  });


}
