const locationsSeeder = server => {
	server.create('location', {
		id: 1,
		title: 'South Kensington',
		handle: 'south-kensington'
	})

	server.create('location', {
		id: 2,
		title: 'Tring',
		handle: 'tring'
	})
}

const zonesSeeder = server => {
	server.create('zone', {
		id: 1,
		title: 'Blue',
		handle: 'blue',
		locationId: 1
	})

	server.create('zone', {
		id: 2,
		title: 'Red',
		handle: 'red',
		locationId: 1
	})
}

const galleriesSeeder = server => {
	server.create('gallery', {
		id: 1,
		title: 'Dinosaurs',
		handle: 'dinosaurs',
		zoneId: 1
	})
	server.create('gallery', {
		id: 2,
		title: 'Reptiles',
		handle: 'reptiles',
		zoneId: 2
	})
}

const highlightsSeeder = server => {
	server.create('highlight', {
		id: 1,
		title: 'Stegosaurous',
		handle: 'stegosaurous',
		galleryId: 1
	})
	server.create('highlight', {
		id: 2,
		title: 'Tyrant Lizard King',
		handle: 'tyrant-lizard-king',
		galleryId: 1
	})
	server.create('highlight', {
		id: 3,
		title: 'Lizard',
		handle: 'lizard',
		galleryId: 2
	})
}

export default function seeds(server) {
	locationsSeeder(server)
	zonesSeeder(server)
	galleriesSeeder(server)
	highlightsSeeder(server)
}
