import activeTabAnswers from '../../snippets/fullApp/activeTabAnswers';
import activeTabHome from '../../snippets/fullApp/activeTabHome';
import activeTabSearch from '../../snippets/fullApp/activeTabSearch';
import activeTagPinboards from '../../snippets/fullApp/activeTagPinboards';
import fullAppAuthInit from '../../snippets/fullApp/authInitEvent';
import fullAppFrameParams from '../../snippets/fullApp/frameParams';
import fullAppInit from '../../snippets/fullApp/initEvent';
import fullAppLoadEvent from '../../snippets/fullApp/loadEvent';
import showPrimaryNavbar from '../../snippets/fullApp/showPrimaryNavbar';
import fullAppSetRuntimeFilters from '../../snippets/fullApp/setRuntimeFilters';
import path from '../../snippets/fullApp/path';
import fullAppDisableActionWithComment from '../../snippets/fullApp/disableActionWithComment';
import fullAppHiddenActions from '../../snippets/fullApp/hiddenActions';

import pinboardModifyAvailableAction from '../../snippets/pinboard/modifyAvailableAction';
import pinboardSetRuntimeFilters from '../../snippets/pinboard/setRuntimeFilters';
import pinboardCustomization from '../../snippets/pinboard/withoutUserExperienceCustomization';
import pinboardAuthInit from '../../snippets/pinboard/authInitEvent';
import pinboardFrameParams from '../../snippets/pinboard/frameParams';
import pinboardInit from '../../snippets/pinboard/initEvent';
import pinboardLoadEvent from '../../snippets/pinboard/loadEvent';
import pinboardDisableActionWithComment from '../../snippets/pinboard/disableActionWithComment';
import fullHeight from '../../snippets/pinboard/fullHeight';
import pinboardHiddenActions from '../../snippets/pinboard/hiddenActions';
import pinboardEnableVizTransformations from '../../snippets/pinboard/enableVizTransformations';

import answerId from '../../snippets/search/answerId';
import searchAuthInitEvent from '../../snippets/search/authInitEvent';
import collapse from '../../snippets/search/collapseDataPanel';
import searchDataEvent from '../../snippets/search/dataEvent';
import disableActionWithComment from '../../snippets/search/disableActionWithComment';
import enable from '../../snippets/search/enableSearchAssist';
import searchFrameParams from '../../snippets/search/frameParams';
import hiddenActions from '../../snippets/search/hiddenActions';
import hide from '../../snippets/search/hideChartOrTable';
import hideData from '../../snippets/search/hideDataPanels';
import searchInitEvent from '../../snippets/search/initEvent';
import searchLoadEvent from '../../snippets/search/loadEvent';
import searchModify from '../../snippets/search/modifyAvailableAction';
import searchQuery from '../../snippets/search/searchQuery';
import searchCustom from '../../snippets/search/withoutUserExperienceCustomization';
import searchTrigger from '../../snippets/search/trigger';

import visualizationModifyAvailableActions from '../../snippets/visualization/modifyAvailableActions';
import visualizationSetRuntimeFilters from '../../snippets/visualization/setRuntimeFilters';
import visualizationCustomization from '../../snippets/visualization/withoutUserExperienceCustomization';
import visualizationAuthInit from '../../snippets/visualization/authInitEvent';
import visualizationDataEvent from '../../snippets/visualization/dataEvent';
import visualizationFrameParams from '../../snippets/visualization/frameParams';
import visualizationInit from '../../snippets/visualization/initEvent';
import visualizationLoadEvent from '../../snippets/visualization/loadEvent';
import visualizationDisableActionWithComment from '../../snippets/visualization/disableActionWithComment';
import visualizationHiddenActions from '../../snippets/visualization/hiddenActions';
import visualizationEnableVizTransformations from '../../snippets/visualization/enableVizTransformations';
import './playground.css';

export enum Page {
    FullApp1 = 'fullapp-active-tab-answers',
    FullApp2 = 'fullapp-active-tab-home',
    FullApp3 = 'fullapp-active-tab-search',
    FullApp4 = 'fullapp-active-tag-pinboards',
    FullApp5 = 'fullapp-auth-init-event',
    FullApp6 = 'fullapp-frame-params',
    FullApp7 = 'fullapp-init-event',
    FullApp8 = 'fullapp-load-event',
    FullApp9 = 'fullapp-show-primary-navbar',
    FullApp10 = 'fullapp-set-runtime-filters',
    FullApp11 = 'fullapp-path',
    FullApp12 = 'fullapp-disable-action-with-comment',
    FullApp13 = 'fullapp-hidden-actions',

