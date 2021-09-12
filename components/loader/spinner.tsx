import React from 'react';

class LoaderSpinner extends React.Component {
  render() {
    const length = [0, 1, 2, 3, 4, 5, 6, 7];
    return(
      <div className="lds-roller">
        {
          length.map(n => {
            return(
              <div key={n} />
            );
          })
        }
      </div>
    );
  }
}

export default LoaderSpinner;
