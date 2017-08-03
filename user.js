let user = {};

user = {
  name: 'Mitchell',
  location: 'Dallas',
  occupations: ['None'],
  hobbies: [
    {
      name: 'soccer',
      type: 'sport'
    },
    {
      name: 'coding',
      type: 'computers'
    },
    {
      name: 'movies',
      type: 'entertainment'
    }
  ],
  family: [
    {
      name: 'Spencer',
      relation: 'brother',
      gender: 'male'
    },
    {
      name: 'Selena',
      relation: 'sister',
      gender: 'female'
    },{
      name: 'Kristin',
      relation: 'sister',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'Zarda BBQ',
      type: 'BBQ',
      rating: 8
    },
    {
      name: 'Dennys',
      type: 'American',
      rating: 2
    },
    {
      name: 'Zios',
      type: 'Italian',
      rating: 7
    }
  ]
}

module.exports = user;
