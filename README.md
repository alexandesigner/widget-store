## Carhoo Store Widget
[![npm version](https://badge.fury.io/js/%40carhoo%2Fwidget-store.svg)](https://badge.fury.io/js/%40carhoo%2Fwidget-store)

![Print](https://github.com/alexandesigner/widget-store/blob/master/print.png)

### Como usar?

Primeiro copie e cole este trecho de html no local onde deseja renderizar a lista
```html
<div class="carhoo-widget"></div>
```

Após o primeiro passo, copie e cole este script no seu site
```js
<script async>
  (function (w,d,s,o,f,js,fjs) {
      w['Carhoo-Store']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'cw', 'https://unpkg.com/@carhoo/widget-store@0.0.3/dist/widget.js'));
  cw('render', {responsive: true});
</script>
```


