import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';
@Injectable()
export class PusherService {
    pusher:Pusher;
    
    constructor(){
        
this.pusher = new Pusher({
  appId: "1311317",
  key: "91fc9a18db85a7249aab",
  secret: "b4bfbc9a92c567c0c36b",
  cluster: "eu",
  useTLS: true
});


    }
    async trigger(channel:string,event:string,data:any){ 
      await this.pusher.trigger(channel,event,data);  
    }
}
