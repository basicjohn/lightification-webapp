import axios from "axios";

class LightificationClient {
  public static async put(endPoint: string): Promise<any>{
    const api = axios.create({
      baseURL: "http://${this.state.hubIp}/api/",
    });
    let output: any;
    await api.get(endPoint)
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
    return output;
  }
  // notificationType1 = () => {
  //   fetch(`http://${this.state.hubIp}/api/${this.state.username}/lights/${this.state.selectedLight}/state`, {
  //     method: 'PUT',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "on": true,
  //       "bri": 5,
  //       "transitiontime": 10
  //     }),
  //     // options: {timeout: 1000}
  //   })
  //   .then(response => response.json())
  //   .then(
  //     (jsonifiedResponse) => {
  //       console.log(jsonifiedResponse);
  //       this.setState({
  //         isLoaded: true,
  //       });
  //     })
  //     .then(
  //       fetch(`http://${this.state.hubIp}/api/${this.state.username}/lights/${this.state.selectedLight}/state`, {
  //         method: 'PUT',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({
  //           "on": true,
  //           "bri": 200,
  //           "transitiontime": 15
  //         })
  //       })
  //     )
  //       .catch((error) => {
  //       this.setState({
  //         isLoaded: true,
  //         error 
  //       });
  //     }
  //   );
  // }
 


}
export default LightificationClient;