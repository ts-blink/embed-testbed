export default `
// Import ThoughtSpot SDK
import {
    init,
    AppEmbed,
    Action,
    EmbedEvent,
    AuthType
} from "@thoughtspot/visual-embed-sdk";
import "./styles.css";
// Initialize embed configuration
init({
    thoughtSpotHost: '<%=tshost%>',
    authType: AuthType.None
});
// Instantiate class for embedding a pinboard
const embed = new AppEmbed("#embed", {
    frameParams: {},
    path:'pinboard/8eb599a5-e6d9-4217-a460-ac9405715a70/'
});
embed
    // Register event listeners
    .on("init", showLoader)
    .on("load", hideLoader)
    .render();
// Functions to show and hide a loader while iframe loads
function showLoader() {
    document.getElementById("loader").style.display = "block";
}
function hideLoader() {
    document.getElementById("loader").style.display = "none";
}
`;
