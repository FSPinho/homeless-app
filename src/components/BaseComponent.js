import React, {Component} from 'react';

class BaseComponent extends Component {

    getString = (res, ...args) => {
        /*
         const publicModel = this.getPublicModel();
         const currentLanguage = publicModel.get('currentLanguage');
         const strings = publicModel.getIn(['resources', 'strings']).toJS();

         if(strings && strings[res]) {
         const s = strings[res][currentLanguage || 'default'] || strings[res]['default'];
         return s.split(/\$\d/).reduce((a, b, i) => a + args[i - 1] + b);
         }
         */

        return res;
    }

    getUrls = () => {
        const {store: {route}} = this.props;
        return route? route.get('urls').toJS(): null;
    }

    render() {
        return (this.props.children);
    };

}
;

export default BaseComponent;

