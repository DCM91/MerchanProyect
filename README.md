# ⚔️ MerchanSagas

**Marketplace de merchandising de sagas míticas.**

Encuentra réplicas, coleccionables y productos oficiales de tus sagas favoritas: Star Wars, El Señor de los Anillos, Harry Potter, Dragon Ball, Marvel y más.

## 📱 Screenshots

> *Próximamente*

## 🚀 Tech Stack

- **[Expo](https://expo.dev)** — SDK 54, framework cross-platform
- **[React Native](https://reactnative.dev)** — v0.81
- **[Expo Router](https://docs.expo.dev/router/introduction/)** — Navegación basada en archivos
- **[TypeScript](https://www.typescriptlang.org/)** — Tipado estático
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** — Animaciones fluidas

## 📂 Estructura del proyecto

```
MerchanProyect/
├── app/                    # Pantallas y navegación (Expo Router)
│   ├── (tabs)/             # Navegación por tabs
│   │   ├── index.tsx       # Home - Landing del marketplace
│   │   ├── explore.tsx     # Catálogo - Productos por saga
│   │   └── _layout.tsx     # Configuración de tabs
│   ├── _layout.tsx         # Layout raíz
│   └── modal.tsx           # Modal
├── components/             # Componentes reutilizables
│   ├── ProductCard.tsx     # Card de producto
│   ├── CategoryBadge.tsx   # Badge de categoría/saga
│   ├── SectionHeader.tsx   # Header de sección
│   └── ...                 # Componentes del template
├── constants/              # Constantes y configuración
│   ├── theme.ts            # Paleta de colores y tipografía
│   └── mock-data.ts        # Datos de prueba (productos, categorías)
├── hooks/                  # Custom hooks
├── assets/                 # Imágenes y fuentes
└── package.json
```

## 🛠️ Instalación

### Requisitos previos
- **Node.js** ≥ 20.x
- **npm** ≥ 10.x
- **Expo Go** app en tu móvil ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/MerchanProyect.git
cd MerchanProyect

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npx expo start
```

Escanea el código QR con **Expo Go** o pulsa `w` para abrir en el navegador.

## 📋 Roadmap

- [x] **Fase 1**: Diseño UI inicial con datos mock
- [ ] **Fase 2**: Navegación avanzada y detalle de producto
- [ ] **Fase 3**: Integración con backend / API
- [ ] **Fase 4**: Carrito de compras y checkout
- [ ] **Fase 5**: Autenticación de usuarios
- [ ] **Fase 6**: Despliegue y publicación

## 🤝 Contribuir

Este proyecto está en desarrollo activo. Si quieres contribuir:

1. Haz fork del repositorio
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'feat: nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado. Todos los derechos reservados.

---

*Hecho con ❤️ y Expo*
