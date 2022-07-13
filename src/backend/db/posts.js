import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

const commonURL = "http://res.cloudinary.com/dwhran9qg/image/upload/avatar";

export const posts = [
  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "Musk",
    username: "elon",
    avatarURL: `${commonURL}/1_bkfj1j.jpg`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content: "Population of Mars is still zero people!",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Mark",
          lastName: "Zuckerberg",
          username: "mark",
          avatarURL: `${commonURL}/mark_yhyceh.jpg`,
        },
        {
          _id: uuid(),
          firstName: "Sundar",
          lastName: "Pichai",
          username: "sundar",
          avatarURL: `${commonURL}/sundar_pichai_xikclb.jpg`,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Mark",
        lastName: "Zuckerberg",
        username: "mark",
        avatarURL: `${commonURL}/mark_yhyceh.jpg`,
        text: "Time to change that!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Cristiano",
    lastName: "Ronaldo",
    username: "cristiano",
    avatarURL: `${commonURL}/ronaldo_um79px.jpg`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
      "30 hat-tricks before 30 and 30 hat-tricks after 30. It's time to unbalance the scale! 💪🏽",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Elon",
          lastName: "Musk",
          username: "elon",
          avatarURL: `${commonURL}/1_bkfj1j.jpg`,
        },
        {
          _id: uuid(),
          firstName: "Parul",
          lastName: "Gupta",
          username: "parul",
          avatarURL: `${commonURL}/6_j6gf77.jpg`,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Parul",
        lastName: "Gupta",
        username: "parul",
        text: "THE GREATEST OF ALL TIME ",
        avatarURL: `${commonURL}/6_j6gf77.jpg`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    firstName: "Lionel",
    lastName: "Messi",
    username: "lionel",
    avatarURL: `${commonURL}/messi_r2rtio.jpg`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
      "When I found the ball, I found joy & my dream started. Start yours.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Cristiano",
          lastName: "Ronaldo",
          username: "cristiano",
          avatarURL: `${commonURL}/ronaldo_um79px.jpg`,
        },
        {
          _id: uuid(),
          firstName: "Sunil",
          lastName: "Chhetri",
          username: "sunil",
          avatarURL: `${commonURL}/sunil_chhetri_e2l4hm.jpg`,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Sunil",
        lastName: "Chhetri",
        username: "sunil",
        text: "Mine also started",
        avatarURL: `${commonURL}/sunil_chhetri_e2l4hm.jpg`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Parul",
    lastName: "Gupta",
    username: "parul",
    avatarURL: `${commonURL}/6_j6gf77.jpg`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
      "Day 82 of #100ofcode, Today I learn redux-toolkit and implement in my social media app",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Bill",
          lastName: "Gates",
          username: "bill",
          avatarURL: `${commonURL}/3_ytjgwu.jpg`,
        },
        {
          _id: uuid(),
          firstName: "Shivya",
          lastName: "Nath",
          username: "shivya",
          avatarURL: `${commonURL}/shivya_nath_apojz3.jpg`,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Bill",
        lastName: "Gates",
        username: "bill",
        text: "Awesome",
        avatarURL: `${commonURL}/3_ytjgwu.jpg`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Shivya",
    lastName: "Nath",
    username: "shivya",
    avatarURL: `${commonURL}/shivya_nath_apojz3.jpg`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
      "Wow, Canada's Prince Edward Island just opened a spectacular 435-mile walking route circumnavigating the entire island",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Jeff",
          lastName: "Bezos",
          username: "jeff",
          avatarURL: `${commonURL}/5_azirpx.jpg`,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Jeff",
        lastName: "Bezos",
        username: "jeff",
        text: "I will love to walk in this island.",
        avatarURL: `${commonURL}/5_azirpx.jpg`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    firstName: "Sunil",
    lastName: "Chhetri",
    username: "sunil",
    avatarURL: `${commonURL}/sunil_chhetri_e2l4hm.jpg`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
      "What a moment for Indian sport - we are Thomas Cup champions for the first ever time, and we beat the best to make it happen.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Cristiano",
          lastName: "Ronaldo",
          username: "cristiano",
          avatarURL: `${commonURL}/ronaldo_um79px.jpg`,
        },
        {
          _id: uuid(),
          firstName: "Lionel",
          lastName: "Messi",
          username: "lionel",
          avatarURL: `${commonURL}/messi_r2rtio.jpg`,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Lionel",
        lastName: "Messi",
        username: "lionel",
        text: "Congratulations",
        avatarURL: `${commonURL}/messi_r2rtio.jpg`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
