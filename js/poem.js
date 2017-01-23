
function rollDice(size){
   return (Math.floor(Math.random()*size));
}

function get_poem(keyword) {

    // Post URL
    var url = "http://poetrydb.org/title/" + keyword;


    $.ajax({
       type: "POST",
       url: './get_poems.php',
       data: { url: url},
       success:function(result) {
         // parse result into json object
         var poems = JSON.parse(result);
         var status = poems.status;
         if (status == 404) {
             $('#error').html("No poems found.");
         } else {
           $('#title').hide();
           // Insert Poem
           var size = poems.length;
           var roll = rollDice(size);

           // Title
           var title = poems[roll].title;
           $('#poem_title').html(title);

           // Author
           var auth = poems[roll].author;
           $('#poem_author').html("by " + auth);


           // Content
           var content = poems[roll].lines;
           var lines = "";
           for (var i in content) {
              lines += '<h3>' + content[i] + '</h3>';
            }
           $('#lines').html(lines);


           $('#poem').show();
         }


       }

    });




}
