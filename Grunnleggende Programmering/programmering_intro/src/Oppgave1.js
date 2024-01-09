

function DeloppgaveA() {

    return (
        <div className="deloppgave">
            <h2> Deloppgave a</h2>
            <p> Hva skriver du i javascript dersom du vil gi variabelen test verdien 8? Hvilken datatype er dette? </p>
            <p> Svar: let test = 8 </p>
            <p> Svar: Se console loggen nå {console.log(typeof(8))} </p>
        </div>
    )
}

function DeloppgaveB() {

}

function Oppgave1() {

    return (
        <>
            <h1> Dette er oppgave 1 </h1>
            <DeloppgaveA />
            <DeloppgaveB />
        </>
    )

}

export default Oppgave1;