import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.outroCachorro = this.outroCachorro.bind(this);
    this.state = {
      loading: true,
      urlImage: null,
    }
  }

  async urlFetch() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const jsonRes = await response.json();
    return jsonRes.message;
  }

  async componentDidMount() {
    const urlImage = await this.urlFetch();
    this.setState((prevState) => ({
      loading: !prevState.loading,
      urlImage: urlImage,
    }))
  }

  componentDidUpdate() {
    console.log('update')
  }

  async outroCachorro() {
    this.setState((prevState) => ({
      loading: !prevState.loading,
    }))
    const anotherlink = await this.urlFetch();
    this.setState((prevState) => ({
      loading: !prevState.loading,
      urlImage: anotherlink,
    }))
  }

  imgAndButton() {
    const { urlImage } = this.state;
    return(
      <section>
        <img src={ urlImage } alt='cute dog' />
        <button onClick = { this.outroCachorro }>Outro Cachorro</button>
      </section>
    )
  }

  render () {
    const { loading } = this.state;
    return(
      <div>
        { !loading ? this.imgAndButton() : 'loading...'}
      </div>
    );
  }
}

export default App;
