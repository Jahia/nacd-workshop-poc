window.jahia.i18n.loadNamespaces('nacd-components');

window.jahia.uiExtender.registry.add('callback', 'nacd-componentsExample', {
    targets: ['jahiaApp-init:60'],
    callback: function () {
        window.jahia.uiExtender.registry.add('adminRoute', 'nacd-componentsExample', {
            targets: ['administration-sites:999', 'nacd-componentsaccordion'],
            label: 'nacd-components:label.settings.title',
            icon: window.jahia.moonstone.toIconComponent('<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H21V6M19 18H5V8H19Z" /></svg>'),
            isSelectable: true,
            requireModuleInstalledOnSite: 'nacd-components',
            iframeUrl: window.contextJsParameters.contextPath + '/cms/editframe/default/$lang/sites/$site-key.nacd-components.html.ajax'
        });

        window.jahia.uiExtender.registry.add('action', 'nacd-componentsExample', {
            buttonIcon: window.jahia.moonstone.toIconComponent('<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H21V6M19 18H5V8H19Z" /></svg>'),
            buttonLabel: 'nacd-components:label.action.title',
            targets: ['contentActions:999'],
            onClick: context => {
                window.open('https://github.com/Jahia/app-shell/blob/master/docs/declare-new-module.md', "_blank");
            }
        });

        window.jahia.uiExtender.registry.add('accordionItem', 'nacd-componentsApps_Example', window.jahia.uiExtender.registry.get('accordionItem', 'renderDefaultApps'), {
            targets: ['jcontent:998'],
            label: 'nacd-components:label.appsAccordion.title',
            icon: window.jahia.moonstone.toIconComponent('<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H21V6M19 18H5V8H19Z" /></svg>'),
            appsTarget: 'nacd-componentsaccordion',
            isEnabled: function(siteKey) {
                return siteKey !== 'systemsite'
            }
        });
    }
});
