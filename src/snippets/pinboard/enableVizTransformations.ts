export default `
// Import ThoughtSpot SDK
import {
    init,
    PinboardEmbed,
    Action,
    RuntimeFilterOp,
    EmbedEvent,
    AuthType
} from "@thoughtspot/visual-embed-sdk";
import './styles.css';
// Initialize embed configuration
init({
    thoughtSpotHost: '<%=tshost%>',
    authType: AuthType.None
});
// Instantiate class for embedding a pinboard
const embed = new PinboardEmbed("#embed", {
    frameParams: {},
    pinboardId: "35a5c94c-8873-4d75-bd3c-1beb6c053311",
    enableVizTransformations: false
});
hideNoDataImage();
embed
    // Register event listeners
    .on(EmbedEvent.Init, showLoader)
    .on(EmbedEvent.Load, hideLoader)
    .on(EmbedEvent.Error, () => {
        showNoDataImage();
        hideLoader();
    })
    // Render pinboard
    .render();
// Functions to show and hide a loader while iframe loads
function showLoader() {
    // document.getElementById("loader").style.display = "block";
}
function hideLoader() {
    // document.getElementById("loader").style.display = "none";
}
// Functions to show or hide No data images
function showNoDataImage() {
    // document.getElementById("no-data").style.display = "block";
}
function hideNoDataImage() {
    // document.getElementById("no-data").style.display = "none";
}
`;
