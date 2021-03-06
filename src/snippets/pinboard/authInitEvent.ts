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
	authType: AuthType.None,
});

// Instantiate class for embedding a pinboard
const embed = new PinboardEmbed('#embed', {
	frameParams: {},
	pinboardId: 'e0836cad-4fdf-42d4-bd97-567a6b2a6058',
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
		// Render pinboard with UUID
		.render();
} catch (error) {
	showNoDataImage();
	hideLoader();
}

// Functions to show and hide a loader while iframe loads
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
