exports.setup = {
	presets: [
		{
			label: 'White',
			values: {
				'office': { 0:16,  1:255,  2:0,  3:255,  4: 255,  5:255, 15:16, 16:255, 17:0, 18:255, 19: 255, 20:255 }
			}
		},
		{
			label: 'Natural',
			values: {
				'office': { 0:16,  1:255,  2:0,  3:255,  4: 190,  5:140, 15:16, 16:255, 17:0, 18:255, 19: 190, 20:140 }
			}
		},
		{
			label: 'Worklight',
			values: {
				'office': { 0:16,  1:130,  2:0,  3:255,  4: 165,  5:0, 15: 1, 16:255, 17:0, 18:255, 19: 190, 20:140, 21:0, 22: 0, 23:0, 24:255, 25: 190, 26:140 }
			}
		},
		{
			label: 'Chill',
			values: {
				'office': { 0:16,  1:255,  2:0,  3:255,  4: 39,  5:0, 15: 1, 16:255, 17:0, 18:255, 19: 255, 20:0, 21:0, 22: 0, 23:0, 24:128, 25: 0, 26:255, 31:255, 32: 60 }
			}
		},
		{
			label: 'Cinema',
			values: {
				'office': { 0:16,  1:30,  2:0,  3:255,  4: 39,  5:0, 15:0, 31:255, 32:0 }
			}
		},
	],
	universes: {
		'office': {
			'output': {
				'driver': 'enttec-usb-dmx-pro',
				'device': 0
			},
			'devices': [
				{
					'type': 'eurolite-led-bar',
					'address': 0
				},
				{
					'type': 'eurolite-led-bar',
					'address': 15
				},
				{
					'type': 'showtec-multidim2',
					'address': 31
				},
				{
					'type': 'stairville-led-par-56',
					'address': 64
				},
				{
					'type': 'stairville-led-par-56',
					'address': 70
				},
				{
					'type': 'stairville-led-par-56',
					'address': 76
				}
			]
		}
	}
}
