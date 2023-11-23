export type UserType = {
  id: number;
  name: string;
  email: string;
  address: {
    // street: "Kulas Light",
    // suite: "Apt. 556",
    city: string;
    // zipcode: "92998-3874",
    // geo: {
    //   lat: "-37.3159",
    //   lng: "81.1496",
    // },
  };
  // phone: "1-770-736-8031 x56442",
  // website: "hildegard.org",
  company: {
    name: string;
    // catchPhrase: "Multi-layered client-server neural-net",
    // bs: "harness real-time e-markets",
  };
};

export type AddUserType = Omit<UserType, "id">;
