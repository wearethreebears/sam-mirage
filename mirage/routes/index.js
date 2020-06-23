export default function routes() {
	this.namespace = 'api'

	this.get('/locations', schema => {
		return schema.locations.all()
	})

	this.get('/location/:id', (schema, request) => {
		return schema.locations.where({ handle: request.params.id })
	})

	this.get('/location/:id/highlights', (schema, request) => {
		const highlights = schema.highlights.all()
		return highlights.filter(
			highlight => highlight.gallery.zone.location.handle == request.params.id
		)
	})
}
