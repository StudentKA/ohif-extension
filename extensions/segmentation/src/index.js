import toolbarModule from './toolbarModule';
// import commandsModule from '../../cornerstone/src';
import commandsModule from './commandsModule';

export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id: 'segmentation',

  getToolbarModule() {
    return toolbarModule;
  },
  getCommandsModule() {
    return commandsModule;
  },
};
