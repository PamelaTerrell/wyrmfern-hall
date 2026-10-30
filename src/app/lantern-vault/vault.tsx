"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./vault.css";

const puzzles = [
  {
    title: "The Whispering Stair", skill: "Number patterns", symbol: "✧",
    story: "The stairway remembers a growing spell. Find the next number to light the first lantern.",
    display: "3 → 7 → 15 → 31 → ?",
    choices: ["47", "62", "63", "64"], answer: "63",
    hint: "Try doubling a number, then adding one. Does that work at every step?",
    explanation: "Double the previous number and add 1: 3 × 2 + 1 = 7, then 15, then 31. So 31 × 2 + 1 = 63.",
  },
  {
    title: "The Moondew Mixture", skill: "Math reasoning", symbol: "⚗",
    story: "A garden lantern needs 19 drops of a pretend potion. Amber uses twice as many drops as Blue. Green uses 3 more drops than Blue. How many BLUE drops do you need?",
    display: "Amber = 2 × Blue   ·   Green = Blue + 3",
    choices: ["3 drops", "4 drops", "5 drops", "6 drops"], answer: "4 drops",
    hint: "Set aside Green’s extra 3 drops. The remaining 16 drops make four equal Blue-sized parts.",
    explanation: "Blue is 4 drops, Amber is 8, and Green is 7. Together, 4 + 8 + 7 = 19. This potion is imaginary—no real ingredients needed!",
  },
  {
    title: "The Three Keepers", skill: "Logic & careful reading", symbol: "☾",
    story: "One keeper holds a key. Exactly ONE of these three statements is true. Which keeper holds the key?",
    display: "Moon: “Sun has the key.”\nSun: “I do not have the key.”\nStar: “Moon does not have the key.”",
    choices: ["Moon", "Sun", "Star"], answer: "Moon",
    hint: "Pretend each keeper has the key in turn. Count true statements. Only one choice makes exactly ONE statement true.",
    explanation: "If Moon holds the key, Moon’s statement is false, Sun’s is true, and Star’s is false. If Sun or Star held it, TWO statements would be true. So Moon holds the key!",
  },
];

