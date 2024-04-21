const config  = {
    _apiKey: '',
    _baseUrl: '',

    get apiKey() {
        return this._apiKey;
    },
    set apiKey(val:string) {
        this._apiKey = val;
    },
    get baseUrl() {
        return this._baseUrl;
    },
    set baseUrl(val: string) {
        this._baseUrl = val;
    }

}

export default config;
