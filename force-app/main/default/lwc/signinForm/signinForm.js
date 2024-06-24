import { LightningElement } from 'lwc';
import METRONIC_LOGO from '@salesforce/resourceUrl/metronic';
import GOOLE_LOGO from '@salesforce/resourceUrl/google';

export default class SigninForm extends LightningElement {
     email = '';
     password = '';
    metroniclogo = METRONIC_LOGO;
    googlelogo = GOOLE_LOGO;


    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handlePasswordChange(event) {
        this.password = event.target.value;
    }

    handleSignIn() {
        console.log('Email:', this.email);
        console.log('Password:', this.password);
    }

    get languageOptions() {
        return [
            { label: 'English', value: 'en' },
            { label: 'Spanish', value: 'es' },
        ];
    }

}
