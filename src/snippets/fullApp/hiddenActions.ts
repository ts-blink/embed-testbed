export default `
// Import ThoughtSpot SDK
import {
    init,
    AppEmbed,
    Action,
    RuntimeFilterOp,
    EmbedEvent,
    Page,
    AuthType
} from "@thoughtspot/visual-embed-sdk";
import './styles.css';
// Initialize embed configuration
init({
    thoughtSpotHost: '<%=tshost%>',
    authType: AuthType.None
});
// Instantiate class for embedding a pinboard
const embed = new AppEmbed("#embed", {
    frameParams: {},
    pageId: Page.Home,
	showPrimaryNavbar: true,
    hiddenActions: [Action.DownloadAsPdf],
});
embed
    // Register event listeners
    .on(EmbedEvent.Init, showLoader)
    .on(EmbedEvent.Load, hideLoader)
    .render();
// Functions to show and hide a loader while iframe loads
function showLoader() {
    // document.getElementById("loader").style.display = "block";
}
function hideLoader() {
    // document.getElementById("loader").style.display = "none";
}
`;
