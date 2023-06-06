'use strict';

// Object Of Protos
const bookProtos = {
  getSummary() {
    return `${this.title} was written by: ${this.author} in ${this.year}`;
  },
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

// Create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = '1994';

const book1 = Object.create(bookProtos, {
  title: { value: 'Book One' },
  author: { value: 'John Doe' },
  year: { value: '1994' },
});

console.log(book1);
