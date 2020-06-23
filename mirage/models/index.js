import { Model, hasMany, belongsTo } from 'miragejs'

export default {
	location: Model.extend({
		zones: hasMany()
	}),
	zone: Model.extend({
		location: belongsTo(),
		gallery: hasMany()
	}),
	gallery: Model.extend({
		zone: belongsTo(),
		highlight: hasMany()
	}),
	highlight: Model.extend({
		gallery: belongsTo()
	})
}
