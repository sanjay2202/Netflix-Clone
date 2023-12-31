import selectionFilter from "../utils/selection-filter";
import { useContent } from "../hooks";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
    const { series } = useContent('series');
    const { films } = useContent('films');

    const slides = selectionFilter({series , films});
    console.log(slides);
    
    
    return <BrowseContainer slides={slides}/>;
}