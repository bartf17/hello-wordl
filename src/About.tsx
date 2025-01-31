import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { maxGuesses } from "./util";

export function About() {
  return (
    <div className="App-about">
      <p>
        <i>Eredivisie wordle</i> is een vrij schaamteloze kopie van<br /> 
        <a href="https://hellowordl.net/"><i>hello wordl</i></a>, en dat is weer een remake van{" "}
        <a href="https://www.powerlanguage.co.uk/wordle/">
          <i>Wordle</i>
        </a>{" "}
        by <a href="https://twitter.com/powerlanguish">powerlanguish</a>.
      </p>
      <p>
        Je hebt {maxGuesses} pogingen om de achternaam van een (voormalige) Eredivisie-speler te raden.
        <br /><br />
        Accenten en spaties zijn weggehaald. Van der Sar wordt bijv. 'vandersar',
        Kökcü is 'kokcu' en L'Ami is 'lami'.
        <br /><br />Vragen, opmerkingen of hints: <a href="https://twitter.com/bartf">@bartf</a>
        <br /><br />Credits voor de data: <a href="https://twitter.com/optajohan">@OptaJohan</a>        
      </p>
      <hr />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Absent, letter: "w" },
          { clue: Clue.Absent, letter: "o" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Elsewhere, letter: "d" },
        ]}
      />
      <p>
        <b>W</b> and <b>O</b> aren't in the target word at all.
      </p>
      <p>
        <b className="green-bg">R</b> is correct! The third letter is{" "}
        <b className="green-bg">R</b>
        .<br />
        <strong>(There may still be a second R in the word.)</strong>
      </p>
      <p>
        <b className="yellow-bg">D</b> occurs <em>elsewhere</em> in the target
        word.
        <br />
        <strong>(Perhaps more than once. 🤔)</strong>
      </p>
      <hr />
      <p>
        Let's move the <b>D</b> in our next guess:
      </p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "d" },
          { clue: Clue.Correct, letter: "a" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Absent, letter: "k" },
        ]}
        annotation={"So close!"}
      />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "d" },
          { clue: Clue.Correct, letter: "a" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Correct, letter: "t" },
        ]}
        annotation={"Got it!"}
      />
      <p>
        Report issues{" "}
        <a href="https://github.com/lynn/hello-wordl/issues">here</a>, or tweet{" "}
        <a href="https://twitter.com/chordbug">@chordbug</a>.
      </p>
      <p>
        This game will be free and ad-free forever,
        <br />
        but you can <a href="https://ko-fi.com/chordbug">buy me a coffee</a> if you'd like.
      </p>
    </div>
  );
}
