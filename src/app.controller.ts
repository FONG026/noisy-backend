import { Body, Controller,  Post } from '@nestjs/common';
import { PusherService } from './pusher/pusher.service';

@Controller('api')
export class AppController {
  constructor(private pusherService: PusherService){
    
  }
  
  @Post("messages")
  async messages(
    @Body("pseudo")pseudo: string,
    @Body("message")message: string
  )  {
   await this.pusherService.trigger("discussion","message",{pseudo,message});
   return[];
  }
}
 