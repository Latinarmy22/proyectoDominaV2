<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
    <link rel="stylesheet" href="./css/style.css">
    <title>Document</title>
</head>

<body>
    <div class="container text-center">
        <div class="row align-items-center vh-100">
            <main class="col">
                <div class="card">
                    <img class="card-img-top logo" src="./img/logo.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Asignacion mensajero</h5>
                        <div class="form">
                            <form method="get" id="formGuide" action="validation.php">
                                <div class="input-group mb-3">
                                    <select class="form-select form-control" id="selectDelivery" name="selectDelivery">
                                        <option selected>Selecciona un mensajero</option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="guia">Guia</span>
                                    <input type="text" class="form-control" placeholder="Numero de guia" aria-label="guia" aria-describedby="basic-addon1" id="numberGuide" name="numberGuide" required>
                                </div>
                                <input type="submit" value="enviar" class="btn btn-primary btn-guide">
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <aside class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Total asignados</h5>
                        <hr>
                        <div class="counter">
                            <p>Total</p>
                            <!-- <p class="count"></p> -->
                            <span class="count"></span>
                        </div>
                        <a href="#" class="btn btn-primary">Descargar</a>
                        <a href="#" class="btn btn-primary btn-restart">Reiniciar</a>
                    </div>
                </div>
            </aside>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="./js/main.js"></script>
</body>

</html>