export type ContactForm = {
  name: string,
  email: string,
  subject?: string,
  message: string,
};

/*{
  name: string (min 2 chars),
  email: string (email format),
  subject?: string,
  message: string (min 10 chars)
}*/