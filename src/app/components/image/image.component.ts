import { AfterContentInit, Component, Input } from "@angular/core";

interface Source {
    path: string;
    media: string;
}

@Component({
    selector: "app-image",
    templateUrl: './image.component.html'
})
export class ImageComponent implements AfterContentInit {
    @Input() alt = '';
    @Input() path = '';
    sources: Source[] = []

    constructor(){}

    ngAfterContentInit(): void {
        this.generateSizes();
    }

    private generateSizes(){
        const splitPath = this.path.split('/');
        const fullName = splitPath.pop()
        const path = splitPath.join('/')
        const splitName = fullName?.split('.') ?? [];
        const extension = splitName.pop()
        const name = splitName.pop();

        this.sources = [
            {
                path: `${path}/${name}-large.webp`,
                media: '(min-width: 2000px)'
            },
            {
                path: `${path}/${name}-medium.webp`,
                media: '(min-width: 640px)'
            },
            {
                path: `${path}/${name}-small.webp`,
                media: '(min-width: 200px)'
            },{
                path: `${path}/${name}-large.${extension}`,
                media: '(min-width: 2000px)'
            },
            {
                path: `${path}/${name}-medium.${extension}`,
                media: '(min-width: 640px)'
            },
            {
                path: `${path}/${name}-small.${extension}`,
                media: '(min-width: 200px)'
            },
            {
                path: this.path,
                media: ''
            }
        ]
    }
    
}