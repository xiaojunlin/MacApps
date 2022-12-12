var wifiname = $network.wifi.ssid;
var proxywifi = ["JTY", "JTY-5G", "Minato", "Minato_5G"];
for (var i = 0; i < proxywifi.length; i++) {
	if (wifiname==proxywifi[i]){
		$surge.setOutboundMode("direct");		
		setTimeout(function(){$notification.post("🌕","Direct Outbound","");}, 3000);
		break;
	};
	if (i==proxywifi.length-1){
		$surge.setOutboundMode("rule");
		setTimeout(function(){$notification.post("🌑","Rule-based Proxy","");}, 3000);
		break;
	};
};
$done();
