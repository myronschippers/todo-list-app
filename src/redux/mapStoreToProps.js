/**
 * Maps the redux state to a property of 'store' on the component 'props'
 * property.
 * @param {object} reduxState - redux state object, with all reducer properties
 */
const mapStoreToProps = reduxState => ({
    store: reduxState,
});

export default mapStoreToProps;
