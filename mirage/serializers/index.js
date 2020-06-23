import { RestSerializer } from 'miragejs'
export default {
	application: RestSerializer,
	zone: RestSerializer.extend({
		embed: true,
		include: ['location']
	}),
	gallery: RestSerializer.extend({
		embed: true,
		include: ['zone', 'zone.location']
	}),
	highlight: RestSerializer.extend({
		embed: true,
		include: ['gallery', 'gallery.zone', 'gallery.zone.location']
	})
}
