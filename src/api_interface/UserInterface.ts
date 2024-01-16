
interface UserModelInterface {
    UserID: number,
    UserName: string,
    UserToken: string
}

export let CurrentUserData: UserModelInterface = {UserID: -1,UserName:"",UserToken:""};


export async function Login(email: string, password:string){


    console.log(email, password)
    return {BackEndResponseStatus: 200, UserID: 123};

 /*     await fetch('/myserver.endpoint', {
        method: 'POST',
        body: JSON.stringify({email,password}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
         .then((response) => response.json())
         .then((data) => {
            GetLogin(data.UserID);            
         })
         .catch((err) => {
            console.log(err.message);
         }); */
}

export async function GetLogin(UserID: number) {

   console.log(UserID);

    CurrentUserData = {UserID: 123, UserName: "TestUser", UserToken: "TestTokenValid-X-AmoutTime"};
    return CurrentUserData;

/*     await fetch('https://api.example.com/data?userID='+UserID)
    .then(response => response.json())
    .then(UserInfo => SetUser(UserInfo))
    .catch(error => console.error(error)); */
}

export async function Register(name: string, email: string, password:string){

   console.log(email,name,password);

    return {BackEndResponseStatus: 200, UserID: 123};

    /* await fetch('/myserver.endpoint', {
        method: 'POST',
        body: JSON.stringify({name,email,password}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
         .then((response) => response.json())
         .then((data) => {
            return data;            
         })
         .catch((err) => {
            console.log(err.message);
         }); */
} 