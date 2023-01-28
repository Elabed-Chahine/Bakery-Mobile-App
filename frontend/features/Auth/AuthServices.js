import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const register = async (userData) => {

    const response = await axios.post(
      "http://192.168.1.124:5000/api/users/register",
      userData
    ); 

    if(response.data){
       await AsyncStorage.setItem("user", JSON.stringify(response.data));

        return response.data
    }

}



const edit= async (userData)=>{
    const response= await axios.post("http://192.168.1.124:5000/api/users/update",userData)

    if(response.data){
       await AsyncStorage.setItem("user", JSON.stringify(response.data));

       return response.data;
    }
}




const login = async (userData) => {
  const response =
    /* axios.post("http://localhost:5000/api/users/login",userData).then((credentials) => {alert(credentials.username)}).catch((err) => {alert(err)}) */ await axios.post(
      "http://192.168.1.124:5000/api/users/login",
      userData
    );

  if (response.data) {
   await  AsyncStorage.setItem("user", JSON.stringify(response.data));
    
    return response.data;
  }
};


const logout = async()=>{
    await AsyncStorage.removeItem("user");
}



  const authService = {
    register,
    login,
    logout,
    edit,
     

}

export default authService;