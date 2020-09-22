import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-build/us-central1/api",
  // THIS API [cloud fucntion] URL. Right now Due to free plan
  // in firebase it is not possible to deploy backend into cloud functions
  // in firebase. So When you change the plan to BLAZE just write the below command
  //on the terminal in order to deploy backend.
  //1. firebase deploy --only functions
  // After doing this you will get a url to call the API and
  // paste that API in the baseURL above
  // firebase emulators:start { this is to run backend inorder to test our app since backend is not deployed on cloud functions this will help to run app}
});

export default instance;
