var wifiname = $network.wifi.ssid;
var ipname = $network.v4.primaryAddress;
var proxyip = ["192.168.50.100"];
var proxywifi = ["JTY_5G"];
for (var i = 0; i < proxywifi.length; i++) {
	if (wifiname==proxywifi[i]){
		$surge.setOutboundMode("direct");		
		setTimeout(function(){$notification.post("network-changed","您目前处于Home WIFI-Network: "+wifiname,"Surge自动变为直接连接");}, 3000);
		break;
	};
	if (ipname==proxyip[i]){
		$surge.setOutboundMode("direct");		
		setTimeout(function(){$notification.post("network-changed","您目前处于Home Network: "+ipname,"Surge自动变为直接连接");}, 3000);
		break;
	};
	if (i==proxywifi.length-1){
		$surge.setOutboundMode("rule");
		setTimeout(function(){$notification.post("Wi-Fi SSID ","Surge 自动变为规则模式","");}, 3000);
		break;
	};
	if (i==proxyip.length-1){
		$surge.setOutboundMode("rule");		
		setTimeout(function(){$notification.post("Connect IP ","Surge 自动变为规则模式","");}, 3000);
		break;	
	}
};
$done();