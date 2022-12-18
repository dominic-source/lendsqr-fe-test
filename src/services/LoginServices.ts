import axios from 'axios';

const serverUrl = 'http://localhost:3002';

export class LoginService {

    public async login(email: string, password: string): Promise<boolean>{
        try{
            const loginResponse = await axios.post(
                (serverUrl + '/login'), 
                {
                    'username': email,
                    'password': password
                }
            );
            console.log("i got here yesterday")
            
            if(loginResponse.status === 200){
                console.log('Successful login');
                return true;
            } else {
                console.log('Un-successful login');
                return false;
            }
        } catch(error:any) {
            console.log("i got here today")
            console.error(error.message);
            return false;
        }
    }
}

