import PaperConfig from './PaperConfig';
import cornerstone from 'cornerstone-core';

const actions = {
  mySuperDuperAction: async ({ viewports }) => {
    const activeElement = _getActiveViewportEnabledElement(
      viewports.viewportSpecificData,
      viewports.activeViewportIndex);
    const enabledElement = cornerstone.getEnabledElement(activeElement);
    //конечно же не должно быть такой инициализации каждый раз при активации тулы,
    //это всё черновик
    let paperConfig = new PaperConfig();
    paperConfig.init(enabledElement.image, enabledElement.canvas);
  },
};

const definitions = {
  mySuperDuperAction: {
    commandFn: actions.mySuperDuperAction,
    storeContexts: ['viewports'],
    options: {}
  },
};
export default {
  definitions,
  actions,
  defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE',
};

function _getActiveViewportEnabledElement(viewports, activeIndex) {
  const activeViewport = viewports[activeIndex] || {};
  return activeViewport.dom;
}
