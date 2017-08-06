import Page from '../models/Page';
import winston from 'winston';

exports.listPages = async (req, res) => {
  winston.log('info', 'listPages', { body: req.body });
  const db = await req.app.get('db');
  const pages = await db.get('pages');
  res.json(pages);
};

exports.createPage = async (req, res) => {
  winston.log('info', 'createPage', { body: req.body });
  const db = await req.app.get('db');
  const page = await db.get('pages').push(req.body).write();
  res.json(page);
};

exports.editPage = async (req, res) => {
  winston.log('info', 'editPage', { body: req.body });
  const db = await req.app.get('db');
  const page = await db.get(`pages[${req.params.id}]`).assign(req.body);
  res.json(page);
};

exports.getPage = async (req, res) => {
  winston.log('info', 'getPage', { body: req.body });
  const db = await req.app.get('db');
  const page = await db.get(`pages[${req.params.id}]`).value();
  res.json(page);
};

exports.deletePage = async (req, res) => {
  winston.log('info', 'deletePage', { body: req.body });
  const db = await req.app.get('db');
  const page = await db.get(`pages[${req.params.id}]`).value();
  res.json(db.get(`pages`).remove(page).write());
};

