function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    url  = url.toLowerCase();

    var blacklist = [
        "missav", "xxx", "porn", "slot", "dewa888", "judi", "xnxx", "ads", "youareanidiot",
        "bet", "ad", "doubleclick", "mouseflow", "bugsnag", "hotjar", "luckyorange", "adcolony",
        "amazonaws", "media.net", "metrics", "duckduckgo", "darkweb", "israel", "bokep"
    ];

    var whitelist = [
        "adsense", "adblock"
    ];

    // Cek whitelist dulu
    for (var j = 0; j < whitelist.length; j++) {
        if (dnsDomainIs(host, whitelist[j]) || shExpMatch(url, "*" + whitelist[j] + "*")) {
            return "DIRECT";
        }
    }

    // Cek blacklist
    for (var i = 0; i < blacklist.length; i++) {
        if (shExpMatch(host, "*" + blacklist[i] + "*") || shExpMatch(url, "*" + blacklist[i] + "*")) {
            return "PROXY lenoproxy.vercel.app:443";
        }
    }

    return "DIRECT";
}