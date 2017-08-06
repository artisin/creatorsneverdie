import bcrypt from 'bcrypt';
const defaultdb = {
  pages: [
    {
      title: 'Home',
      content: [{className: 'wrapper', body: 'lorem ipsum'}]
    }
  ],

  users: [
    {
      id: 1,
      email: 'admin@admin.com',
      password: bcrypt.hashSync('letmein', bcrypt.genSaltSync())
    }
  ]
}

export default defaultdb;
