export default `
// Import packages
import './styles.css';
import {
	init,
	SearchEmbed,
	Action,
	EventType,
	AuthType,
} from '@thoughtspot/visual-embed-sdk';

// Write Javascript code!
init({
	thoughtSpotHost: '<%=tshost%>',
	authType: AuthType.None,
});

// Instantiate SearchEmbed class
const tsSearch = new SearchEmbed('#embed', {
	frameParams: {},
});

tsSearch
	// Register event handlers
	.on('init', showLoader)
	.on('load', hideLoader)
	.on('data', (payload) =>
		console.log(
			'message received from data' + JSON.stringify(payload)
		)
	)
	// Render the embedded search and pass in the data source id
	.render();

// Show/hide a loader while iframe is loading
function showLoader() {
}
function hideLoader() {
}
`;
