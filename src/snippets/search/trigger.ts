export default `
// Import packages
import './styles.css';
import {
    init,
    SearchEmbed,
    Action,
    EmbedEvent,
    AuthType,
    HostEvent
} from "@thoughtspot/visual-embed-sdk";
// Write Javascript code!
init({
    thoughtSpotHost: '<%=tshost%>',
    authType: AuthType.None
});
// Instantiate SearchEmbed class
const tsSearch = new SearchEmbed("#embed", {
    frameParams: {}
});
tsSearch
    // Register event handlers
    .on("init", showLoader)
    .on("load", hideLoader)
    .on("answerPageLoading", payload =>
        console.log("message received from embedded view" + JSON.stringify(payload))
    )
    // Render the embedded search and pass in the data source id
    .render();

setTimeout(() => {
    tsSearch.trigger(HostEvent.Search, {
        searchQuery: "Customer_Zip"
    });
}, 10000);

// Show/hide a loader while iframe is loading
function showLoader() {
}
function hideLoader() {
}
`;
