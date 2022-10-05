export default interface IUser {
  picSrc: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  country: string;
  city: string;
  contactInfo: {
    mobile: string;
    address: string;
  };
}
