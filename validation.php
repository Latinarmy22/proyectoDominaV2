<?php
    $delivery = $_POST['selectDelivery'];
    $guide = $_POST['numberGuide'];

    if($delivery != 'Selecciona un mensajero' && $guide != '' ){
        echo json_encode('proccess');
    } else {
        echo json_encode('error');
    }
?>