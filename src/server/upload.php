<?php
  header("Access-Control-Allow-Origin: *");

  $fileName = $_FILES['file']['name'];
  $fileTempName = $_FILES['file']['tmp_name'];
  $newFileNameWithPath = 'uploads/' . time() . '-' . $fileName;
  move_uploaded_file($fileTempName, $newFileNameWithPath);
