<?php
  $url = $_POST['url'];
  // Get Request
  $data = file_get_contents($url);
  echo $data;
?>
