import React from "react";
import newWindow from "../../assets/images/icon-new-window.svg";


function EntryTerm({ meaning }) {

    const definitions = meaning.definitions;
    definitions.map(definition => (
        console.log(definition.example)
    ))

    return (
        <div>
            <p className="entry__pos">{meaning.partOfSpeech}</p>
            <ul className="entry__meanings">
                {
                    definitions.map(definition => {
                        return <li>{definition.definition}</li>
                    })

                }

                
            </ul>
            {meaning.synonyms.length > 0 &&
                <div>
                    <p className="label">Synonyms</p>
                    <ul className="synonyms">
                        {meaning.synonyms.map(synonym => {
                            return <li>{synonym}</li>
                        })}
                    </ul>
                </div>
            }

            {definitions.map((definition, index) =>
            (definition.example &&
                <p>"{definition.example}"</p>
            ))}

        </div>
    )
}


function Entry({ entry, entryNotFound }) {
    if (entry) {
        return (<section>
            <h1 className="entry__term">
                {entry.word}
            </h1>
            <p className="body-m">{entry.phonetic}</p>

            <div>
                {
                    entry.meanings.map((meaning, index) => {
                        return <EntryTerm meaning={meaning} key={index} />
                    })
                }
            </div>
        </section>)
    }

}

export default Entry;





