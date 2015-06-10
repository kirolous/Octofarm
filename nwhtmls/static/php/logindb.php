<?php
  // getusers.php
  mysql_connect("127.0.0.1","beesham","nowires");
  mysql_select_db("nowires");
  $sql = mysql_query("select * from Printer_Tbl");
  while($row=mysql_fetch_assoc($sql)) $output[]=$row;
  print(json_encode($output));
  mysql_close();
?>