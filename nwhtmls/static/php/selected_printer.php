   <?php   
   $json = $_POST['json'];

   if (json_decode($json) != null) {
     $file = fopen('printer.json','w');
     fwrite($file, $json);
     fclose($file);
   } else {
     echo "error writing file";
   }
   ?>