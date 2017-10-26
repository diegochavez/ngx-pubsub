import resolve from 'rollup-plugin-node-resolve';

// Add here external dependencies that actually you use.
const globals = {
    '@angular/core': 'ng.core',
};

export default {
    entry: './dist/modules/ngx-pubsub.es5.js',
    dest: './dist/bundles/ngx-pubsub.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.ngxpubsub',
    plugins: [resolve()],
    external: Object.keys(globals),
    globals: globals,
    onwarn: () => { return }
}
