# Estructura
## Explicacion de la arquitectura
- Para cada caso de uso se creará una carpeta con su respectivo nombre (404, LandingPage, UserMain). Dentro de esta carpeta se crearán:
  - Una carpeta de `components` donde estarán los componentes que solo se usarán para este caso de uso.
  - Una carpeta `hooks` donde estarán los customHooks que se necesiten para el proyecto.
  - Una carpeta `page` donde se creará un componente único que contendrá la página principal que será renderizada.

- Se creará una carpeta llamada `API`, donde dentro de ella se creará una carpeta por cada API que se deba consumir de manera externa. Cada carpeta contendrá un solo archivo JS desde donde se exportará lo que se necesite de un endpoint específico.

- Se creará una carpeta llamada `components` donde se crearán carpetas para los componentes globales que se pueden usar en cualquier lugar de la aplicación (Botones, Títulos, Pantallas de carga).

- En el `App.jsx` se tendrá la configuración del enrutamiento, ya que según la documentación, este debe estar en el punto más alto de toda la aplicación para funcionar correctamente.

## Proyecto
- 📁 **app** (Carpeta para casos de uso)
  - 📁 **404** (Carpeta para página 404)
    - 📁 **components** (Componentes específicos del caso)
    - 📁 **hooks** (Custom hooks específicos del caso)
    - page.jsx (Página principal del caso)
  - 📁 **LandingPage** (Carpeta para página de aterrizaje)
    - 📁 **components** (Componentes específicos del caso)
    - 📁 **hooks** (Custom hooks específicos del caso)
    - page.js (Página principal del caso)
  - 📁 **UserMain** (Carpeta para página principal de usuario)
    - 📁 **components** (Componentes específicos del caso)
    - 📁 **hooks** (Custom hooks específicos del caso)
    - page.jsx (Página principal del caso)
- 📁 **API** (Carpeta para consumo de APIs externas)
  - 📁 **api1** (Carpeta para una API específica)
  - 📁 **api2** (Carpeta para otra API específica)
- 📁 **components** (Carpeta para componentes globales)
  - 📁 **global** (Subcarpeta para componentes reutilizables)
- App.jsx (Archivo principal de la aplicación)
- package.json (Archivo de configuración del proyecto)

## Leyenda:
- 📁: Carpeta
- : Componente React
- 🪝: Custom Hook
- : Archivo JavaScript
- : Archivo HTML/JSX
- : Botón
- ️‍♀️: Página no encontrada
- ️: Banner
- : Llamado a la acción
- ✨: Características
- : Encabezado
- : Barra lateral
- : Contenido principal
- ⏳: Pantalla de carga

## Explicación:
- **Carpeta app**: Contiene carpetas para cada caso de uso de la aplicación. Cada caso de uso tiene su propia estructura con carpetas para componentes específicos del caso, custom hooks específicos del caso y una página principal.
- **Carpeta API**: Organiza el código para consumir APIs externas. Cada API tiene su propia carpeta.
- **Carpeta components**: Contiene carpetas para componentes globales reutilizables en toda la aplicación.

