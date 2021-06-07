export default `
// Import ThoughtSpot SDK
import {
	init,
	PinboardEmbed,
	Action,
	EmbedEvent,
	AuthType,
	RuntimeFilterOp
} from "@thoughtspot/visual-embed-sdk";
import './styles.css';
// Initialize embed configuration
init({
	thoughtSpotHost: '<%=tshost%>',
	authType: "SSO"
});
// Instantiate class to embed a visualization
const embed = new PinboardEmbed("#embed", {
    frameParams: {},
    runtimeFilters: [{
  	columnName: 'user',
  	operator: RuntimeFilterOp.EQ,
  		values: [ 'tsadmin' ]
  	}],
    pinboardId: "bea79810-145f-4ad0-a02c-4177a6e7d861",
    vizId: "fa934657-e347-4de7-b02d-3b46609233cc",
});
hideNoDataImage();
embed
    // Register event listeners
    .on("init", showLoader)
    .on("load", hideLoader)
    .on(EmbedEvent.Error, () => {
        showNoDataImage();
        hideLoader();
    })
    // Render a viz within a pinboard
    .render();
// Functions to show/hide a loader while the iframe loads
function showLoader() {
}
function hideLoader() {
}
// Functions to show or hide No data images
function showNoDataImage() {
}
function hideNoDataImage() {
}
`;
