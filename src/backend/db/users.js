import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

const commonURL = "http://res.cloudinary.com/dwhran9qg/image/upload/avatar";

export const users = [
  {
    _id: uuid(),
    firstName: "Parul",
    lastName: "Gupta",
    username: "parul",
    password: "parul123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/6_j6gf77.jpg`,
    following: [
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "Musk",
        username: "elon",
        avatarURL: `${commonURL}/1_bkfj1j.jpg`,
      },
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
      {
        _id: uuid(),
        firstName: "Shivya",
        lastName: "Nath",
        username: "shivya",
        avatarURL: `${commonURL}/shivya_nath_apojz3.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Sunil",
        lastName: "Chhetri",
        username: "sunil",
        avatarURL: `${commonURL}/sunil_chhetri_e2l4hm.jpg`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Lionel",
        lastName: "Messi",
        username: "lionel",
        avatarURL: `${commonURL}/messi_r2rtio.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Shivya",
        lastName: "Nath",
        username: "shivya",
        avatarURL: `${commonURL}/shivya_nath_apojz3.jpg`,
      },
    ],
    bookmarks: [],
    about: "When I do coding, I found joy & my dream started.",
    website: "https://www.parulgupta.com/",
  },

  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "Musk",
    username: "elon",
    password: "elonmusk",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/1_bkfj1j.jpg`,
    following: [
      {
        _id: uuid(),
        firstName: "Cristiano",
        lastName: "Ronaldo",
        username: "cristiano",
        avatarURL: `${commonURL}/ronaldo_um79px.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Parul",
        lastName: "Gupta",
        username: "parul",
        avatarURL: `${commonURL}/6_j6gf77.jpg`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Sunil",
        lastName: "Chhetri",
        username: "sunil",
        avatarURL: `${commonURL}/sunil_chhetri_e2l4hm.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Bill",
        lastName: "Gates",
        username: "bill",
        avatarURL: `${commonURL}/3_ytjgwu.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Parul",
        lastName: "Gupta",
        username: "parul",
        avatarURL: `${commonURL}/6_j6gf77.jpg`,
      },
    ],
    bookmarks: [],
    about: "Let's go to Mars",
    website: "https://www.tesla.com/",
  },

  {
    _id: uuid(),
    firstName: "Cristiano",
    lastName: "Ronaldo",
    username: "cristiano",
    password: "cristianoronaldo",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/ronaldo_um79px.jpg`,
    following: [
      {
        _id: uuid(),
        firstName: "Shivya",
        lastName: "Nath",
        username: "shivya",
        avatarURL: `${commonURL}/shivya_nath_apojz3.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Jeff",
        lastName: "Bezos",
        username: "jeff",
        avatarURL: `${commonURL}/5_azirpx.jpg`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Sunil",
        lastName: "Chhetri",
        username: "sunil",
        avatarURL: `${commonURL}/sunil_chhetri_e2l4hm.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Mark",
        lastName: "Zuckerberg",
        username: "mark",
        avatarURL: `${commonURL}/mark_yhyceh.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Parul",
        lastName: "Gupta",
        username: "parul",
        avatarURL: `${commonURL}/6_j6gf77.jpg`,
      },
    ],
    bookmarks: [],
    about: "Nothing is Imposible",
    website: "https://www.cristianoronaldo.com/#cr7",
  },

  {
    _id: uuid(),
    firstName: "Lionel",
    lastName: "Messi",
    username: "lionel",
    password: "leomessi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/messi_r2rtio.jpg`,
    following: [
      {
        _id: uuid(),
        firstName: "Bill",
        lastName: "Gates",
        username: "bill",
        avatarURL: `${commonURL}/3_ytjgwu.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Jeff",
        lastName: "Bezos",
        username: "jeff",
        avatarURL: `${commonURL}/5_azirpx.jpg`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Parul",
        lastName: "Gupta",
        username: "parul",
        avatarURL: `${commonURL}/6_j6gf77.jpg`,
      },
    ],
    bookmarks: [],
    about: "Keep moving towards your dreams",
    website: "https://messi.com/en/",
  },

  {
    _id: uuid(),
    firstName: "Shivya",
    lastName: "Nath",
    username: "shivya",
    password: "shivyanath",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/shivya_nath_apojz3.jpg`,
    following: [
      {
        _id: uuid(),
        firstName: "Sunil",
        lastName: "Chhetri",
        username: "sunil",
        avatarURL: `${commonURL}/sunil_chhetri_e2l4hm.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Lionel",
        lastName: "Messi",
        username: "lionel",
        avatarURL: `${commonURL}/messi_r2rtio.jpg`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "Musk",
        username: "elon",
        avatarURL: `${commonURL}/1_bkfj1j.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Mark",
        lastName: "Zuckerberg",
        username: "mark",
        avatarURL: `${commonURL}/mark_yhyceh.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Parul",
        lastName: "Gupta",
        username: "parul",
        avatarURL: `${commonURL}/6_j6gf77.jpg`,
      },
    ],
    bookmarks: [],
    about: "Placing conservation & communities at the heart of travel.",
    website: "https://the-shooting-star.com/",
  },

  {
    _id: uuid(),
    firstName: "Sunil",
    lastName: "Chhetri",
    username: "sunil",
    password: "sunilchhetri",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/sunil_chhetri_e2l4hm.jpg`,
    following: [
      {
        _id: uuid(),
        firstName: "Cristiano",
        lastName: "Ronaldo",
        username: "cristiano",
        avatarURL: `${commonURL}/ronaldo_um79px.jpg`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Parul",
        lastName: "Gupta",
        username: "parul",
        avatarURL: `${commonURL}/6_j6gf77.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "Musk",
        username: "elon",
        avatarURL: `${commonURL}/1_bkfj1j.jpg`,
      },
    ],
    bookmarks: [],
    about: "My life revolves around Football",
    website: "https://www.bengalurufc.com/player/sunil-chhetri/",
  },

  {
    _id: uuid(),
    firstName: "Sundar",
    lastName: "Pichai",
    username: "sundar",
    password: "pichaisundar",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/sundar_pichai_xikclb.jpg`,
    following: [
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "Musk",
        username: "elon",
        avatarURL: `${commonURL}/Elon_Musk_at8nqr.jpg`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Mark",
        lastName: "Zuckerberg",
        username: "mark",
        avatarURL: `${commonURL}/mark_yhyceh.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Sunil",
        lastName: "Chhetri",
        username: "sunil",
        avatarURL: `${commonURL}/sunil_chhetri_e2l4hm.jpg`,
      },
    ],
    bookmarks: [],
    about: "Funding the future of tech",
    website: "https://sundarpichai.in",
  },

  {
    _id: uuid(),
    firstName: "Mark",
    lastName: "Zuckerberg",
    username: "mark",
    password: "zuckermark",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/mark_yhyceh.jpg`,
    following: [
      {
        _id: uuid(),
        firstName: "Sunil",
        lastName: "Chhetri",
        username: "sunil",
        avatarURL: `${commonURL}/sunil_chhetri_e2l4hm.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Lionel",
        lastName: "Messi",
        username: "lionel",
        avatarURL: `${commonURL}/messi_r2rtio.jpg`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "Musk",
        username: "elon",
        avatarURL: `${commonURL}/Elon_Musk_at8nqr`,
      },
      {
        _id: uuid(),
        firstName: "Lionel",
        lastName: "Messi",
        username: "lionel",
        avatarURL: `${commonURL}/messi_r2rtio.jpg`,
      },
    ],
    bookmarks: [],
    about: "funding one startup at a time",
    website: "https://chanzuckerberg.com",
  },

  {
    _id: uuid(),
    firstName: "Bill",
    lastName: "Gates",
    username: "bill",
    password: "gatesbill",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/3_ytjgwu.jpg`,
    following: [
      {
        _id: uuid(),
        firstName: "Sunil",
        lastName: "Chhetri",
        username: "sunil",
        avatarURL: `${commonURL}/sunil_chhetri_e2l4hm.jpg`,
      },
    ],
    followers: [
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
    bookmarks: [],
    about:
      "Sharing things I'm learning through my foundation work and other interests",
    website: "https://www.gatesnotes.com/",
  },

  {
    _id: uuid(),
    firstName: "Jeff",
    lastName: "Bezos",
    username: "jeff",
    password: "bezosjeff",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/5_azirpx.jpg`,
    following: [
      {
        _id: uuid(),
        firstName: "Parul",
        lastName: "Gupta",
        username: "parul",
        avatarURL: `${commonURL}/6_j6gf77.jpg`,
      },
    ],
    followers: [
      {
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
    bookmarks: [],
    about:
      "Amazon. Blue Origin. Washington Post. Bezos Earth Fund. Bezos Academy.",
    website: "https://hoo.be/jeffbezos",
  },
];
