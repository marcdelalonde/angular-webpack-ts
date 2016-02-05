export class AppController {
  public value: string;
  public users: Array<Object>;

  constructor() {
    this.value = 'valuem';
    this.users = [{
      firstname: 'John',
      lastname: 'Doe',
      thumb: 'https://s3.amazonaws.com/uifaces/faces/twitter/ritu/128.jpg'
    },
    {
      firstname: 'John',
      lastname: 'Doe',
      thumb: 'https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg'
    },
    {
      firstname: 'John',
      lastname: 'Doe',
      thumb: 'https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg'
    },
    {
      firstname: 'John',
      lastname: 'Doe',
      thumb: 'https://s3.amazonaws.com/uifaces/faces/twitter/mattsince87/128.jpg'
    },
    {
      firstname: 'John',
      lastname: 'Doe',
      thumb: 'https://s3.amazonaws.com/uifaces/faces/twitter/motherfuton/128.jpg'
    },
    {
      firstname: 'John',
      lastname: 'Doe',
      thumb: 'https://s3.amazonaws.com/uifaces/faces/twitter/peterlandt/128.jpg'
    }];
  }
}