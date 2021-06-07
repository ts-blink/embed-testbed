export default `
const { init, SearchEmbed } = TsEmbedSdk;
init({
    thoughtSpotHost: '<%=tshost%>',
    authType: 'None'
});

const searchEmbed = new SearchEmbed(
    document.getElementById('ts-embed'), 
    {
        frameParams: {
            width: '100%',
            height: '100%'
        }
    });

searchEmbed.render();
`;
