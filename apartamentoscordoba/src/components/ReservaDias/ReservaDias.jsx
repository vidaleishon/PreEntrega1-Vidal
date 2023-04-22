const ReservaDias = ({ initial=1, stock=30, onAdd}) => {

    return (
      <div>

<form id="formulario_reserva">

<div class="row justify-content-center">
    <div class="col-sm-12 col-lg-6 justify-content-center d-flex">
        <input class="input_contact" type="text" placeholder="Nombre y Apellido *" id="nombreyapellido"
            required=""/>
    </div>
    <div class="col-sm-12 col-lg-6 justify-content-center d-flex">
        <input class="input_contact" type="email" placeholder="e-mail *" required="" id="email"/>
    </div>
    <div class="col-sm-12 col-lg-6 justify-content-center d-flex">
        <p>Fecha de llegada:</p>
        <input class="input_contact" type="date" name="Llegada" id="fechallegada" required/>
    </div>
    <div class="col-sm-12 col-lg-6 justify-content-center d-flex">
        <p>Fecha de salida:</p>
        <input class="input_contact" type="date" name="Salida" id="fechasalida" required/>
    </div>
    <div class="col-sm-12 col-lg-12 justify-content-center d-flex">
        <textarea class="input_contact" name="Mensaje"
            placeholder="Datos a tener en cuenta en su consulta" cols="50" id="datosextra"></textarea>
    </div>
    <div class="col-12 justify-content-center d-flex">
        <button class="input_submit" type="submit" placeholder="Enviar" id="botonenviar">Enviar</button>
    </div>
</div>

</form>

<div id="respuestaconsulta"></div>

      </div>
    )
} 

export default ReservaDias