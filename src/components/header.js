

// const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

// }

// const headerAppender = (selector) => {
//   // TASK 2
//   // ---------------------
//   // Implement this function taking a css selector as its only argument.
//   // It should create a header using the Header component above, passing arguments of your choosing.
//   // It should append the header to the element in the DOM that matches the given selector.
//   //
// }

// export { Header, headerAppender }

// function Header({ title, today, temperature}) {

//   const header = document.createElement('div');
//   const date = document.createElement('span');
//   const title = document.createElement('h1');
//   const temp = document.createElement('span');

//   header.classList.add('header');
//   date.classList.add('header date');
//   title.classList.add('header h1');
//   temp.classList.add('header temp');

//   date.textContent = today;
//   title.textContent = heading;
//   temp.textContent = temperature;

//   header.appendChild(date);
//   header.appendChild(title);
//   header.appendChild(temp);

//   return header;
// }

// const headerAppender = document.querySelector('.header-container');
// headerAppender.appendChild(Header('Birthday', 'October 29, 2012', '85'));

const Header = (day, temperature) => {

  const header = document.createElement('div');
  const date = document.createElement('span');
  const heading = document.createElement('h1');
  const temp = document.createElement('span');

  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  date.textContent = day;
  temp.textContent = temperature;

  header.appendChild(date);
  header.appendChild(heading);
  header.appendChild(temp);

  return header;
}

const headerAppender = document.querySelector('.header-container');