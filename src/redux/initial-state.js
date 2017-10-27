
// TODO: Combine all posts into one array,
// - Then must sort the list in the views

const initial = {
  allPosts: [
    {
      id: 1,
      user: {
        img: '/assets/img-thumb-sam.jpg',
        name: 'Sam Soffes',
      },
      content: {
        liked: false,
        img: false,
        video: false,
        timestamp: '3m',
        copy: 'How to Get Inspired: the Right Way - Designmodo bit.ly/1hqgbQA Good stuff from @designmodo!', // TODO: Make into HTML
      }
    },
    {
      id: 2,
      user: {
        img: '/assets/img-thumb-meg.jpg',
        name: 'Meg Robichaud',
      },
      content: {
        liked: false,
        img: '/assets/img-post-ocean.jpg',
        video: false,
        timestamp: '25m',
        copy: 'My view this morning is simply beautiful... instagram.com/p/mV0PUrHRwQ/',
      }
    },
    {
      id: 3,
      user: {
        img: '/assets/img-thumb-kerem.jpg',
        name: 'Kerem Suer',
      },
      content: {
        liked: false,
        img: false,
        video: false,
        timestamp: '50m',
        copy: '8 Apps to Turn Your Pipe Dreams Into Prototypes on.mash.to/1oubyu8',
      },
    },
    {
      id: 4,
      user: {
        img: '/assets/img-thumb-liang.jpg',
        name: 'Liang Shi',
      },
      content: {
        liked: false,
        img: false,
        video: false,
        timestamp: '1hr',
        copy: 'How to get animations out of your head. http://bit.ly/1q7BngO  Funny and useful.',
      }
    },
    {
      id: 5,
      user: {
        img: '/assets/img-thumb-vitor.jpg',
        name: 'Vitor Leal',
      },
      content: {
        liked: false,
        img: false,
        video: '/assets/img-video-bike.jpg',
        timestamp: '1hr',
        copy: 'You have to see this bike. It will make your daily commute a absolute joy ride! vimeo.com/p/mV0PUrHRwQ/',
      }
    },
  ],


  myPosts: [
    {
      id: 10,
      user: {
        img: '/assets/img-profile-thumb.jpg',
        name: 'Jessica Tuan',
      },
      content: {
        liked: false,
        img: false,
        video: false,
        timestamp: '3m',
        copy: 'How to Get Inspired: the Right Way - Designmodo bit.ly/1hqgbQA Good stuff from @designmodo!', // TODO: Make into HTML
      }
    },
    {
      id: 11,
      user: {
        img: '/assets/img-profile-thumb.jpg',
        name: 'Jessica Tuan',
      },
      content: {
        liked: false,
        img: '/assets/img-post-ocean.jpg',
        video: false,
        timestamp: '1h',
        copy: 'The them song of small creative shops around the world. http://goo.gl/eFUAzP ',
      }
    },
    {
      id: 12,
      user: {
        img: '/assets/img-thumb-pallavi.jpg',
        name: 'Pallavi Gupta',
      },
      content: {
        liked: true,
        img: false,
        video: false,
        timestamp: '1h',
        copy: 'Need some reading? 11 free ebooks for designers | Creative Bloq bit.ly/1lE5QDM via @netmag',
      },
    },
    {
      id: 13,
      user: {
        img: '/assets/img-profile-thumb.jpg',
        name: 'Jessica Tuan',
      },
      content: {
        liked: false,
        img: false,
        video: '/assets/img-post-ocean-rocks.jpg',
        timestamp: '2h',
        copy: 'Nothing like a walk on the beach to clear your mind instagram.com/p/mV0PUrHRwQ/',
      }
    },
    {
      id: 14,
      user: {
        img: '/assets/img-profile-thumb.jpg',
        name: 'Jessica Tuan',
      },
      content: {
        liked: false,
        img: false,
        video: false,
        timestamp: '3h',
        copy: '“…creative people are confident in only one thing: their own doubt.” - @johnmaeda on doubt and hope: bit.ly/21E34FGM',
      }
    },
    {
      id: 15,
      user: {
        img: '/assets/img-profile-thumb.jpg',
        name: 'Jessica Tuan',
      },
      content: {
        liked: false,
        img: false,
        video: false,
        timestamp: '3h',
        copy: 'Don\'t let yourself be controlled by three things: People, money and your past experiences. #lifelessons',
      }
    },
    {
      id: 16,
      user: {
        img: '/assets/img-thumb-buzz.jpg',
        name: 'Buzz Usborne',
      },
      content: {
        liked: true,
        img: '/assets/img-post-westy.jpg',
        video: false,
        timestamp: '1d',
        copy: 'You have to see this bike. It will make your daily commute a absolute joy ride! vimeo.com/p/mV0PUrHRwQ/',
      }
    },
    {
      id: 17,
      user: {
        img: '/assets/img-profile-thumb.jpg',
        name: 'Jessica Tuan',
      },
      content: {
        liked: false,
        img: false,
        video: false,
        timestamp: '1d',
        copy: 'Companies: Stop saying "We Are……", I got that from your logo.',
      }
    },
    {
      id: 18,
      user: {
        img: '/assets/img-profile-thumb.jpg',
        name: 'Jessica Tuan',
      },
      content: {
        liked: false,
        img: false,
        video: false,
        timestamp: '1d',
        copy: 'I wrote some thoughts about the flat design trend and where interaction design is headed. “Post Flat Design” - bit.ly/1lE5QDM',
      }
    },
    {
      id: 19,
      user: {
        img: '/assets/img-thumb-ed.jpg',
        name: 'Ed Wellbrook',
      },
      content: {
        liked: true,
        img: false,
        video: false,
        timestamp: '1d',
        copy: '#freelancers will enjoy @WDTrends for graphic and web design tips and inspiration.',
      }
    },
    {
      id: 20,
      user: {
        img: '/assets/img-profile-thumb.jpg',
        name: 'Jessica Tuan',
      },
      content: {
        liked: false,
        img: false,
        video: '/assets/img-video-rain.jpg',
        timestamp: '2d',
        copy: 'We don’t get this here very often... instagram.com/p/mV0PUrHRwQ/',
      }
    },
    {
      id: 21,
      user: {
        img: '/assets/img-profile-thumb.jpg',
        name: 'Jessica Tuan',
      },
      content: {
        liked: false,
        img: false,
        video: false,
        timestamp: '2d',
        copy: 'Can anything save the world\'s most reviled typeface? Comic Sans gets a makeover: http://f-st.co/Br7JjwC ',
      }
    },

    {
      id: 22,
      user: {
        img: '/assets/img-profile-thumb.jpg',
        name: 'Jessica Tuan',
      },
      content: {
        liked: false,
        img: false,
        video: false,
        timestamp: '2d',
        copy: '70 logos in 7 seconds that took 7 years to make: http://ow.ly/vyuAc',
      }
    },


  ],
};


export default initial;