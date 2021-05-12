export default `
// Import ThoughtSpot SDK
import {
    init,
    PinboardEmbed,
    Action,
    EmbedEvent,
    AuthType,
    RuntimeFilterOp,
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
    pinboardId: 'bea79810-145f-4ad0-a02c-4177a6e7d861',
    runtimeFilters: [
        {
            columnName: 'user',
            operator: RuntimeFilterOp.EQ,
            values: ['tsadmin'],
        },
    ],
});
hideNoDataImage();
embed
    // Register event listeners
    .on('init', showLoader)
    .on('load', hideLoader)
    .on(EmbedEvent.Error, () => {
        showNoDataImage();
        hideLoader();
    })
    // Render pinboard
    .render();
// Functions to show and hide a loader while iframe loads
function showLoader() {
    // document.getElementById('loader').style.display = 'block';
}
function hideLoader() {
    // document.getElementById('loader').style.display = 'none';
}
// Functions to show or hide No data images
function showNoDataImage() {
    document.getElementById('no-data').style.display = 'block';
}
function hideNoDataImage() {
    document.getElementById('no-data').style.display = 'none';
}
`;