export default function LanternVault() {
  const [entrance, setEntrance] = useState<"checking" | "open" | "closed">("checking");
  const [stage, setStage] = useState(0);
  const [started, setStarted] = useState(false);
  const [choice, setChoice] = useState("");
  const [hint, setHint] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [solved, setSolved] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fromStar = new URLSearchParams(window.location.search).get("passage") === "star";
    let allowed = fromStar;
    try {
      allowed ||= sessionStorage.getItem("wyrmfern-passage") === "open";
      if (fromStar) sessionStorage.setItem("wyrmfern-passage", "open");
    } catch { /* The query grants this visit when storage is unavailable. */ }
    setEntrance(allowed ? "open" : "closed");
    if (fromStar) window.history.replaceState(null, "", window.location.pathname);
  }, []);

  function advance() {
    setStage(stage + 1); setChoice(""); setHint(false); setFeedback(""); setSolved(false);
    requestAnimationFrame(() => heading.current?.focus());
  }
  function check() {
    if (!choice) { setFeedback("Choose an answer first, curious explorer."); return; }
    if (choice === puzzles[stage].answer) {
      setSolved(true); setFeedback("A lantern wakes! " + puzzles[stage].explanation);
    } else setFeedback("The lantern flickers. Try another answer, or ask for a hint. Every attempt helps you learn.");
  }
  function restart() {
    setStage(0); setChoice(""); setHint(false); setFeedback(""); setSolved(false); setStarted(false);
  }
  const complete = stage === puzzles.length;
  const lit = complete ? 3 : stage + (solved ? 1 : 0);
  const puzzle = puzzles[stage];

  return (
    <main className="wv-world">
      <div className="wv-shell">
        <header className="wv-header"><Link href="/">← Return to the Hall</Link><span>WYRMFERN HALL</span></header>
        {entrance === "checking" ? <p role="status">Listening for the passage…</p> : entrance === "closed" ? (
          <section className="wv-card wv-center"><span className="wv-emblem" aria-hidden="true">✦</span>
            <h1>The passage is sleeping.</h1><p>Return to the Hall and look for a star beneath the artwork.</p><Link className="wv-button" href="/">Find the hidden entrance</Link>
          </section>
        ) : (
          <>
            <div className="wv-title"><p className="wv-eyebrow">A SECRET ADVENTURE · ABOUT 5–10 MINUTES</p><h1>The Lantern Vault</h1><p>Three lanterns. Three mysteries. One curious mind.</p></div>
            <ol className="wv-lanterns" aria-label={`${lit} of 3 lanterns lit`}>
              {["Pattern", "Mixture", "Logic"].map((name, i) => <li key={name} className={i < lit ? "wv-lit" : ""}><span aria-hidden="true">✦</span><span>{name}</span><small>{i < lit ? "Lit" : "Waiting"}</small></li>)}
            </ol>
            {!started ? <section className="wv-card wv-center"><span className="wv-emblem" aria-hidden="true">☾</span><p className="wv-eyebrow">YOU FOUND THE PASSAGE</p><h2>A little light goes a long way.</h2><p>The Hall’s garden dragon has left you a challenge. Wake three lanterns using patterns, numbers, and careful reasoning.</p><p>No timer. No lost lives. Hints are always welcome. Bring a grown-up or a pencil if you like.</p><button className="wv-button" onClick={() => { setStarted(true); requestAnimationFrame(() => heading.current?.focus()); }}>Begin the adventure →</button></section>
            : complete ? <section className="wv-card wv-center"><span className="wv-emblem" aria-hidden="true">✺</span><p className="wv-eyebrow">ALL THREE LANTERNS ARE ALIGHT</p><h2 ref={heading} tabIndex={-1}>Welcome, Lantern Keeper.</h2><p>You noticed a pattern, balanced a mixture, and tested a tricky claim. The Hall shines brighter because you kept thinking.</p><div className="wv-award">✦<br/>LANTERN KEEPER<br/><small>Curiosity · Reasoning · Persistence</small></div><p className="wv-reflect">Tell someone: Which puzzle made you change your mind—and why?</p><div className="wv-actions"><button className="wv-button" onClick={restart}>Play again</button><Link className="wv-secondary" href="/">Return to the Hall</Link></div></section>
            : <section className="wv-card"><p className="wv-eyebrow">CHALLENGE {stage + 1} OF 3 · {puzzle.skill}</p><h2 ref={heading} tabIndex={-1}><span aria-hidden="true">{puzzle.symbol} </span>{puzzle.title}</h2><p>{puzzle.story}</p><div className="wv-clue">{puzzle.display}</div>
              <fieldset disabled={solved}><legend>Choose your answer</legend><div className="wv-options">{puzzle.choices.map(answer => <label key={answer} className={choice === answer ? "wv-selected" : ""}><input type="radio" name={`puzzle-${stage}`} value={answer} checked={choice === answer} onChange={() => { setChoice(answer); setFeedback(""); }} /><span>{answer}</span></label>)}</div></fieldset>
              <div className="wv-actions">{!solved && <button className="wv-button" onClick={check}>Light the lantern</button>}<button className="wv-secondary" aria-expanded={hint} aria-controls="vault-hint" onClick={() => setHint(!hint)}>{hint ? "Hide hint" : "Ask for a hint"}</button></div>
              {hint && <p className="wv-hint" id="vault-hint">✧ {puzzle.hint}</p>}
              <div className={solved ? "wv-feedback wv-success" : "wv-feedback"} role="status" aria-live="polite" aria-atomic="true">{feedback}</div>
              {solved && <button className="wv-button" onClick={advance}>{stage === 2 ? "Open the vault →" : "Next mystery →"}</button>}
            </section>}
            <footer className="wv-footer">An original Wyrmfern Hall adventure. No account needed. Progress lasts until this page is refreshed.</footer>
          </>
        )}
      </div>
    </main>
  );
}
