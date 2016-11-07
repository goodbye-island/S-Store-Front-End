
export function login(page: string, email?: string, oauth_api?: string, client_id?: string) {
    if (oauth_api === undefined) {
        oauth_api = "https://accounts.google.com/o/oauth2/v2/auth";
    }
    if (client_id === undefined) {
        client_id = "476226474161-4ue4bve3dpv7ef0igqnib2m6q62jgosr.apps.googleusercontent.com";
    }
    oauth_api += "?scope="+"email";
    oauth_api += "&response_type=token"
    oauth_api += "&client_id=" + encodeURIComponent(client_id);
    if (!location.origin)
        (location as any).origin = location.protocol + "//" + location.host;

    oauth_api += "&redirect_uri=" + encodeURIComponent(location.origin+"/login")
    if (page === undefined) {
        page = "/"
    }
    oauth_api += "&state=" + encodeURIComponent(page)
    oauth_api += "&prompt=select_account" 
    if (email) {
        oauth_api += "&login_hint=" + encodeURIComponent(email)
    }
    window.location.replace(oauth_api);

}