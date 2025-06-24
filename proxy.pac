function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    url  = url.toLowerCase();

    var blacklist = [
        "missav", "xxx", "porn", "slot", "dewa888", "judi", "xnxx", "ads", "youareanidiot",
        "freshmarketer","yandex","hotvideo","bookmaker","csgore","bingo","sbbanner",
        "vimax","maxwin","gacor","88","18+","7spins","naga77","agentogel","casino",
        "slot","lad","domino","pg","bet", "ad", "doubleclick", "mouseflow", "bugsnag",
        "hotjar", "luckyorange", "adcolony","darkweb","2mdn","fuck","sex","hqhole",
        "angel","xx","areabola","poker","qq","elanghoki","elangbola","kontolkuda",
        "okebos","pussy","dick","amazonaws", "media.net", "metrics", "duckduckgo",
        "darkweb", "israel", "bokep", "bf", "adult", "gun", "weapon", "dora88","888",
        "777", "ambil4d"
    ];

    var whitelist = [
        "adsense", "adblock", "googleadservices"
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
            return "PROXY 127.0.0.1:8080"; // atau ganti IP proxy lu kalau mau redirect
        }
    }

    return "DIRECT";
}
