
// TODO: Combine all posts into one array,
// - Then must sort the list in the views

const initial = {
  useCardLayout: true,
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
        copy: 'How to Get Inspired: the Right Way - Designmodo <a href="">bit.ly/1hqgbQA</a> Good stuff from <a href="">@designmodo!</a>', // TODO: Make into HTML
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
        copy: 'My view this morning is simply beautiful... <a href="">instagram.com/p/mV0PUrHRwQ/</a>',
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
        copy: '8 Apps to Turn Your Pipe Dreams Into Prototypes <a href="">on.mash.to/1oubyu8</a>',
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
        copy: 'How to get animations out of your head. <a href="">http://bit.ly/1q7BngO</a>  Funny and useful.',
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
        copy: 'You have to see this bike. It will make your daily commute a absolute joy ride! <a href="">vimeo.com/p/mV0PUrHRwQ/</a>',
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
        copy: 'How to Get Inspired: the Right Way - Designmodo <a href="">bit.ly/1hqgbQA</a> Good stuff from <a href="">@designmodo!</a>', // TODO: Make into HTML
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
        copy: 'The them song of small creative shops around the world. <a href="">http://goo.gl/eFUAzP</a> ',
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
        copy: 'Need some reading? 11 free ebooks for designers | Creative Bloq <a href="">bit.ly/1lE5QDM</a> via <a href="">@netmag</a>',
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
        copy: 'Nothing like a walk on the beach to clear your mind <a href="">instagram.com/p/mV0PUrHRwQ/</a>',
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
        copy: '“…creative people are confident in only one thing: their own doubt.” - <a href="">@johnmaeda</a> on doubt and hope: <a href="">bit.ly/21E34FGM</a>',
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
        copy: 'Don\'t let yourself be controlled by three things: People, money and your past experiences. <a href="">#lifelessons</a>',
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
        copy: 'You have to see this bike. It will make your daily commute a absolute joy ride! <a href="">vimeo.com/p/mV0PUrHRwQ/</a>',
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
        copy: 'I wrote some thoughts about the flat design trend and where interaction design is headed. “Post Flat Design” - <a href="">bit.ly/1lE5QDM</a>',
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
        copy: '<a href="">#freelancers</a> will enjoy <a href="">@WDTrends</a> for graphic and web design tips and inspiration.',
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
        copy: 'We don’t get this here very often... <a href="">instagram.com/p/mV0PUrHRwQ/</a>',
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
        copy: 'Can anything save the world\'s most reviled typeface? Comic Sans gets a makeover: <a href="">http://f-st.co/Br7JjwC</a> ',
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
        copy: '70 logos in 7 seconds that took 7 years to make: <a href="">http://ow.ly/vyuAc</a>',
      }
    },


  ],
};


export default initial;