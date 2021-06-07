export default `
// Import ThoughtSpot SDK
import {
	init,
	PinboardEmbed,
	Action,
	EventType,
	AuthType,
} from '@thoughtspot/visual-embed-sdk';
import './styles.css';
// Initialize embed configuration
init({
	thoughtSpotHost: '<%=tshost%>',
	authType: 'SSO',
});
// Instantiate class to embed a visualization
const embed = new PinboardEmbed('#embed', {
	frameParams: {},
	pinboardId: 'e0836cad-4fdf-42d4-bd97-567a6b2a6058',
	vizId: 'ecb5d025-4fc5-42a6-98c7-bfc7f5d34c67',
});
try {
	hideNoDataImage();
	embed
		// Register event listeners
		.on('init', showLoader)
		.on('load', hideLoader)
		.on('authInit', (payload) =>
			console.log(
				'message received from authInit' + JSON.stringify(payload)
			)
		)
		// Render a viz within a pinboard
		.render();
} catch (error) {
	showNoDataImage();
	hideLoader();
}
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
