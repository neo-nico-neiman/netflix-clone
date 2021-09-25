import './App.scss';
import {TitleLarge, TitleMedium, TitleSmall, TitleXLarge} from './components';
import CategoryRow from './containers/CategoryRow';
import {Movie} from './models/movies.model';

function App() {

  const moviesList: Movie[] = [
    {
      imageURL: './images/thumbnails/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpeg',
      altText: 'Denise Jans',
      title: 'Denise Jans',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: ''
    },
    { 
      imageURL: './images/thumbnails/8Y43POKjjKDGI9MH89NW0NAzzp8.jpeg',
      altText: 'Popcorn Factory',
      title: 'Popcorn Factory',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: ''
    },
    { 
      imageURL: './images/thumbnails/byflnwPMumyvrCW9SfO5Miq3647.jpeg',
      altText: 'Once Upon A Movie',
      title: 'Once Upon A Movie',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: ''
    },
    { 
      imageURL: './images/thumbnails/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpeg',
      altText: 'Levitation',
      title: 'Levitation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: ''
    },
    { 
      imageURL: './images/thumbnails/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpeg',
      altText: 'Regal Solarium',
      title: 'Regal Solarium',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: ''
    },
    { 
      imageURL: './images/thumbnails/MDYanFolbT76dj0gsCbhS2GM5A.jpeg',
      altText: 'Regal Solarium',
      title: 'Regal Solarium',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: ''
    },
    { 
      imageURL: './images/thumbnails/uizrxdqIl1a4c9UIhSdPM3o6u0f.jpeg',
      altText: 'Regal Solarium',
      title: 'Regal Solarium',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: ''
    },
    { 
      imageURL: './images/thumbnails/vD8oPUpDUZDTGI5IVofxrUjxxUO.jpeg',
      altText: 'Regal Solarium',
      title: 'Regal Solarium',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: ''
    }
  ];
  return (
    <div className="App">
        <CategoryRow moviesList={moviesList} category='Action Movies'/>
    </div>
  );
}

export default App;
