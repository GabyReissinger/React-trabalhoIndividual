import React, {useState} from 'react'

const CalculadoraIMC = () => {
    const [peso, setPeso] = useState ('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = (e) => {
        e.preventDefault();
        const alturaMetros = altura / 100;
        const imc = peso / (alturaMetros * alturaMetros);

        setResultado(imc.toFixed(2));

        if (imc < 18.5) {
            setClassificacao('Baixo peso :(');
        } else if (imc >= 18.5 && imc <= 24.9) {
          setClassificacao('Eutrofia - Peso Adequado :)');
        } else if (imc >= 25 && imc <= 29.9) {
          setClassificacao('Sobrepeso :(');
        } else if (imc >= 30 && imc <= 34.9) {
          setClassificacao('Obesidade grau 1 :(');
        } else if (imc >= 35 && imc <= 39.9) {
          setClassificacao('Obesidade grau 2 :(');
        } else {
          setClassificacao('Obesidade extrema :(');
        }
      };
    
      return (
        <div>
          <form onSubmit={calcularIMC}>
            <div>
              <label>Peso (kg): </label>
              <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Altura (cm): </label>
              <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                required
              />
            </div>
            <button type="submit">Calcular IMC</button>
          </form>
          {resultado && (
            <div>
              <h2>Resultado do IMC: {resultado}</h2>
              <h3>Classificação: {classificacao}</h3>
            </div>
          )}
        </div>
      );
    };
    
    export default CalculadoraIMC;