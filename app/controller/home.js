'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let query = ctx.query;
    ctx.body = 'hi, egg';
    console.log('query:', JSON.stringify(query))
  }
}

module.exports = HomeController;
