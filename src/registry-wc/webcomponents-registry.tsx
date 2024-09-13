import {
    applyPolyfills,
    defineCustomElements,
    JSX as LocalJSX,
  } from '@npm-bbta/bbog-dig-dt-webcomponents-lib/loader';

import { DetailedHTMLProps, HTMLAttributes } from 'react';

type StencilProps<T> = {
[P in keyof T]?: Omit<T[P], 'ref'> | HTMLAttributes<T>;
};

type ReactProps<T> = {
[P in keyof T]?: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>;
};

type StencilToReact<
T = LocalJSX.IntrinsicElements,
U = HTMLElementTagNameMap
> = StencilProps<T> & ReactProps<U>;

declare global {
/* eslint-disable  @typescript-eslint/no-namespace */
export namespace JSX {
    /* eslint-disable  @typescript-eslint/no-empty-interface */
    interface IntrinsicElements extends StencilToReact { }
}
}

applyPolyfills().then(() => {
    defineCustomElements();
});
    