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
	disableAction: true,
	hiddenActions: ['share'],
});

tsSearch
	// Register event handlers
	.on('init', showLoader)
	.on('load', hideLoader)
	.on('answerPageLoading', (payload) =>
		console.log(
			'message received from embedded view' + JSON.stringify(payload)
		)
	)
	// Render the embedded search and pass in the data source id
	.render();

// Show/hide a loader while iframe is loading
function showLoader() {
	// document.getElementById('loader').style.display = 'block';
}
function hideLoader() {
	// document.getElementById('loader').style.display = 'none';
}
`;
