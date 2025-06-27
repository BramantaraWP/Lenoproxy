function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    url  = url.toLowerCase();

    var proxyList = [
        "PROXY 103.89.50.43:80",
        "PROXY 35.212.62.100:80",
        "PROXY 1.10.10.255:80",
        "PROXY 1.0.31.255:80",
        "PROXY 1.32.127.255:80",
        "PROXY 101.50.131.255:80",
        "PROXY 100.42.191.255:80",
        "PROXY 103.112.60.255:80",
        "PROXY 103.138.62.171:80",
        "PROXY 1.37.255.255:80",
        "PROXY 1.32.128.77:80"
    ];

    var blacklist = [
        "missav", "xxx", "porn", "slot", "dewa888", "judi", "xnxx", "ads", "youareanidiot",
        "freshmarketer","yandex","hotvideo","bookmaker","csgore","bingo","sbbanner",
        "vimax","maxwin","gacor","88","18+","7spins","naga77","agentogel","casino",
        "slot","lad","domino","pg","bet", "ad", "doubleclick", "mouseflow", "bugsnag",
        "hotjar", "luckyorange", "adcolony","darkweb","2mdn","fuck","sex","hqhole",
        "angel","xx","areabola","poker","qq","elanghoki","elangbola","kontolkuda",
        "okebos","pussy","dick","amazonaws", "media.net", "metrics", "duckduckgo",
        "darkweb", "israel", "bokep", "bf", "adult", "gun", "weapon", "dora88",
        "888","toto100","mapan777","coli","playgirl","ambil4d", "colay"
    ];

    var whitelist = [
        "adsense", "adblock", "googleadservices", "*.mediafire.com"
    ];

    // Cek whitelist dulu
    for (var j = 0; j < whitelist.length; j++) {
        if (dnsDomainIs(host, whitelist[j]) || shExpMatch(url, "*" + whitelist[j] + "*")) {
            return "DIRECT";
        }
    }

    // Cek blacklist → pilih proxy random dari proxyList
    for (var i = 0; i < blacklist.length; i++) {
        if (shExpMatch(host, "*" + blacklist[i] + "*") || shExpMatch(url, "*" + blacklist[i] + "*")) {
            var proxyIndex = Math.floor(Math.random() * proxyList.length);
            return proxyList[proxyIndex];
        }
    }

    // Sisanya direct
    return "DIRECT";
}
