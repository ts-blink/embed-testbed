export const generatePageId = (title: string, item: string) => {
    return `${title.toLowerCase()}-${item.split(' ').join('-').toLowerCase()}`;
};

export const getSelectedTitle = (pageId: string) => {
    return pageId.split('-')[0] || '';
};
