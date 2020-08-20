'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let query = ctx.query;
    ctx.body = 'hi, egg';
    console.log('query:', JSON.stringify(query))
    const persons = await this.app.mysql.get('person');
    console.log('查询到数据：', persons);
    //查询到数据： RowDataPacket { name: 'robin', age: '28' }
  }
}

module.exports = HomeController;
