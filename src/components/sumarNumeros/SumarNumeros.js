import mondongo from '../../assets/images/mondongo.jpg'
import './sumarNumeros.css'

function SumarNumeros(){
    var total = 0;

    var imageSize = {
        width:"350px",
        height:"350px"
    }


    const sumarNumeros = (num1, num2) => {
        var suma = num1 + num2;
        console.log(num1+" + "+num2+" = "+suma)
    }

    return(
        <div>
            <h1>Sumar Numeros</h1>
            <img src={mondongo} style={imageSize}></img> <br></br>
            <button onClick={() => sumarNumeros(7, 8)}>Suma 7 + 8</button>
            <button onClick={() => sumarNumeros(4, 3)}>Suma 4 + 3</button>
        </div>
    );
}

export default SumarNumeros;