import {showAction} from 'api/reducers/util';
import route from 'api/reducers/route'

export default {
    def: (s, a) => {showAction(a); return {}},
    route,
};