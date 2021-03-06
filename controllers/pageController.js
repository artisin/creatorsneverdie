import Page from '../models/Page'


exports.listPages = (req, res) => {
	const db = req.app.get('db');
	const pages = db.get('pages')
	res.json(pages)
}

exports.createPage = (req, res) => {
	const db = req.app.get('db');
	const page = db.get('pages').push(req.body).write()
	console.log(page)
	res.json(page)
}


exports.editPage = (req, res) => {
	const db = req.app.get('db')
	const page = db.get(`pages[${req.params.id}]`).assign(req.body)
	res.json(page)
}

exports.getPage = (req, res) => {
	const db = req.app.get('db')
	const page = db.get(`pages[${req.params.id}]`).value()
	res.json(page)
}

exports.deletePage = (req, res) => {
	const db = req.app.get('db')
	const page = db.get(`pages[${req.params.id}]`).value()

	res.json(db.get(`pages`).remove(page).write())
}

