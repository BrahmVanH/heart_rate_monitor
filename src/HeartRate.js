const connect = async () => {
	const heartRateDevice = await navigator.bluetooth.requestDevice({
		filters: [{ services: ['heart_rate'] }],
		acceptAllDevices: false,
	});
	console.log('Connecting to heart rate monitor...');
	// Page 110 of GATT specs docs for GATT specifications of Heart Rate Measurement
};
