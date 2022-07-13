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
    userBio: "When I do coding, I found joy & my dream started.",
    userWebsite: "https://www.parulgupta.com/",
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
    ],
    bookmarks: [],
    userBio: "Let's go to Mars",
    userWebsite: "https://www.tesla.com/",
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
    ],
    bookmarks: [],
    userBio: "Nothing is Imposible",
    userWebsite: "https://www.cristianoronaldo.com/#cr7",
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
    userBio: "Keep moving towards your dreams",
    userWebsite: "https://messi.com/en/",
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
    ],
    bookmarks: [],
    userBio: "Placing conservation & communities at the heart of travel.",
    userWebsite: "https://the-shooting-star.com/",
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
    userBio: "My life revolves around Football",
    userWebsite: "https://www.bengalurufc.com/player/sunil-chhetri/",
  },

  //   {
  //     _id: uuid(),
  //     firstName: "Garry",
  //     lastName: "Tan",
  //     username: "garry",
  //     password: "garrytan",
  //     createdAt: formatDate(),
  //     updatedAt: formatDate(),
  //     avatarURL: `${commonURL}/Garry_Tan_fxiool`,
  //     following: [
  //       {
  //         _id: uuid(),
  //         firstName: "Elon",
  //         lastName: "Musk",
  //         username: "elon",
  //         avatarURL: `${commonURL}/Elon_Musk_at8nqr.jpg`,
  //       },
  //     ],
  //     followers: [
  //       {
  //         _id: uuid(),
  //         firstName: "Naval",
  //         lastName: "Ravikant",
  //         username: "naval",
  //         avatarURL: `${commonURL}/Naval_Ravikant_gd3c2m`,
  //       },
  //       {
  //         _id: uuid(),
  //         firstName: "Peter",
  //         lastName: "Thiel",
  //         username: "peter",
  //         avatarURL: `${commonURL}/Peter_Thiel_fl6dtq`,
  //       },
  //     ],
  //     bookmarks: [],
  //     userBio: "Funding the future of tech",
  //     userWebsite: "https://www.youtube.com/c/GarryTan",
  //   },

  //   {
  //     _id: uuid(),
  //     firstName: "Peter",
  //     lastName: "Thiel",
  //     username: "peter",
  //     password: "peterthiel",
  //     createdAt: formatDate(),
  //     updatedAt: formatDate(),
  //     avatarURL: `${commonURL}/Peter_Thiel_fl6dtq`,
  //     following: [
  //       {
  //         _id: uuid(),
  //         firstName: "Rick",
  //         lastName: "Steves",
  //         username: "rick",
  //         avatarURL: `${commonURL}/Rick_Steves_gxlcrj`,
  //       },
  //       {
  //         _id: uuid(),
  //         firstName: "Garry",
  //         lastName: "Tan",
  //         username: "garry",
  //         avatarURL: `${commonURL}/Garry_Tan_fxiool`,
  //       },
  //     ],
  //     followers: [
  //       {
  //         _id: uuid(),
  //         firstName: "Elon",
  //         lastName: "Musk",
  //         username: "elon",
  //         avatarURL: `${commonURL}/Elon_Musk_at8nqr`,
  //       },
  //       {
  //         _id: uuid(),
  //         firstName: "Ryan Van",
  //         lastName: "Duzer",
  //         username: "ryan",
  //         avatarURL: `${commonURL}/Ryan_Van_Duzer_dlpd9o`,
  //       },
  //     ],
  //     bookmarks: [],
  //     userBio: "funding one startup at a time",
  //     userWebsite: "https://foundersfund.com/team/peter-thiel/",
  //   },
];
