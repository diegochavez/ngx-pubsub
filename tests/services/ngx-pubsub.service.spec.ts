import { inject, TestBed } from '@angular/core/testing';

import { PubSubService } from './../../ngx-pubsub';

describe('PubSubService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PubSubService
            ]
        });
    });

    it('Should recieve the event from publish', (done)=>{

        const trigger = (data:any) => {
            expect(data.data).toEqual('test');
            done();  
        }

        const pubSub = new PubSubService;

        pubSub.subscribe('Test', trigger);
        pubSub.publish('Test', {data: 'test'});

        }
        
    );

    it('Should unsubscribe', (done)=>{
        
                const trigger = (data: any) => {
                    expect(data.data).toEqual('test');
                    done();  
                }
        
                const pubSub = new PubSubService;
        
                pubSub.subscribe('Test', trigger);
                pubSub.unsubscribe('Test', trigger);
                pubSub.publish('Test', {data: 'error'});
                setTimeout(()=> {
                    expect('unsubscribed').toEqual('unsubscribed');
                    done();  
                }, 2000);
                }
                
    );


    it('Should subscribe once', (done)=>{
        
                const trigger = (data: any) => {
                    expect(data.data).toEqual('test');
                    done();  
                }
        
                const pubSub = new PubSubService;
        
                pubSub.subscribeOnce('Test', trigger);
                pubSub.publish('Test', {data: 'test'});

                }
                
    );

});
