import {Injectable, NgZone, WritableSignal, signal} from "@angular/core"
import { User } from "./user"
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/compat/storage";


@Injectable({
    providedIn: "root"
})
export class AuthService{
    userData: WritableSignal<User | null>;

    constructor(
        public afAuth: AngularFireAuth,
        public afs: AngularFirestore,
        public router: Router,
        public ngZone: NgZone,
        public afStorage: AngularFireStorage
    ) {
        this.userData = signal(null);

        this.afAuth.authState.subscribe(user => {
            if(user){
                this.SetUserData(user, false)
                localStorage.setItem('user', JSON.stringify(user));

            }else{
                this.userData.set(null);
            }
        })
    }

    SetUserData(user: any, isFirst: boolean): any{
        const data: User = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
            displayName: user.displayName
        }
        this.userData.set(data);
        
       if(isFirst){
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        return userRef.set(data, 
            {merge: true})
       }
    }

    SignIn(email:string, password: string){
        return this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
            this.SetUserData(result.user, false);
            this.router.navigate(['dashboard']);
            console.log("Logged In");
        }).catch(err => window.alert(err.message));
    }

    SignUp(username: string,email: string, password: string): any{
        if(!(username.length>=5 && username.length <= 20) || !(password.length >= 4 && password.length <= 12)){
            window.alert('Username & Password should be of length 6 and 12');
            return;
        }
        return this.afAuth.createUserWithEmailAndPassword(email, password).then(result => {
            if(result.user){
                result.user.updateProfile({displayName: username})
                this.SetUserData(result.user, true);
                this.router.navigate(['dashboard']);
            }
            
        }).catch(err => window.alert(err.message));
    }

    SignOut(){
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['']);
        })
    }

    SendForgotPasswordLink(){
        const data = this.userData();
        this.afAuth.sendPasswordResetEmail(data.email as string).then(result => {
            window.alert('Forgot Password Link has been sent check the mail box');
        }).catch(err => window.alert(err.message))
    }

    UploadImage(){
        const data = this.userData();
        const file = this.file();
        const fileRef = this.afStorage.ref(`dp/${data.uid}/${file.name}`)
        this.afStorage.upload(`dp/${data.uid}/`, file).then(async() => {
           fileRef.getDownloadURL().subscribe(url => {
               if(url){
                this.userData.set({...this.userData(), photoURL: url});
                window.alert("Uploaded successfully");
               }
           })
        })
    }

    file: WritableSignal<File | null> = signal(null);

    setFile(event){
        this.file.set(event.target.files[0])
    }
}