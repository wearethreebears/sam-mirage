import { Server } from 'miragejs'
import serializers from './serializers'
import models from './models'
import seeds from './seeds'
import routes from './routes'

const config = environment => {
	return {
		environment,
		serializers,
		models,
		seeds,
		routes
	}
}

export function makeServer({ environment = 'development' } = {}) {
	return new Server(config(environment))
}
