# Octofarm
Wireless 3D printing Web Application

####Objective
This is a project that can be seen as an extension of Octoprint. Octorint is a tool that allows a user to wirelessly print using an easy and simple web interface. The problem with Octoprint is it does not allow for control of multiple 3D printers. Thus I introduce you to OctoFarm. OctoFarm is a neatly packaged web interface that builds upon Octoprint to provide support for controlling multiple printers at many different remote locations. 

####Solution
This project will solve that problem by allowing users to add multiple printers to the server therefore those printers can now be fully control through the internet via web-interface and application from anywhere that has internet access. 

####Technical details
In order to replicate this project the user needs:
> A 3D printer

> Raspberry Pi

> A Web server with (sql,php,jquery and appache) installed 

> A copy of this project 

####Getting started

> First you must install octoprint on your pi and connect it to your printer. Thankfully there is A raspbery pi image you can download at https://github.com/fcoury/octopi


> Once you have setup octoprint,you must go to settings>api and check allow cors and generate an api key. Keep the api key in a safe place it will be needed later. 

> One last change you have to make on your octopi is to allow cross orgin websocket. To do so go to /home/pi/python2.7/tornado-server4.0.0.0/websocket.sy and change the def_origin to always return true.


> Now on your Web server place nwhtmls and static on to you server


> Under static/php/ locate login-db.php and edit the username and password to reflect your own sql server login


> For easy installation of the data base once you enter your login info in login-db.php the code will create a Database :nowires and it will create a table called Printer_tbl


> Your web interface is now set up, use view.php to add, delete or edit a printer.




####Third Party LibraryOctoprint
>GitHub Link: https://github.com/foosel/OctoPrint

>Licensing:   GENERAL PUBLIC LICENSING

####Project Link
>Project Website: http://www.kirolous.com/nw
