const _baseUrl = {
    alias:     '',
    path:      '/',
    urls:      {},
    private:   false,
    navAction:    false,
    navLink:   false,
    component: null,
};

const _createUrl = (...args) => (
    args.reduce((a, b) => (
        a + '/' + b
    )).replace(/\/+/g, '/')
);

const _createUrls = (url, path = '/') => {
    const _url = { ..._baseUrl, ...url, path }
    Object.keys(_url.urls).map(k => _url.urls[k] = _createUrls(_url.urls[k], _createUrl(_url.path, k)));
    return _url;
}

export const createUrl = _createUrl;
export const createUrls = _createUrls;