# Menu

Esta aplicación creada con React es parte de un set de administración de menues. Particularmente, esta aplicación es el POV del consumidor y está optimizada para móviles (se trata de darle apariencia de una mobile-app aunque también puede operarse en dispositivos de mayor width).

Consta de tres pantallas principales: 1) pantalla de menu, 2) pantalla de detalle del plato y 3) pantalla de lista de pedidos.

 
### Pantalla de MENU

Recoje los datos desde Firebase (creados vía la [aplicación complementaria](https://github.com/fedeferrelli/menu_cliente)) y los despliega en forma de lista mostrando la imagen, nombre, descripción abreviada y precio de cada plato. El listado está ordenado por categorías (i.e. "Pastas", "Carnes", etc) que se crean y se ordenan (jerarquicamente) con la [aplicación complementaria](https://github.com/fedeferrelli/menu_cliente). Además, en esta panatalla puede verse la cantidad de platos que se han incorporado al pedido y acceder tanto al pedido como al detalle de cada plato.

### Pantalla de DETALLE DEL PLATO

A esta pantalla se accede a traves de "clickear" el plato en cuestión desde la pantalla MENU. Acá se puede ver nuevamente la imagen del plato (con mayor tamaño), el nombre y la descripción completa del plato. Además, se pueden establecer las cantidades que desean ordenarse (mostrandose el precio total de lo que va a solicitarse). Desde esta pantalla puede regresarse a la pantalla MENU y, también, indicar cantidades deseadas del plato y dirigirse hacia la pantalla LISTA DE PEDIDOS.	

### Pantalla de LISTA DE PEDIDOS

A esta pantalla se puede acceder desde la dos pantallas "previas". Se ordenan en forma de lista los platos pedidos y sus cantidades deseadas junto al monto parcial de cada pedido como asía también la cantidad e importe totales de los items agregados. Además, se puede eliminar cada uno de los platos pedidos o eliminar el pedido completo. Desde esta pantalla de puede acceder a la pantalla MENU.y aumentar la productividad de tu tiempo!

## Herramientas utilizadas

* [React](https://es.reactjs.org/)
* [Tailwind](https://tailwindcss.com/)

* [Firebase](https://firebase.google.com/?hl=es)
* [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
* [react-icons](https://react-icons.github.io/react-icons/)
* [lodash](https://lodash.com/)
* [react-fade-in](https://www.npmjs.com/package/react-fade-in)


## Link

Recordá que está optimizada para versión mobile.
Podés acceder desde [acá](https://menu-fedeferrelli.vercel.app/)

## Screens


![Screenshot](https://user-images.githubusercontent.com/73478943/164895818-d5a77d37-7c87-44c2-9dd0-033592c30733.jpg)

![Screenshot1](https://user-images.githubusercontent.com/73478943/164896161-7a87d86a-aefc-4f73-81d1-903e1b16025e.jpg)

![ScreenShot](https://user-images.githubusercontent.com/73478943/164904151-b7ebfc3c-427c-4670-9e33-d5f4f671728b.jpg)
