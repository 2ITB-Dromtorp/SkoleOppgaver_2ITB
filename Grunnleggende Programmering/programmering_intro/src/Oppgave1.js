import './App.css';

function A() {
    return (
        <div className='oppgaveBox'>
            <h2> Deloppgave 1 a) </h2>
            <p> Spørsmål: Hva skriver du i javascript dersom du vil gi variabelen test verdien 8? 
                Hvilken datatype er dette?</p>
            <p> Svar:
                let test = 8;
                Dette har datatype "number"
            </p>
        </div>
    );
}


export default function Oppgave1() {
    return (
        <div className="App">
          <h1> Oppgave 1 </h1>
          <header className="App-header">
            <A />
            <A />
            <A />
          </header>
        </div>
      );
}
