import axios from "axios"

class HelloWorldService {

    executeHelloWorldService(){
        //console.log('executed service')
        axios.get('http://localhost:8090//hello-world');
        
    }

}

export default new HelloWorldService()