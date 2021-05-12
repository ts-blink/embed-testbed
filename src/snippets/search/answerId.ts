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
	enableSearchAssist: true,
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
	.render({
		dataSources: ['b664a50a-a46d-4f69-a985-96f1e3b6988d'],
		answerId: "5772aaf1-555d-44c4-a24c-ae6fba6684c3",
	});

// Show/hide a loader while iframe is loading
function showLoader() {
	// document.getElementById('loader').style.display = 'block';
}
function hideLoader() {
	// document.getElementById('loader').style.display = 'none';
}
`;
