<?php include ("./template/initfunc.php"); ?>
<!DOCTYPE html>
<html>
<head>
<title>Alexa the Poet</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php include ($_SERVER['DOCUMENT_ROOT'] ."/template/head.php"); ?>
<!-- CSS Sheets -->
<link rel="stylesheet" href="<?php echo url(); ?>css/stars.css">
<link rel="stylesheet" href="<?php echo url(); ?>css/main.css">

<!-- Scripts -->
<script src="<?php echo url(); ?>js/typed.js"></script>
<script src="<?php echo url(); ?>js/poem.js"></script>
<script src="<?php echo url(); ?>js/template.js"></script>
<script src="<?php echo url(); ?>js/driver.js"></script>
</head>
<body>
<!-- Background -->
<div id="stars"></div>
<!-- Input -->
<div id="title">
<h1>Alexa the Poet</h1>
<p>Tell me a poem about</p>
<div class="form-group">
  <input type="text" class="form-control" id="topic" placeholder=""/>
  <button id="enter" type="button" class="btn btn-default">Enter</button>
</div>
<p id="error"></p>
</div>


<!-- Output -->
<div id="poem">
  <h3 id="return_button"><img src="../images/reply.png" />Go Back</h3>
  <h2 id="poem_title"></h2>
  <h3 id="poem_author"></h3>
  <div id= "lines">


  </div>
</div>
</body>
</html>
