//SCRIPT COOKIES------------------
export default class Cookie{
    constructor(){
        this.cname="";
        this.cvalue="";
        this.exdays=0;
    }
    static getInstance(){
        return new Cookie();
    }
    setCookieName(cname){
        this.cname=cname;
    }
    setCookie(cname,cvalue,exdays) {
        this.cname=cname;
        this.cvalue=cvalue;
        this.exdays=exdays;
        const d = new Date();
        d.setTime(d.getTime() + (this.exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = this.cname + "=" + this.cvalue + ";" + expires + ";path=/";
    }
    getCookie() {
        let name = this.cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
        return "";
        }

}
