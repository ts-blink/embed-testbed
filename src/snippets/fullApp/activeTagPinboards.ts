export default `
// Import ThoughtSpot SDK
import {
	init,
	AppEmbed,
	Action,
	EventType,
	AuthType,
} from '@thoughtspot/embed-sdk';
import './styles.css';
// Initialize embed configuration
init({
	thoughtSpotHost: '<%=tshost%>',
	authType: AuthType.None,
});
// Instantiate class for embedding a pinboard
const embed = new AppEmbed('#embed', {
	frameParams: {},
});
embed
	// Register event listeners
	.on('init', showLoader)
	.on('load', hideLoader)
	.render({
		pageId: 'pinboards',
	});
// Functions to show and hide a loader while iframe loads
function showLoader() {
	// document.getElementById('loader').style.display = 'block';
}
function hideLoader() {
	// document.getElementById('loader').style.display = 'none';
}
`;
