export default `
// Import ThoughtSpot SDK
import {
	init,
	PinboardEmbed,
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
const embed = new PinboardEmbed('#embed', {
	frameParams: {},
	disabledActions: ['downloadAsPdf'],
	disabledActionReason: 'Reason for disabling',
	hiddenActions: [],
});

try {
	hideNoDataImage();
	embed
		// Register event listeners
		.on('init', showLoader)
		.on('load', hideLoader)
		// Render pinboard with UUID
		.render({
			pinboardId: 'e0836cad-4fdf-42d4-bd97-567a6b2a6058',
		});
} catch (error) {
	showNoDataImage();
	hideLoader();
}

// Functions to show and hide a loader while iframe loads
function showLoader() {
	document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
	document.getElementById('loader').style.display = 'none';
}

// Functions to show or hide No data images

function showNoDataImage() {
	document.getElementById('no-data').style.display = 'block';
}
function hideNoDataImage() {
	document.getElementById('no-data').style.display = 'none';
}
`;
