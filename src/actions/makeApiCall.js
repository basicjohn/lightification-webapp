
// import { REQUEST_PARKS, GET_PARKS_FAILURE, GET_PARKS_SUCCESS } from './../actions/actions'

// export const requestParks = () => ({ type: REQUEST_PARKS })
// export const getParksSuccess = parks => ({ type: GET_PARKS_SUCCESS, parks })
// export const getParksFailure = error => ({ type: GET_PARKS_FAILURE, error })

// const makeApiGetCall = (parkType = null, parkName = null, established = null) => {
//   // console.log('api call made', parkType, parkName, established)

//   let url = 'http://localhost:5000/api/Parks'
//   if (parkType || parkName || established) url += '?'
//   if (parkType) url += 'parkType=' + parkType + '&'
//   if (parkName) url += 'parkName=' + parkName + '&'
//   if (established) url += 'established=' + established

//   return dispatch => {
//     dispatch(requestParks);
//     return fetch(url)
//       .then(response => response.json())
//       .then(jsonResponse => {
//         dispatch(getParksSuccess(jsonResponse))
//       })
//       .catch(err => {
//         dispatch(getParksFailure(err))
//       })
//   }
// }


// export default makeApiGetCall


  postSelectedLightTest = (lightId) => {
    fetch(`http://${this.state.hubIp}/api/${this.state.username}/lights/${lightId}/state`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "on": true,
        "bri": 254,
        "transitiontime": 0
      })
    })
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log(jsonifiedResponse);
      })
    .catch((error) => {
      console.log(error);
    });
  }