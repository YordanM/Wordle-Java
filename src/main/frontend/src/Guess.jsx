export function Guess(guess) {
    return (
        <div key={`guess-${guess.id}`}>
              {/* TODO: Extract the code between start and end to component ant replace it with this: <Guess guess={guess} /> */}
              {/* --- start --- */}
              {[...guess.word].map((char, idx) => (
                <span
                  key={`guess-${guess.id}-${idx}`}
                  // eslint-disable-next-line no-undef
                  className={classNames(
                    "Wordle-Match",
                    `Wordle-Match_${guess.matches.charAt(idx)}`
                  )}
                >
                  {char}
                </span>
              ))}
              {/* --- end --- */}
            </div>
    );
}
