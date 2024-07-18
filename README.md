# Restaurant UI

## Description

### EN:

JavaScript React app for a restaurant. The page includes info about the restaurant like the story and the contact info, including a map location and a form for messages. When connected to server API, User can register and login, then add different amount of dishes to its cart, before checking out, the user can see all the dishes in his cart and modify the quantity of them. User can make an order after paying with credit card.

### ES:

Aplicación JavaScript React para un restaurante. La página incluye información sobre el restaurante, como la historia y la información de contacto, incluida una ubicación en el mapa y un formulario para mensajes. Cuando se conecta a la API del servidor, el usuario puede registrarse e iniciar sesión, luego agregar diferentes cantidades de platos a su carrito, antes de pagar, el usuario puede ver todos los platos en su carrito y modificar la cantidad de ellos. El usuario puede realizar un pedido después de pagar con tarjeta de crédito.

## Features

### EN:

- Dark mode implemented
- Responsive design with custom theme in Material UI
- JWT-based authentication
- Integration with server side API (local)
- Payment through third party service (Stripe API)
- Routing with react router
- Notification system with react toastify
- State management with Redux Toolkit

### ES:

- Modo oscuro implementado
- Diseño responsivo con tema personalizado en Material UI
- Autenticación basada en JWT
- Integración con API del lado del servidor (local)
- Pago a través de servicio de terceros (Stripe API)
- Enrutamiento con React Router
- Sistema de notificación con React Toastify
- Gestión de estados con Redux Toolkit

## Requirements

- React 18
- Restaurant API (https://github.com/cris-jac/sql-dotnet-restaurant-api.git)

## Screenshots

### Main (principal)

![01-main](https://github.com/user-attachments/assets/461ed440-a871-4d7a-a287-907db2bc1a89)

### Menu (menu)

![04-menu](https://github.com/user-attachments/assets/a9f934c6-2288-4b61-bfbf-148e136e7fb7)

### Dish details (detalles de plato)

![07-details](https://github.com/user-attachments/assets/bdc0333d-53bd-424d-b3de-5636a30763a1)

### Payment (pago)

![10-payment-2](https://github.com/user-attachments/assets/259fa08d-abe7-4b21-b544-08c76f207f4e)

### Orders (ordenes)

![12-orders](https://github.com/user-attachments/assets/f223afde-0179-465b-8200-c8265cd55945)

Other screenshots available in '/screenshots'

## Installation

### Steps:

1. Clone from github, using this command:<br>
   `git clone https://github.com/cris-jac/react-restaurant-ui.git`

2. Navigate to the repository folder:<br>
   `cd react-restaurant-ui`

3. Install dependencies:<br>
   `npm install`

- Optional: modify API URL (.env):<br>
  `VITE_API_URL="API_url"`

- Recommended: run API application (https://github.com/cris-jac/sql-dotnet-restaurant-api.git):<br>
  `dotnet run`

4. Run the app:<br>
   `npm run dev`

- Optional: Payment test data for VISA card

```
Card number (VISA):	4242 4242 4242 4242
Date (any future):	MM/YY	(ex: 12/24)
CVC (random):		XYZ		(ex: 123)
```

### Pasos:

1. Clonar el repositorio de github, usando este comando:<br>
   `git clone https://github.com/cris-jac/react-restaurant-ui.git`

2. Navegar al directorio:<br>
   `cd react-restaurant-ui`

3. Instalar dependencias:<br>
   `npm install`

- Opcional: modificar API URL (.env):<br>
  `VITE_API_URL="API_url"`

- Recomendado: correr aplicación API (https://github.com/cris-jac/sql-dotnet-restaurant-api.git):<br>
  `dotnet run`

4. Correr la app:<br>
   `npm run dev`

- Opcional: Datos de prueba para pago con tarjeta VISA

```
Numero de tarjeta (VISA):  4242 4242 4242 4242
Fecha (cualquiera):        MM/YY	(ej: 12/24)
CVC (random):              XYZ		(ej: 123)
```

## Port

The default local port:<br>
http://localhost:5173/
