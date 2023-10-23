export type User = {
  id: 1,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: {
      lat: number,
      lng: number
    }
  },
  phone: number,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
};

export type Users = {
  users:User[]
};

export type Article = {
  id:string,
  title:string,
  body:string
};

export type ArticlesType = {
  Articles:Article[]
};
