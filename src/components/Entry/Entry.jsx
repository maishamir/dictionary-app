import { useRef } from "react";
import "./Entry.scss";
import newWindow from "../../assets/images/icon-new-window.svg";
import playIcon from "../../assets/images/icon-play.svg";


function Error({ errMessage }) {
  return (
    <div className="errMsg">
      <h1 className="errMsg__emoji">😞</h1>
      <h2 className="errMsg__title">{errMessage.title}</h2>
      <p className="errMsg__message">
        {errMessage.message} {errMessage.resolution}
      </p>
    </div>
  );
}

// Small audio button subcomponent for clarity
function AudioPlayer({ url }) {
  const audioRef = useRef(null);
  if (!url) return null;
  return (
    <>
      <audio src={url} ref={audioRef}></audio>

      <svg xmlns="http://www.w3.org/2000/svg" class="entry__play" onClick={() => audioRef.current && audioRef.current.play()} width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd" >< circle class="entry__play-circle" cx="37.5" cy="37.5" r="37.5" opacity=".25" /><path class="entry__play-triangle" d="M29 27v21l21-10.5z" /></g></svg>
    </>
  );
}

// Renders each meaning with definitions, examples, and synonyms
function EntryTerm({ meaning }) {
  const { partOfSpeech, definitions, synonyms } = meaning;
  return (
    <div className="entry__meaning">
      <div className="entry__pos">
        <p>{partOfSpeech}</p>
        <div className="divider"></div>
      </div>
      <p className="label">Meaning</p>
      <ul className="entry__meanings">
        {definitions.map((def, i) => (
          <li key={i}>
            {def.definition}
            {def.example && <p className="entry__example">"{def.example}"</p>}
          </li>
        ))}
      </ul>
      {synonyms && synonyms.length > 0 && (
        <div className="synonym__list">
          <p className="label">Synonyms</p>
          <ul className="synonyms">
            {synonyms.map((syn, i) => (
              <li key={i} onClick={() => alert(syn)}>
                {syn}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Entry({ entry, entryNotFound }) {
  if (!entry) {
    return <Error errMessage={entryNotFound} />;
  }

  // Grab the first audio with an audio URL, else blank
  const pronunciation = entry.phonetics.find((p) => p.audio) || {};
  const audioUrl = pronunciation.audio || "";

  return (
    <section className="entry">
      <div className="entry__word">
        <div className="entry__term-phone">
          <h1 className="entry__term">{entry.word}</h1>
          <p className="body-m entry__phonetic">{entry.phonetic}</p>
        </div>
        <AudioPlayer url={audioUrl} />
      </div>
      <div className="entry__definitions">
        {entry.meanings.map((meaning, i) => (
          <EntryTerm meaning={meaning} key={i} />
        ))}
      </div>
      <hr />

      <div className="entry__source">
        <small className="body-s">Source</small>
        <a
          href={entry.sourceUrls[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="body-s"
        >
          <p className="source__link">
            {entry.sourceUrls[0]}{" "}
            <img src={newWindow} alt="" className="newWindowIcon" />
          </p>
        </a>
      </div>
    </section>
  );
}

export default Entry;
