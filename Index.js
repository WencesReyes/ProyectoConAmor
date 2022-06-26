const images= {
  bella: {
    path: './assets/bella.jpeg',
    description: 'Mi bella durmiente, amo tu sonrisa.'
  },
  amor: {
    path: './assets/amor.jpeg',
    description: 'Preciosa, que no daría por un beso de mi corazón.'
  },
  bonita: {
    path: './assets/bonita.jpeg',
    description: 'Me encantas por ser como eres, así tal cual tú.'
  },
  hermosa: {
    path: './assets/hermosa.jpeg',
    description: 'Eres tan hermosa, por dentro y por fuera, por eso me enamoraste.'
  },
  familia: {
    path: './assets/familia.jpeg',
    description: 'Me encanta verte así de feliz.'
  },
  default: {
    path: './assets/default.png',
    description: 'Buscame, solo tengo fotos hermosas!!'
  }
}

const imgPatterns = {
  bella: 'mi bella durmiente',
  amor: 'corazoncito wens',
  bonita: 'bonita hermosa',
  hermosa: 'eres mi cielo',
  familia: 'siempre sonrie bonita'
}

const img = document.getElementById('love-img');
const imgDescription = document.getElementById('love-img-description');
const searchBox = document.getElementById('love-searchbox');

const setImageAttributes = (path, description)  => {
  if(path !== images.default.path)
  {
    img.classList.add('transitioning-src');
    setTimeout(() => {
      img.classList.remove('transitioning-src');
      img.setAttribute('src', path);
      imgDescription.innerText = description;
    }, 400); 
  }
  else{
      img.setAttribute('src', path);
      imgDescription.innerText = description;
  }
}

searchBox.addEventListener('input', ({ target: { value } }) => {
  if(value)
  {
    if (imgPatterns.bonita == value)
    {
      setImageAttributes(images.bonita.path, images.bonita.description);
      return;
    } 
    else if (imgPatterns.amor == value)
    {
      setImageAttributes(images.amor.path, images.amor.description);
      return;
    }
    else if (imgPatterns.bella == value)
    {
      setImageAttributes(images.bella.path, images.bella.description);
      return;
    }
    else if (imgPatterns.hermosa == value)
    {
      setImageAttributes(images.hermosa.path, images.hermosa.description);
      return;
    }
    else if (imgPatterns.familia == value)
    {
      setImageAttributes(images.familia.path, images.familia.description);
      return;
    }
  }
  setImageAttributes(images.default.path, images.default.description);
})