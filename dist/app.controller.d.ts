import { PusherService } from './pusher/pusher.service';
export declare class AppController {
    private pusherService;
    constructor(pusherService: PusherService);
    messages(pseudo: string, message: string): Promise<any[]>;
}
