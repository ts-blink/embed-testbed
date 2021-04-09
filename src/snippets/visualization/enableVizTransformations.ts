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
import "./styles.css";
// Initialize embed configuration
init({
    thoughtSpotHost: '<%=tshost%>',
    authType: "SSO"
});
// Instantiate class to embed a visualization
const embed = new PinboardEmbed("#embed", {
    frameParams: {},
    pinboardId: "b27d4ce9-0220-4238-b0b0-917ee18147df",
    vizId: "da56c4a0-7eba-48cd-96c0-32c2899ec31a",
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
    // Render a viz within a pinboard
    .render();
// Functions to show/hide a loader while the iframe loads
function showLoader() {
    document.getElementById("loader").style.display = "block";
}
function hideLoader() {
    document.getElementById("loader").style.display = "none";
}
// Functions to show or hide No data images
function showNoDataImage() {
    document.getElementById("no-data").style.display = "block";
}
function hideNoDataImage() {
    document.getElementById("no-data").style.display = "none";
}
`;
