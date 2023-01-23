import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Cody',
      email: 'codymckeon@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Johnny',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  posts: [
    {
      // id: 1,
      title: 'My First Blog Post',
      slug: 'writer-post-0',
      image: '/images/p1.jpg', // 679 x 829
      author: 'Jane Doe',
      date_published: '2022-01-01 12:00:00',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      tags: ['personal', 'writing'],
    },
    {
      //id: 2,
      title: 'My Second Blog Post',
      slug: 'realestate-post-0',
      image: '/images/p2.jpg',
      author: 'Cody McKeon',
      date_published: '2022-01-01 12:00:00',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      tags: ['realestate', 'business'],
    },
    {
      //id: 3,
      title: 'My Third Blog Post',
      slug: 'affiliate-post-0',
      image: '/images/p3.jpg',
      author: 'Cody McKeon',
      date_published: '2022-01-01 12:00:00',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      tags: ['affiliate', 'marketing'],
    },
  ],
};

export default data;
