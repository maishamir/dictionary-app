import { useRef } from "react";
import "./Entry.scss";
import newWindow from "../../assets/images/icon-new-window.svg";
import playIcon from "../../assets/images/icon-play.svg";

// Small audio button subcomponent for clarity
function AudioPlayer({ url }) {
    const audioRef = useRef(null);
    if (!url) return null;
    return (
        <>
            <audio src={url} ref={audioRef}></audio>
            <img
                src={playIcon}
                alt="Play audio"
                className="entry__play"
                onClick={() => audioRef.current && audioRef.current.play()}
                style={{ cursor: "pointer" }}
            />
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
                        {def.example && (
                            <p className="entry__example">"{def.example}"</p>
                        )}
                    </li>
                ))}
            </ul>
            {synonyms && synonyms.length > 0 && (
                <div className="synonym__list">
                    <p className="label">Synonyms</p>
                    <ul className="synonyms">
                        {synonyms.map((syn, i) => (
                            <li key={i}>{syn}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function Entry({ entry, entryNotFound }) {
    if (!entry) {
        return (
            <div className="entryError">
                <h1>{entryNotFound.title}</h1>
                <p>
                    {entryNotFound.message} {entryNotFound.resolution}
                </p>
            </div>
        );
    }

    // Grab the first audio with an audio URL, else blank
    const pronunciation = entry.phonetics.find(p => p.audio) || {};
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
                    <p className="source__link">{entry.sourceUrls[0]} <img src={newWindow} alt="" className="newWindowIcon"/></p>
                </a>
            </div>
        </section>
    );
}

export default Entry;
