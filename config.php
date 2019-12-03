<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Launchpage</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="config.css">

</head>

<body>
<main>
    This is the save config helper page. If you want to persist your changes you need to visit this site.exercises
    <!-- Is php running? show the line below  -->
    <?php $php_is_on = true; 
    echo "<template> <php> is on </php>" 
    If php is running on your server, this page saves your config automatically by clicking on the save button?>
    <!-- Is node js running? show the line below -->
    If you have node js running, this page saves saves your config automatically by clicking on the save button
    <!-- If this page is plain vanilla js, use the following fallback -->
    If you don't have any of this systems runnning, you have to copy the json array into the config.js file

</main>  
</body>
</html>