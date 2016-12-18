export function configure(config) {
    const components = [
        './button/mdc-button',
        './checkbox/mdc-checkbox',
        './ripple/mdc-ripple',
        './select/mdc-select',
        './select/mdc-select-option'
    ];
    config.globalResources(components);
}
