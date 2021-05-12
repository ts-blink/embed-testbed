export const customizeTestBedContent = (template: string) => {
    const inportSDKRegex = new RegExp(
        /import {[^}]*}.*(?=('|")@thoughtspot\/embed-sdk('|")).*/,
        'ig',
    );
    const tsImportArr = template.match(inportSDKRegex);
    if (tsImportArr?.length) {
        let tsImportString = tsImportArr[0];
        if (tsImportString) {
            const inportRegex = new RegExp(/import/, 'ig');
            const fromRegex = new RegExp(/from/, 'ig');
            const sdkNameRegex = new RegExp(
                /('|")@thoughtspot\/embed-sdk('|")/,
                'ig',
            );
            tsImportString = tsImportString
                .replace(inportRegex, 'const')
                .replace(fromRegex, '=')
                .replace(sdkNameRegex, 'window.embedSdk');
            template = template.replace(inportSDKRegex, tsImportString);
        }
    }
    const styleRegex = new RegExp(/import *('|")\.\/styles.css('|")/, 'ig');
    return template.replace(styleRegex, '');
};
