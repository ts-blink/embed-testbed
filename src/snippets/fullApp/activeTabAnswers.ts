export default `
// Import ThoughtSpot SDK
import {
	init,
	AppEmbed,
	Action,
	EventType,
	Page,
	AuthType,
} from '@thoughtspot/visual-embed-sdk';
import './styles.css';
// Initialize embed configuration
init({
	thoughtSpotHost: '<%=tshost%>',
	authType: AuthType.None,
});
// Instantiate class for embedding a pinboard
const embed = new AppEmbed('#embed', {
	frameParams: {},
	showPrimaryNavbar: true,
	pageId: Page.Answers,
});
embed
	// Register event listeners
	.on('init', showLoader)
	.on('load', hideLoader)
	.render();
// Functions to show and hide a loader while iframe loads
function showLoader() {
}
function hideLoader() {
}
`;
