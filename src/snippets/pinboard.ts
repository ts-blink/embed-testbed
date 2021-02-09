export default `
const { init, PinboardEmbed } = TsEmbedSdk;
init({
    thoughtSpotHost: '<%=tshost%>',
    authType: 'None'
});

const vizEmbed = new PinboardEmbed(
    document.getElementById('ts-embed'), 
    {
        frameParams: {
            width: '100%',
            height: '100%'
        }
    });

vizEmbed.render({
    pinboardId: '<%=pinboardid%>'
});
`;
