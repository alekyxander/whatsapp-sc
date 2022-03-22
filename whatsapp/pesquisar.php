<?php


  $pesquisar = $_GET['pesquisar'];
  header ("location:https://api.whatsapp.com/send/?phone=%2B55$pesquisar");
   
?>
