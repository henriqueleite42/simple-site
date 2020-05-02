interface MessageInterface {
  text: string;
  to: string;
  from: string;
  service: string;
  image: string;
  sendTime: Date;
  reciveTime: Date | null;
  readTime: Date | null;
}

const messages: Array<MessageInterface> = [
  {
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flokeshdhakar.com%2Fprojects%2Flightbox2%2Fimages%2Fimage-3.jpg&f=1&nofb=1",
    text: `adsadsas
    dadsasda dads ads
    addasdaadsadsads
    dasdaada dad adsad a
    adaaddsasadsad asd a asd ada sdd
    dsaasdds  dsa
    dsdsa`,
    to: "",
    from: "USER_ID",
    service: "",
    sendTime: new Date(),
    reciveTime: null,
    readTime: null
  },
  {
    image: "",
    text: `adsadsas
    dadsasda dads ads
    addasdaadsadsads
    dasdaada dad adsad a
    adaaddsasadsad asd a asd ada sdd
    dsaasdds  dsa
    dsdsa`,
    to: "",
    from: "no",
    service: "",
    sendTime: new Date(),
    reciveTime: null,
    readTime: null
  },
  {
    image: "",
    text: `adsadsas
    dadsasda dads ads
    addasdaadsadsads
    dasdaada dad adsad a
    adaaddsasadsad asd a asd ada sdd
    dsaasdds  dsa
    dsdsa`,
    to: "",
    from: "USER_ID",
    service: "",
    sendTime: new Date(),
    reciveTime: null,
    readTime: null
  },
  {
    image: "",
    text: `adsadsas
    dadsasda dads ads
    addasdaadsadsads
    dasdaada dad adsad a
    adaaddsasadsad asd a asd ada sdd
    dsaasdds  dsa
    dsdsa`,
    to: "",
    from: "USER_ID",
    service: "",
    sendTime: new Date(),
    reciveTime: null,
    readTime: null
  }
];

export default messages;
