import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            primaryHover: string;
            secoundary: string;
            secoundaryHover: string;
        };
        media: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }
}
