export interface TProject {
  title: string;
  live_link: string;
  client_link: string;
  server_link: string;
  description: string;
  technology: string;
  image: string;
  author: {
    email: string;
    image: string;
    name: string;
  };
}
