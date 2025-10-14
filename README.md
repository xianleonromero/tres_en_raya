# 🎮 Tres en Raya - Tic Tac Toe

Juego clásico del tres en raya desarrollado con React. Incluye detección automática de ganador, sistema de empates y reinicio de partida.

## 🕹️ [**JUGAR AHORA**](https://xianleonromero.github.io/tres_en_raya)

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 📋 Características

✅ **Detección automática de ganador** - El juego identifica automáticamente cuando un jugador hace 3 en raya  
✅ **Sistema de empates** - Detecta cuando ya no hay más movimientos posibles  
✅ **Modal de victoria** - Pantalla emergente que muestra el ganador o empate  
✅ **Reinicio rápido** - Botón para comenzar una nueva partida sin recargar  
✅ **Alternancia de turnos** - Cambio automático entre jugadores X y O  
✅ **Interfaz responsive** - Diseño adaptable a diferentes tamaños de pantalla  
✅ **Validación de movimientos** - No permite jugar en casillas ya ocupadas  

---

## 🎯 Reglas del Juego

1. El juego es para 2 jugadores que juegan de forma alternada
2. Un jugador usa **X** y el otro usa **O**
3. Los jugadores colocan sus marcas en espacios vacíos del tablero 3x3
4. El primer jugador que consiga **3 en línea** (horizontal, vertical o diagonal) gana
5. Si todas las casillas están llenas y no hay ganador, el juego termina en **empate**

---

## 🛠️ Tecnologías Utilizadas

- **React 18.3.1** - Biblioteca de JavaScript para construir interfaces de usuario
- **React Hooks** - useState para el manejo del estado
- **React Portals** - Para renderizar el modal fuera del árbol DOM principal
- **CSS3** - Estilos personalizados y diseño responsive
- **GitHub Pages** - Hosting y despliegue

---

## 🚀 Instalación Local

Si quieres ejecutar el proyecto en tu máquina local:

### Prerrequisitos
- Node.js instalado (versión 14 o superior)
- npm o yarn

### Pasos
```bash
# 1. Clonar el repositorio
git clone https://github.com/xianleonromero/tres_en_raya.git

# 2. Entrar al directorio del proyecto
cd tres_en_raya

# 3. Instalar las dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm start
```

El juego se abrirá automáticamente en tu navegador en `http://localhost:3000`

---

## 📦 Scripts Disponibles
```bash
npm start          # Inicia el servidor de desarrollo
npm run build      # Crea una versión optimizada para producción
npm test           # Ejecuta los tests
npm run deploy     # Despliega la aplicación en GitHub Pages
```

---

## 📂 Estructura del Proyecto
```
tres_en_raya/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App/
│   │   ├── App.css
│   │   └── index.js
│   ├── Game/
│   │   ├── Game.css
│   │   └── index.js
│   ├── Modal/
│   │   └── index.js
│   ├── VictoryScreen/
│   │   ├── VictoryScreen.css
│   │   └── index.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

---

## 👤 Autor

**Xian Leon Romero**

- GitHub: [@xianleonromero](https://github.com/xianleonromero)
- Proyecto: [Tres en Raya](https://github.com/xianleonromero/tres_en_raya)
- Demo: [Jugar Online](https://xianleonromero.github.io/tres_en_raya)
