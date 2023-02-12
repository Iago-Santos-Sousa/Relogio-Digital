import { useState, useEffect } from "react";

function App() {
  const [date, setDate] = useState(new Date());

  function currentTime() {
    let horas = new Date().getHours();
    let sessao = "AM";

    if (horas > 12) {
      sessao = "PM";
    }

    return sessao;
  }

  function refreshClock() {
    setDate(new Date());
  }

  // Precisamos criar o timer apenas uma vez quando o componente for renderizado pela primeira vez. Para isso usa-se o useEffect com array de depêndicias vazio.
  // O setInterval cria um cronômetro executando a callback no useEffect em intervalos específicos, nesse caso o 1000 represneta 1 segundo.
  // Como foi utilizado uma função assíncrona como o setInterval, ela precisa ser limpada, faremos isso passando a mesma como parâmetro para a clearInterval.

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  // O método toLocaleTimeString retorna a representação da hora em uma string da variável date no useState

  return (
    <div className="App">
      <h1>Relógio digital</h1>
      <div className="display">
        <h1>
          {date.toLocaleTimeString()} {currentTime()}
        </h1>
      </div>
    </div>
  );
}

export default App;
