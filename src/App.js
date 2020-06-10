import React from 'react';
import './style/App.scss';
import Header from './Header.js';

function App() {

  const books = [
    {
      id: 0,
      title: "So You Want to Talk About Race",
      author: "Ijeoma Oluo",
      bookCover: "so-you-want-to-talk-about-race.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/35099718-so-you-want-to-talk-about-race",
    },
    {
      id: 1,
      title: "Me and White Supremacy",
      author: "Layla F. Saad",
      bookCover: "me-and-white-supremecy.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/46002342-me-and-white-supremacy?from_search=true&from_srp=true&qid=q8owe7gd3S&rank=1",
    },
    {
      id: 2,
      title: "How to be an Anti-Racist",
      author: "Ibram X. Kendi",
      bookCover: "how-to-be-an-anti-racist.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/40265832-how-to-be-an-antiracist",
    },
    {
      id: 3,
      title: "Medical Apartheid",
      author: "Harriest A. Washington",
      bookCover: "medical-apartheid.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/114192.Medical_Apartheid?ac=1&from_search=true&qid=NkR2fmqQxX&rank=1",
    },
    {
      id: 4,
      title: "The Fire Next Time",
      author: "James Baldwin",
      bookCover: "the-fire-next-time.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/464260.The_Fire_Next_Time?from_search=true&from_srp=true&qid=UfzMTi6fdv&rank=1",
    },
    {
      id: 5,
      title: "Bad Feminist",
      author: "Roxane Gay",
      bookCover: "bad-feminist.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/18813642-bad-feminist?ac=1&from_search=true&qid=oIn3XjqYYb&rank=1",
    },
    {
      id: 6,
      title: "The Bluest Eye",
      author: "Toni Morrison",
      bookCover: "the-bluest-eye.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/11337.The_Bluest_Eye?ac=1&from_search=true&qid=70QU5BkD03&rank=1",
    },
    {
      id: 7,
      title: "When they Call You a Terrorist",
      author: "Asha Bandele & Patrisse Cullors",
      bookCover: "when-they-call-you-a-terrorist.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/34964998-when-they-call-you-a-terrorist?ac=1&from_search=true&qid=uVSKPv7dNA&rank=1",
    },
    {
      id: 8,
      title: "White Rage",
      author: "Carol Anderson",
      bookCover: "white-rage.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/26073085-white-rage?ac=1&from_search=true&qid=ZwkF1Gz3sm&rank=1",
    },
    {
      id: 9,
      title: "The Wretched of the Earth",
      author: "Frantz Fanon",
      bookCover: "the-wretched-of-the-earth.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/66933.The_Wretched_of_the_Earth?from_search=true&from_srp=true&qid=QuqUu0UI0V&rank=1",
    },
    {
      id: 10,
      title: "Why I'm No Longer Talking to White People About Race",
      author: "Reni Eddo-Lodge",
      bookCover:
        "why-im-no-longer-talking-to-white-people-about-race.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/33606119-why-i-m-no-longer-talking-to-white-people-about-race?ac=1&from_search=true&qid=efJMPCKGEd&rank=1",
    },
    {
      id: 11,
      title: "The New Jim Crow",
      author: "Michelle Alexander",
      bookCover: "the-new-jim-crow.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/6792458-the-new-jim-crow?ac=1&from_search=true&qid=dZxKbe5Ytt&rank=1",
    },
    {
      id: 12,
      title: "Between the World and Me",
      author: "Ta-Nehisi Coates",
      bookCover: "between-the-world-and-me.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/25489625-between-the-world-and-me?ac=1&from_search=true&qid=rvBNkw5wzT&rank=1",
    },
    {
      id: 13,
      title: "Citizen",
      author: "Claudia Rankine",
      bookCover: "citizen.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/20613761-citizen?ac=1&from_search=true&qid=E1E8IHpeRO&rank=2",
    },
    {
      id: 14,
      title: "Ain't I a Woman?",
      author: "Bell Hooks",
      bookCover: "aint-i-a-woman.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/250792.Ain_t_I_a_Woman?ac=1&from_search=true&qid=hDCY8HduJn&rank=1",
    },
    {
      id: 15,
      title: "Eloquent Rage",
      author: "Brittney Cooper",
      bookCover: "eloquent-rage.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/33574165-eloquent-rage?ac=1&from_search=true&qid=hpNhXNFr61&rank=1",
    },
    {
      id: 16,
      title: "I'm Still Here",
      author: "Austin Channing Brown",
      bookCover: "im-still-here.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/35883430-i-m-still-here?ac=1&from_search=true&qid=ikmGnfe0Nq&rank=1",
    },
    {
      id: 17,
      title: "I Know why the Caged Bird Sings",
      author: "Maya Angelou",
      bookCover: "i-know-why-the-caged-bird-sings.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/13214.I_Know_Why_the_Caged_Bird_Sings?ac=1&from_search=true&qid=cIB0HIUWUM&rank=1",
    },
    {
      id: 18,
      title: "Fearing the Black Body",
      author: "Sabrina Stings",
      bookCover: "fearing-the-black-body.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/42129163-fearing-the-black-body?ac=1&from_search=true&qid=WB8DfUcdLq&rank=1",
    },
    {
      id: 19,
      title: "Sister Outsider",
      author: "Audre Lord",
      bookCover: "sister-outside.jpeg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/32951.Sister_Outsider?ac=1&from_search=true&qid=SsQBhXrSBN&rank=1",
    },
    {
      id: 20,
      title: "Stamped from the Beginning",
      author: "Ibram X. Kendi",
      bookCover: "stamped-from-the-beginning.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/25898216-stamped-from-the-beginning?ac=1&from_search=true&qid=aOlAnIw5bD&rank=1",
    },
    {
      id: 21,
      title: "The Condemnation of Blackness",
      author: "Khalil Gibran Muhammad",
      bookCover: "the-condemnation-of-blackness.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/7093931-the-condemnation-of-blackness?ac=1&from_search=true&qid=bGFEAPcWOl&rank=1",
    },
    {
      id: 22,
      title: "Nobody",
      author: "Marc Lamont Hill",
      bookCover: "nobody.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/27274349-nobody?ac=1&from_search=true&qid=ORs1MQMLMH&rank=1",
    },
    {
      id: 23,
      title: "Blackballed",
      author: "Darryl Pinckney",
      bookCover: "blackballed.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/20447760-blackballed?ac=1&from_search=true&qid=UH1KnN0ww7&rank=3",
    },
    {
      id: 24,
      title: "The Warmth of Other Suns",
      author: "Isabel Wilkerson",
      bookCover: "the-warmth-of-other-suns.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/8171378-the-warmth-of-other-suns?ac=1&from_search=true&qid=mN5tVCf8q3&rank=1",
    },
    {
      id: 25,
      title: "The Autobiography of Malcom X",
      author: "Malcolm X",
      bookCover: "malcon-x.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/714314.The_Autobiography_of_Malcom_X?ac=1&from_search=true&qid=Oshf7AmxYU&rank=1",
    },
    {
      id: 26,
      title: "Killing Rage",
      author: "Bell Hooks",
      bookCover: "killing-rage.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/17602.Killing_Rage?ac=1&from_search=true&qid=iYfhL95W5C&rank=1",
    },
    {
      id: 27,
      title: "How we Get Free",
      author: "Keeanga-Yamahtta Taylor",
      bookCover: "how-we-get-free.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/34381451-how-we-get-free?ac=1&from_search=true&qid=4hVvOTXXiu&rank=1",
    },
    {
      id: 28,
      title: "Black Feminist Thought",
      author: "Patricia Hill Collins",
      bookCover: "black-feminist-thought.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/353598.Black_Feminist_Thought?ac=1&from_search=true&qid=7qRmVTfHNA&rank=1",
    },
    {
      id: 29,
      title: "Women, Race and Class",
      author: "Angela Y. Davis",
      bookCover: "women-race-and-class.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/635635.Women_Race_and_Class?ac=1&from_search=true&qid=fb00WZL12K&rank=1",
    },
    {
      id: 30,
      title: "Unapologetic",
      author: "Charlene Carruthers",
      bookCover: "unapologetic.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/37507272-unapologetic?ac=1&from_search=true&qid=GlHaH7Q5jx&rank=1",
    },
    {
      id: 31,
      title: "No Tea, No Shade",
      author: "E. Patrick Johnson",
      bookCover: "no-shade-no-tea.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/27882447-no-tea-no-shade?ac=1&from_search=true&qid=ZhjPc4jI0H&rank=1",
    },
    {
      id: 32,
      title: "The Hate U Give",
      author: "Angie Thomas",
      bookCover: "the-hate-u-give.jpg",
      goodReadsURL:
        "https://www.goodreads.com/book/show/32075671-the-hate-u-give?ac=1&from_search=true&qid=sXZtoiPc3G&rank=1",
    },
  ];

  return (
    <div className="App">
      <Header />
      <ul className="bookGallery wrapper">
      {books.map(book => {
        
        return (
          <a href={book.goodReadsURL} target="_blank" rel="noopener noreferrer">
            <li className="bookList"> 
              <span>{book.title}</span>
              <img src={require(`./assets/${book.bookCover}`)} alt={`Cover of ${book.title}, written by ${book.author}`} className="book"/>
            </li>
            </a>
        )
      })}
      </ul>

      <footer>© Made by <a href="https://reemh.dev" target="_blank" rel="noopener noreferrer">Reem H</a> w/ the help of <a href="https://www.kaystocks.com/">Kay E's</a> BLM <a href="https://docs.google.com/document/d/1lEaf83TOkNnkLFsJpADyQlHd7aR216enJdkRqJpfc5k/edit">resource list</a></footer>
    </div>  
  );
}

export default App;
