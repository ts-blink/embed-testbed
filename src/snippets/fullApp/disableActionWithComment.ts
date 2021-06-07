export default `
// Import ThoughtSpot SDK
import {
    init,
    AppEmbed,
    Action,
    RuntimeFilterOp,
    EmbedEvent,
    AuthType
} from "@thoughtspot/visual-embed-sdk";
import "./styles.css";
// Initialize embed configuration
init({
    thoughtSpotHost: '<%=tshost%>',
	showPrimaryNavbar: true,
    authType: AuthType.None
});
// Instantiate class for embedding a pinboard
const embed = new AppEmbed("#embed", {
    frameParams: {},
    pageId: "home",
    disabledActions: [Action.DownloadAsPdf],
    disabledActionReason: "Reason for disabling",
    hiddenActions: [],
});
embed
    // Register event listeners
    .on(EmbedEvent.Init, showLoader)
    .on(EmbedEvent.Load, hideLoader)
    .render();
// Functions to show and hide a loader while iframe loads
function showLoader() {
}
function hideLoader() {
}
`;
