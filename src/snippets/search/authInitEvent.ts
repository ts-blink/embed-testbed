export default `
// Import packages
import './styles.css';
import {
	init,
	SearchEmbed,
	Action,
	EventType,
	AuthType,
} from '@thoughtspot/embed-sdk';

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
	.on('authInit', (payload) =>
		console.log(
			'message received from authInit' + JSON.stringify(payload)
		)
	)
	// Render the embedded search and pass in the data source id
	.render({});

// Show/hide a loader while iframe is loading
function showLoader() {
	// document.getElementById('loader').style.display = 'block';
}
function hideLoader() {
	// document.getElementById('loader').style.display = 'none';
}
`;
