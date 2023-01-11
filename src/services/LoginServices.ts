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
           
            if(loginResponse.status === 200){
                console.log('Successful login');
                return loginResponse.data;
            } else {
                console.log('Un-successful login');
                return false;
            }
        } catch(error:any) {
            console.error(error.message);
            return false;
        }
    }
}

