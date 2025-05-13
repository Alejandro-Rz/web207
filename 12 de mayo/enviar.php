<?php
    $nombreUsuario=$POST ['nombre'];
    $sql = "SELECT * FROM usuario WHERE NOMBRE = $nombreUsuario"
    $resultado = $conn ->mysqli($sql);

    $dato = fetch_assoc($resultado);

?>

<h1>Hola como estas <?php echo $nombreUsuario; ?></h1>

<p> La direccion de el usuario: <?php echo $nombreUsuario:?>, y su direccion es: <?php $dato = ['direccion']?></p>