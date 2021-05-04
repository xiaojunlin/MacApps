var wifiname = $network.wifi.ssid;
var ipname = $network.v4.primaryAddress;
var proxyip = ["192.168.50.100"];
var proxywifi = ["JTY_5G"];
for (var i = 0; i < proxywifi.length; i++) {
	if (wifiname==proxywifi[i]){
		$surge.setOutboundMode("direct");		
		setTimeout(function(){$notification.post("Connect to Home Network: "+wifiname,"Surge has changed to Direct Outbound");}, 3000);
		break;
	};
	if (ipname==proxyip[i]){
		$surge.setOutboundMode("direct");		
		setTimeout(function(){$notification.post("Connect to Home Network: "+ipname,"Surge has changed to Direct Outbound");}, 3000);
		break;
	};
	if (i==proxywifi.length-1){
		$surge.setOutboundMode("rule");
		setTimeout(function(){$notification.post("Connect to non-Home Network","Surge has changed to Rule Proxy","");}, 3000);
		break;
	};
	if (i==proxyip.length-1){
		$surge.setOutboundMode("rule");		
		setTimeout(function(){$notification.post("Connect to non-Home Network","Surge has changed to Rule Proxy","");}, 3000);
		break;	
	}
};
$done();