import React from "react";
import newWindow from "../../assets/images/icon-new-window.svg";

function Entry() {
  return (
    <section className="entry">
      <h1 className="entry__term">Keyboard</h1>
      <p className="body-m">/ˈkiːbɔːd/</p>

      <p className="entry__pos">noun</p>

      <p className="label">Meaning</p>
      <ul className="entry__meanings">
        <li className="entry__meaning">
          (etc.) A set of keys used to operate a typewriter, computer etc.
        </li>
        <li className="entry__meaning">
          A component of many instruments including the piano, organ, and
          harpsichord consisting of usually black and white keys that cause
          different tones to be produced when struck.
        </li>
        <li className="entry__meaning">
          A device with keys of a musical keyboard, used to control electronic
          sound-producing devices which may be built into or separate from the
          keyboard{" "}
        </li>
      </ul>

      <p className="label">Synonyms</p>
      <p className="entry__synonym">electronic keyboard</p>

      <p className="entry__pos">verb</p>

      <p className="label">Meaning</p>
      <ul className="entry__meanings">
        <li className="entry__meaning">
          To type on a computer keyboard.
          {/* TODO: if there IS an example, render it out (entry.?) */}
          <p className="entry__example">
            “Keyboarding is the part of this job I hate the most.”
          </p>
        </li>
      </ul>

      <hr />

      <small>Source</small>
      <a href="https://en.wiktionary.org/wiki/keyboard" target="_blank">https://en.wiktionary.org/wiki/keyboard <img src={newWindow} alt="" /> </a>
    </section>
  );
}

export default Entry;