    Pinboard1 = 'pinboard-modify-available-action',
    Pinboard2 = 'pinboard-set-runtime-filters',
    Pinboard3 = 'pinboard-without-user-experience-customization',
    Pinboard4 = 'pinboard-auth-init-event',
    Pinboard5 = 'pinboard-frame-params',
    Pinboard6 = 'pinboard-init-event',
    Pinboard7 = 'pinboard-load-event',
    Pinboard8 = 'pinboard-disable-action-with-comment',
    Pinboard9 = 'pinboard-full-height',
    Pinboard10 = 'pinboard-hidden-actions',
    Pinboard11 = 'pinboard-enable-viz-transformations',

    Search1 = 'search-collapse-data-panel',
    Search2 = 'search-enable-search-assist',
    Search3 = 'search-hide-chart-or-table',
    Search4 = 'search-hide-data-panels',
    Search5 = 'search-modify-available-action',
    Search6 = 'search-without-user-experience-customization',
    Search7 = 'search-answer-id',
    Search8 = 'search-auth-init-event',
    Search9 = 'search-data-event',
    Search10 = 'search-disable-action-with-comment',
    Search11 = 'search-frame-params',
    Search12 = 'search-hidden-actions',
    Search13 = 'search-init-event',
    Search14 = 'search-load-event',
    Search15 = 'search-search-query',
    Search16 = 'search-trigger',

    Visualization1 = 'visualization-modify-available-actions',
    Visualization2 = 'visualization-set-runtime-filters',
    Visualization3 = 'visualization-without-user-experience-customization',
    Visualization4 = 'visualization-auth-init-event',
    Visualization5 = 'visualization-data-event',
    Visualization6 = 'visualization-frame-params',
    Visualization7 = 'visualization-init-event',
    Visualization8 = 'visualization-load-event',
    Visualization9 = 'visualization-disable-action-with-comment',
    Visualization10 = 'visualization-hidden-actions',
    Visualization11 = 'visualization-enable-viz-transformations',
}

export const snippetMap = {
    [Page.FullApp1]: activeTabAnswers,
    [Page.FullApp2]: activeTabHome,
    [Page.FullApp3]: activeTabSearch,
    [Page.FullApp4]: activeTagPinboards,
    [Page.FullApp5]: fullAppAuthInit,
    [Page.FullApp6]: fullAppFrameParams,
    [Page.FullApp7]: fullAppInit,
    [Page.FullApp8]: fullAppLoadEvent,
    [Page.FullApp9]: showPrimaryNavbar,
    [Page.FullApp10]: fullAppSetRuntimeFilters,
    [Page.FullApp11]: path,
    [Page.FullApp12]: fullAppDisableActionWithComment,
    [Page.FullApp13]: fullAppHiddenActions,

    [Page.Pinboard1]: pinboardModifyAvailableAction,
    [Page.Pinboard2]: pinboardSetRuntimeFilters,
    [Page.Pinboard3]: pinboardCustomization,
    [Page.Pinboard4]: pinboardAuthInit,
    [Page.Pinboard5]: pinboardFrameParams,
    [Page.Pinboard6]: pinboardInit,
    [Page.Pinboard7]: pinboardLoadEvent,
    [Page.Pinboard8]: pinboardDisableActionWithComment,
    [Page.Pinboard9]: fullHeight,
    [Page.Pinboard10]: pinboardHiddenActions,
    [Page.Pinboard11]: pinboardEnableVizTransformations,

    [Page.Search1]: collapse,
    [Page.Search2]: enable,
    [Page.Search3]: hide,
    [Page.Search4]: hideData,
    [Page.Search5]: searchModify,
    [Page.Search6]: searchCustom,
    [Page.Search7]: answerId,
    [Page.Search8]: searchAuthInitEvent,
    [Page.Search9]: searchDataEvent,
    [Page.Search10]: disableActionWithComment,
    [Page.Search11]: searchFrameParams,
    [Page.Search12]: hiddenActions,
    [Page.Search13]: searchInitEvent,
    [Page.Search14]: searchLoadEvent,
    [Page.Search15]: searchQuery,
    [Page.Search16]: searchTrigger,

    [Page.Visualization1]: visualizationModifyAvailableActions,
    [Page.Visualization2]: visualizationSetRuntimeFilters,
    [Page.Visualization3]: visualizationCustomization,
    [Page.Visualization4]: visualizationAuthInit,
    [Page.Visualization5]: visualizationDataEvent,
    [Page.Visualization6]: visualizationFrameParams,
    [Page.Visualization7]: visualizationInit,
    [Page.Visualization8]: visualizationLoadEvent,
    [Page.Visualization9]: visualizationDisableActionWithComment,
    [Page.Visualization10]: visualizationHiddenActions,
    [Page.Visualization11]: visualizationEnableVizTransformations,
};
