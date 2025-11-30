import { useRef } from "react";
import "./Entry.scss"
import newWindow from "../../assets/images/icon-new-window.svg";
import playIcon from "../../assets/images/icon-play.svg";




function EntryTerm({ meaning }) {

    const definitions = meaning.definitions;

    return (
        <div className='entry__meaning'>
            <div className="entry__pos">
                <p>{meaning.partOfSpeech}</p>
                <div className="divider"></div>
            </div>
            <ul className="entry__meanings">
                {
                    definitions.map((definition, index) => {
                        return <li key={index}>{definition.definition}</li>
                    })

                }


            </ul>
            {meaning.synonyms.length > 0 &&
                <div>
                    <p className="label">Synonyms</p>
                    <ul className="synonyms">
                        {meaning.synonyms.map((synonym, index) => {
                            return <li key={index}>{synonym}</li>
                        })}
                    </ul>
                </div>
            }

            {definitions.map((definition, index) =>
            (definition.example &&
                <p key={index}>"{definition.example}"</p>
            ))}

        </div>
    )
}


function Entry({ entry, entryNotFound }) {


    const audioRef = useRef(null);


    function playAudio() {
        audioRef.current.play()
    }

    if (entry) {

        const pronounciation = entry.phonetics.find(phonetic => phonetic.audio)
        const pronounciationURL = pronounciation ? pronounciation.audio : ""
        return (
            <section className='entry'>
                <h1 className="entry__term">
                    {entry.word}
                </h1>
                <p className="body-m">{entry.phonetic}</p>

                {pronounciationURL &&
                    (<><audio src={pronounciationURL} ref={audioRef}></audio>

                        <img src={playIcon} alt="" onClick={() => playAudio()} /></>)
                }

                <div>
                    {
                        entry.meanings.map((meaning, index) => {
                            return <EntryTerm meaning={meaning} key={index} />
                        })
                    }
                </div>
                <hr />
                <small>Source</small>
                <a href={entry.sourceUrls[0]} target="_blank">
                    {entry.sourceUrls[0]} <img src={newWindow} alt="" />{" "}
                </a>
            </section>
        )
    }
    return (
        <div className="entryError">
            <h1>{entryNotFound.title}</h1>
            <p>{entryNotFound.message} {entryNotFound.resolution}</p>
        </div>
    )

}

export default Entry;





