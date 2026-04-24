import type { StatsDisplayProps } from "../../types";

function StatsDisplay(props: StatsDisplayProps) {
    return <div>
        <section><h3>Characters</h3><div>{props.stats.characterCount}</div></section>
        <section><h3>Words</h3><div>{props.stats.wordCount}</div></section>
        {props.showReadingTime && <section><h3>Reading Time</h3><div>{props.stats.readingTime}</div></section>}
    </div>;

}

export default StatsDisplay;