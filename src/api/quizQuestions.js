// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: 'I am task oriented in order to achieve certain goals.',
    answers: [
      {
        // briggs, color, letter
        type: 'Basilisk',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Phoenix',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #2
  {
    question: 'I get bored easily when disscussing abstract concepts.',
    answers: [
      {
        // briggs, color, letter
        type: 'Basilisk',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Phoenix',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #3
  {
    question: 'I like to try things out myself.',
    answers: [
      {
        // briggs, color, letter
        type: 'Dragon',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Werewolf',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #4
  {
    question: "I like to know where I'm going before I leave the house.",
    answers: [
      {
        // briggs, color, letter
        type: 'Werewolf',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Dragon',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #5
  {
    question: 'I believe there is a logical explanation for everything.',
    answers: [
      {
        // briggs, color, letter
        type: 'Dragon',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Phoenix',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #6
  {
    question: 'I tend to keep my social circle small.',
    answers: [
      {
        // briggs, color, letter
        type: 'Werewolf',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Phoenix',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #7
  {
    question: 'I enjoy using social media.',
    answers: [
      {
        // briggs, color, letter
        type: 'Phoenix',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Werewolf',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #8
  {
    question: 'I always express concern for others when making decisions.',
    answers: [
      {
        // briggs, color, letter
        type: 'Phoenix',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Basilisk',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #9
  {
    question: 'I solve problems by working through facts until I understand the problem.',
    answers: [
      {
        // briggs, color, letter
        type: 'Dragon',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Basilisk',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #10
  {
    question: 'I sometimes move onto another task before completing my current one.',
    answers: [
      {
        // briggs, color, letter
        type: 'Werewolf',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Phoenix',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #11
  {
    question: 'I prefer to work/do right away rather than spend time making a plan.',
    answers: [
      {
        // briggs, color, letter
        type: 'Basilisk',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Werewolf',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #12
  {
    question: 'I am in tune with my own emotions and let them guide me in life.',
    answers: [
      {
        // briggs, color, letter
        type: 'Werewolf',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Dragon',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #13
  {
    question: 'I feel uneasy if my actions disrupt harmony in my social circle.',
    answers: [
      {
        // briggs, color, letter
        type: 'Werewolf',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Phoenix',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #14
  {
    question: 'I put my personal opinions aside in pursuit of fairness and justice.',
    answers: [
      {
        // briggs, color, letter
        type: 'Phoenix',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Dragon',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #15
  {
    question: 'I tend to sit at the back or corner of the room.',
    answers: [
      {
        // briggs, color, letter
        type: 'Werewolf',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Phoenix',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #16
  {
    question: 'I like to complete my work before playing.',
    answers: [
      {
        // briggs, color, letter
        type: 'Dragon',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Werewolf',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #17
  {
    question: "I don't let other people influence my thoughts or actions.",
    answers: [
      {
        // briggs, color, letter
        type: 'Basilisk',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Phoenix',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #18
  {
    question: 'I need time alone to recharge.',
    answers: [
      {
        // briggs, color, letter
        type: 'Phoenix',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Basilisk',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #19
  {
    question: 'I like to keep my room organized and clean.',
    answers: [
      {
        // briggs, color, letter
        type: 'Dragon',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: 'Werewolf',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  }
]

export default quizQuestions
