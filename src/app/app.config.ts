export class AppConfig {
    public readonly apiUrl = 'https://vivevolarwebapi20180102094512.azurewebsites.net';
    public readonly roles : {[rol: string]: string[]} = {
        'Admin' : ['/flight'],
        'Customer': ['/search','/booking']
    };
};