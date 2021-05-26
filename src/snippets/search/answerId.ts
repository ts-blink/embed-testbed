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
	enableSearchAssist: true,
	answerId: "d0e16150-6a70-4c6c-8b4b-0afc4915d752",
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
}
function hideLoader() {
}
`;
