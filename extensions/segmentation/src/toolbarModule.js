// import Painter from './Painter';
const definitions = [
  {
    id: 'Painter',
    label: 'Painter',
    icon: 'paint-brush',
    // CustomComponent: Painter,
    commandName: 'mySuperDuperAction',
    type: 'setToolActive',
    // commandName: 'setToolActive'
  }
];

export default {
  definitions,
  defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE',
};
