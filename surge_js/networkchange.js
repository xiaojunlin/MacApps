var wifiname = $network.wifi.ssid;
var proxywifi = ["JTY-5G"];
for (var i = 0; i < proxywifi.length; i++) {
	if (wifiname==proxywifi[i]){
		$surge.setOutboundMode("direct");		
		setTimeout(function(){$notification.post("Welcome home","Change to Direct Outbound","");}, 3000);
		break;
	};
	if (i==proxywifi.length-1){
		$surge.setOutboundMode("rule");
		setTimeout(function(){$notification.post("On the way","Changed to Rule-based Proxy","");}, 3000);
		break;
	};
};
$done();
