import react, { Component } from 'react';

class Main extends Component {
    render(){
      const styles = {
        main: {
          display:'flex',
          flexDirection:'column',
          alignItems: 'center',
          height: '100vh',
        }
      }
      
      return (
        <div style={styles.main}>
          <Main />
        </div>
      )
    }
  }

  export default Main