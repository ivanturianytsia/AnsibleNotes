#!/usr/bin/env node

// 'curl -X GET -H "X-Lsw-Auth: 188cd550-7be7-4211-a8be-7d05414933f9" '
//
// {
// 	"virtualServers": [{
// 		"ipAddresses": [{
// 			"ip": "207.244.96.79"
// 		}]
// 	}]
// }
const request = require('request-promise-native');

const listAll = () => {
	return request.get({
			uri: "https://api.leaseweb.com/v1/virtualServers",
			headers: {
				"X-Lsw-Auth": "188cd550-7be7-4211-a8be-7d05414933f9"
			},
			json: true // Automatically stringifies the body to JSON
		})
		.then((response) => {
			let ips = [];
			if (response.virtualServers) {
				response.virtualServers.forEach(server => {
					ips = ips.concat(server.ipAddresses.map(adress => adress.ip));
				})
				return ips;
			} else {
				return []
			}
		})
}

listAll().then(response => {
	let inventory = {
		'all': {
			'hosts': response,
			'vars': {}
		},
		'_meta': {
			'hostvars': {}
		}
	}
	console.log(JSON.stringify(inventory))
});
