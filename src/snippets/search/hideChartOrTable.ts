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
	hideResults: true,
	dataSources: ['b664a50a-a46d-4f69-a985-96f1e3b6988d'],
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
