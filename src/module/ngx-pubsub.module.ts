import { PubSubService } from './../services/ngx-pubsub.service';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
    declarations: [
        // Pipes.
        // Directives.
    ],
    exports: [
        // Pipes.
        // Directives.
    ]
})
export class PubSubModule {

    /**
     * Use in AppModule: new instance of PubSubService.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: PubSubModule,
            providers: [PubSubService]
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of PubSubService.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: PubSubModule,
            providers: [PubSubService]
        };
    }

}